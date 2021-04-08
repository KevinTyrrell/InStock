
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

// Absolute path to warehouses JSON file.
const WAREHOUSE_JSON_PATH = (() => {
    const p = path.resolve(__dirname, "../data/warehouses.json");
    if (!fs.existsSync(p)) throw Error(`Warehouse Path does not exist: ${p}`);
    return p;
})();

/* GET ALL WAREHOUSES */
router.get("/", (req, res) => {
  const allWarehouses = JSON.parse(fs.readFileSync(WAREHOUSE_JSON_PATH));
  res.json(allWarehouses);
});

/* GET A SINGLE WAREHOUSE */
router.get("/:warehouseId", (req, res) => {
  const id = req.params.warehouseId;
  const allWarehouses = JSON.parse(fs.readFileSync(WAREHOUSE_JSON_PATH));
  const warehouseId = allWarehouses.find((warehouse) => warehouse.id == id);
  res.json(warehouseId);
});

/* CREATE A NEW WAREHOUSE */
router.post("/", (req, res) => {});

/* UPDATE A WAREHOUSE */
router.patch("/warehouseId", (req, res) => {});

/* DELETE A WAREHOUSE */
router.delete("/warehouseId", (req, res) => {
    const id = req.params.warehouseId;
    const warehouseJSON = JSON.parse(fs.readFileSync(WAREHOUSE_JSON_PATH));
    if (warehouseJSON[id]) { // only save if change was made.
        warehouseJSON[id] = undefined;
        fs.writeFileSync(WAREHOUSE_JSON_PATH, JSON.stringify(warehouseJSON));
    }
    else {
        // TODO: Reply to client that no such warehouse exists.
    }
});

module.exports = router;
