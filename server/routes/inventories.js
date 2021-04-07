const express = require('express')
const router = express.Router()
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');


const WAREHOUSE_JSON_PATH = 'data/warehouses.json'
const INVENTORY_JSON_PATH = 'data/inventories.json'

const readFile =(filepath) => {

    let data = fs.readFileSync(filepath)
    
    return JSON.parse(data);
}

const bodyValidation = (body) => {

    const { itemName, warehouseName, description, category, status, quantity } = body

        if( !(itemName && warehouseName && description && category && status && ( status == "Out of Stock" ?  1 : quantity )) )
         {
            
            return (res.status(400).send("All new item fields are REQUIRED"))
        }
}

/* GET ALL INVENTORY ITEMS */
router.get('/', (req, res) => {
    const srcPath = path.resolve(__dirname, '../../server/data/warehouses.json');
    const allWarehouses = JSON.parse(fs.readFileSync(srcPath));
    res.json(allWarehouses);
  })
    

/* GET SINGLE INVENTORY ITEM*/
    router.get("/:itemId", (req, res) => {

    })

/* GET INVENTORY ITEMS FROM SPECIFIC WAREHOUSE */
    router.get("/:warehouseId", (req, res) => {

    })

/* CREATE A NEW INVENTORY ITEM*/
    router.post("/", (req, res) => {

        let parsedInventoryData = readFile(INVENTORY_JSON_PATH)
        let parsedWarehouseData = readFile(WAREHOUSE_JSON_PATH)

        const { itemName, warehouseName, description, category, status, quantity } = req.body

        if( !(itemName && warehouseName && description && category && status && ( status == "Out of Stock" ?  1 : quantity )) )
         {
            res.status(400).send("All new item fields are REQUIRED")
            return
        }

        const foundWarehouse = parsedWarehouseData.find( warehouse => warehouseName == warehouse.name )

            if(!foundWarehouse) {
                res.status(404).send("Warehouse not found")
                return
            }

        const newItem =
        {
            "id": uuidv4(),
            "warehouseID": foundWarehouse.id,
            "warehouseName": warehouseName,
            "itemName": itemName,
            "description": description,
            "category": category,
            "status": status,
            "quantity": quantity
        } 

        parsedInventoryData.push(newItem)

        const stringInventoryData = JSON.stringify(parsedInventoryData);
        
        fs.writeFileSync(INVENTORY_JSON_PATH, stringInventoryData)
        res.status(200).json(newItem)

    })

/* UPDATE SINGLE INVENTORY ITEM*/
    router.patch("/:itemId", (req, res) => {

        let parsedInventoryData = readFile(INVENTORY_JSON_PATH)

        const { itemId } = req.params
        const { itemName, warehouseName, description, category, status, quantity } = req.body

        if( !(itemName && warehouseName && description && category && status && ( status == "Out of Stock" ?  1 : quantity )) )
         {
            res.status(400).send("All item fields are REQUIRED")
            return
        }

        const foundItemIndex = parsedInventoryData.findIndex( item => itemId == item.id )

            if( foundItemIndex === -1 ) {
                res.status(404).send("Item not found")
                return
            }

        parsedInventoryData[foundItemIndex] = 
        {
        ...parsedInventoryData[foundItemIndex],
        ...req.body
        }

        const stringInventoryData = JSON.stringify(parsedInventoryData);
        fs.writeFileSync(INVENTORY_JSON_PATH, stringInventoryData)

        res.status(200).json(parsedInventoryData[foundItemIndex])

    })

/* DELETE A INVENTORY ITEM */
    router.delete("/itemId", (req, res) => {

    })


module.exports = router