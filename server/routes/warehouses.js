const express = require("express");
const fs = require("fs");
const path = require("path");

const JSONData = require("./../util/json-data.js");

const router = express.Router();
const warehouseJSON = new JSONData("warehouses");
const inventoryJSON = new JSONData("inventories");

// Returns an array of all warehouses.
function getWarehouses(res) {
  return warehouseJSON.load((err) => {
    res.status(500).send(err);
  });
}

// Returns the index of the first warehouse matching an ID.
function getWarehouseIndex(warehouses, res, id) {
  if (id) {
    const index = warehouses.findIndex((wh) => wh.id === id);
    if (index < 0)
      res.status(400).send(`No such warehouse exists with ID: ${id}`);
    else return index;
  } else res.status(400).send("Required ID parameter was null or unspecified.");
}

/* GET ALL WAREHOUSES */
router.get("/", (req, res) => {
  const srcPath = path.resolve(__dirname, "../data/warehouses.json");
  const allWarehouses = JSON.parse(fs.readFileSync(srcPath));
  res.json(allWarehouses);
});

/* GET A SINGLE WAREHOUSE */
router.get("/:warehouseId", (req, res) => {
  const id = req.params.warehouseId;
  const srcPath = path.resolve(__dirname, "../data/warehouses.json");
  const allWarehouses = JSON.parse(fs.readFileSync(srcPath));
  const warehouseId = allWarehouses.find((warehouse) => warehouse.id == id);
  res.json(warehouseId);
});

/* CREATE A NEW WAREHOUSE */
router.post("/", (req, res) => {});

/* UPDATE A WAREHOUSE */
router.patch("/:warehouseId", (req, res) => {
  const { warehouseId } = req.params;
  const { name, address, city, country } = req.body;
  const { position, phone, email } = req.body.contact;

  let parsedWarehouseData = readFile(WAREHOUSE_JSON_PATH);
  let parsedInventoryData = readFile(INVENTORY_JSON_PATH);

  if (!(name && address && city && country)) {
    res.status(400).send("All Warehouse detail fields are REQUIRED");
    return;
  }

  if (!(req.body.contact.name && position && phone && email)) {
    res.status(400).send("All Contact Detail fields are REQUIRED");
    return;
  }

  const foundWarehouseIndex = parsedWarehouseData.findIndex(
    (warehouse) => warehouseId == warehouse.id
  );

  if (foundWarehouseIndex === -1) {
    res.status(404).send("Warehouse not found");
    return;
  }

  const warehouseNameToChange = parsedWarehouseData[foundWarehouseIndex].name;

  if (name != warehouseNameToChange) {
    let changeIndexes = [];
    parsedInventoryData.forEach((item, index) => {
      if (item.warehouseName == warehouseNameToChange) {
        changeIndexes.push(index);
      }
    });

    changeIndexes.forEach((inventoryIndex) => {
      parsedInventoryData[inventoryIndex].warehouseName = name;
    });

    const stringInventoryData = JSON.stringify(parsedInventoryData);
    fs.writeFileSync(INVENTORY_JSON_PATH, stringInventoryData);
  }

  parsedWarehouseData[foundWarehouseIndex] = {
    ...parsedWarehouseData[foundWarehouseIndex],
    ...req.body,
  };
  const stringWarehouseData = JSON.stringify(parsedWarehouseData);
  fs.writeFileSync(WAREHOUSE_JSON_PATH, stringWarehouseData);

  res.status(200).json(parsedWarehouseData[foundWarehouseIndex]);
});

router.patch("/:warehouseId", (req, res) => {});

/* DELETE A WAREHOUSE */
router.delete("/:warehouseId", (req, res) => {
  const warehouses = getWarehouses(res);
  if (!warehouses) return;
  const id = req.params.warehouseId;
  const index = getWarehouseIndex(res, id);
  if (!index) return;

  // Remove the warehouse which matches the ID.
  warehouses.splice(index, 1);
  warehouseJSON.save(warehouses);

  // Remove ALL inventories which match the I
  const inventories = inventoryJSON.load((err) => {
    res.status(500).send(err);
  });
  if (inventories) {
    inventoryJSON.save(inventories.filter((inv) => inv.warehouseID !== id));
  }
});

module.exports = router;
