const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const WAREHOUSE_JSON_PATH = "data/warehouses.json";
const INVENTORY_JSON_PATH = "data/inventories.json";

const readFile = (filepath) => {
  let data = fs.readFileSync(filepath);
  return JSON.parse(data);
};

/* GET ALL INVENTORY ITEMS */
router.get("/", (req, res) => {
  const srcPath = path.resolve(__dirname, "../data/inventories.json");
  const allInventory = JSON.parse(fs.readFileSync(srcPath));
  res.json(allInventory);
});

/* GET SINGLE INVENTORY ITEM*/
router.get("/:itemId", (req, res) => {
  const id = req.params.itemId;
  const readInventory = readFile(INVENTORY_JSON_PATH);
  const item = readInventory.find(
    (singleInventory) => singleInventory.id == id
  );
  res.status(200).json(item);

  // const inventory = getWarehouses(res);
  // if (warehouses) {
  //     const index = getWarehouseIndex(res, req.params.warehouseId);
  //     if (index) res.status(400).send(JSON.stringify(warehouses[index]));
  // }
});

/* GET INVENTORY ITEMS FROM SPECIFIC WAREHOUSE */
router.get("/data/:warehouseId", (req, res) => {
  data = [
    {
      id: "9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3",
      warehouseID: "2922c286-16cd-4d43-ab98-c79f698aeab0",
      warehouseName: "Manhattan",
      itemName: "Television",
      description:
        'This 50", 4K LED TV provides a crystal-clear picture and vivid colors.',
      category: "Electronics",
      status: "In Stock",
      quantity: 500,
    },
    {
      id: "83433026-ca32-4c6d-bd86-a39ee8b7303e",
      warehouseID: "2922c286-16cd-4d43-ab98-c79f698aeab0",
      warehouseName: "Manhattan",
      itemName: "Gym Bag",
      description:
        "Made out of military-grade synthetic materials, this gym bag is highly durable, water resistant, and easy to clean.",
      category: "Gear",
      status: "Out of Stock",
      quantity: 0,
    },
    {
      id: "a193a6a7-42ab-4182-97dc-555ee85e7486",
      warehouseID: "2922c286-16cd-4d43-ab98-c79f698aeab0",
      warehouseName: "Manhattan",
      itemName: "Hoodie",
      description:
        "A simple 100% cotton hoodie, this is an essential piece for any wardrobe.",
      category: "Apparel",
      status: "Out of Stock",
      quantity: 0,
    },
  ];
  res.send(data);
});

/* CREATE A NEW INVENTORY ITEM*/
router.post("/", (req, res) => {
  let parsedInventoryData = readFile(INVENTORY_JSON_PATH);
  let parsedWarehouseData = readFile(WAREHOUSE_JSON_PATH);

  const {
    itemName,
    warehouseName,
    description,
    category,
    status,
    quantity,
  } = req.body;

  if (
    !(
      itemName &&
      warehouseName &&
      description &&
      category &&
      status &&
      (status == "Out of Stock" ? 1 : quantity)
    )
  ) {
    res.status(400).send("All new item fields are REQUIRED");
    return;
  }

  const foundWarehouse = parsedWarehouseData.find(
    (warehouse) => warehouseName == warehouse.name
  );

  if (!foundWarehouse) {
    res.status(404).send("Warehouse not found");
    return;
  }

  const newItem = {
    id: uuidv4(),
    warehouseID: foundWarehouse.id,
    warehouseName: warehouseName,
    itemName: itemName,
    description: description,
    category: category,
    status: status,
    quantity: quantity,
  };

  parsedInventoryData.push(newItem);

  const stringInventoryData = JSON.stringify(parsedInventoryData);

  fs.writeFileSync(INVENTORY_JSON_PATH, stringInventoryData);
  res.status(200).json(newItem);
});

/* UPDATE SINGLE INVENTORY ITEM*/
router.patch("/:itemId", (req, res) => {
  let parsedInventoryData = readFile(INVENTORY_JSON_PATH);

  const { itemId } = req.params;
  const {
    itemName,
    warehouseName,
    description,
    category,
    status,
    quantity,
  } = req.body;

  if (
    !(
      itemName &&
      warehouseName &&
      description &&
      category &&
      status &&
      (status == "Out of Stock" ? 1 : quantity)
    )
  ) {
    res.status(400).send("All item fields are REQUIRED");
    return;
  }

  const foundItemIndex = parsedInventoryData.findIndex(
    (item) => itemId == item.id
  );

  if (foundItemIndex === -1) {
    res.status(404).send("Item not found");
    return;
  }

  parsedInventoryData[foundItemIndex] = {
    ...parsedInventoryData[foundItemIndex],
    ...req.body,
  };

  const stringInventoryData = JSON.stringify(parsedInventoryData);
  fs.writeFileSync(INVENTORY_JSON_PATH, stringInventoryData);

  res.status(200).json(parsedInventoryData[foundItemIndex]);
});

/* DELETE A INVENTORY ITEM */
router.delete("/itemId", (req, res) => {});

module.exports = router;
