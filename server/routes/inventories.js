const express = require('express')
const router = express.Router()


const WAREHOUSE_JSON_PATH = '../data/warehouses.json'
const INVENTORY_JSON_PATH = '../data/inventories.json'

/* GET ALL INVENTORY ITEMS */
    router.get("/", (req, res) => {

    })  

/* GET SINGLE INVENTORY ITEM*/
    router.get("/:itemId", (req, res) => {

    })

/* GET INVENTORY ITEMS FROM SPECIFIC WAREHOUSE */
    router.get("/:warehouseId", (req, res) => {

    })

/* CREATE A NEW INVENTORY ITEM*/
    router.post("/create", (req, res) => {

    })
/* UPDATE SINGLE INVENTORY ITEM*/
    router.patch("/:itemId", (req, res) => {

    })

/* DELETE A INVENTORY ITEM */
    router.delete("/itemId", (req, res) => {

    })


module.exports = router