const express = require("express");
const router = express.Router();

const WAREHOUSE_JSON_PATH = "../data/warehouses.json";
const INVENTORY_JSON_PATH = "../data/inventories.json";
const fs = require("fs");
const path = require("path");

/* GET ALL WAREHOUSES */
router.get("/", (req, res) => {
  const srcPath = path.resolve(__dirname, "../data/warehouses.json");
  const allWarehouses = JSON.parse(fs.readFileSync(srcPath));
  res.json(allWarehouses);

  //   res.send('hello world')
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
router.patch("/warehouseId", (req, res) => {});

/* DELETE A WAREHOUSE */
router.delete("/warehouseId", (req, res) => {});

module.exports = router;
