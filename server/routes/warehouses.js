const express = require('express')
const router = express.Router()
const fs = require('fs');
const path = require('path');

const WAREHOUSE_JSON_PATH = 'data/warehouses.json'
const INVENTORY_JSON_PATH = 'data/inventories.json'

const readFile =(path) => {

    let data = fs.readFileSync(path)
    
    return JSON.parse(data);
}

/* GET ALL WAREHOUSES */
router.get('/', (req, res) => {
    const srcPath = path.resolve(__dirname, '../data/warehouses.json');
    const allWarehouses = JSON.parse(fs.readFileSync(srcPath));
    res.json(allWarehouses);
    
  })
  


/* GET A SINGLE WAREHOUSE */
    router.get("/:warehouseId", (req, res) => {

    })

/* CREATE A NEW WAREHOUSE */
    router.post("/", (req, res) => {

    })

/* UPDATE A WAREHOUSE */
    router.patch("/:warehouseId", (req, res) => {
        
        const { warehouseId } = req.params
        const { name, address, city, country} = req.body
        const { position, phone, email } = req.body.contact

        let parsedWarehouseData = readFile(WAREHOUSE_JSON_PATH)
        let parsedInventoryData = readFile(INVENTORY_JSON_PATH)


        if( !(name && address && city && country) )
            {
            res.status(400).send("All Warehouse detail fields are REQUIRED")
            return
            }

        if( !(req.body.contact.name && position && phone && email) )
            {
            res.status(400).send("All Contact Detail fields are REQUIRED")
            return
            }

        const foundWarehouseIndex = parsedWarehouseData.findIndex( warehouse => warehouseId == warehouse.id )


        if( foundWarehouseIndex === -1 )
            {
            res.status(404).send("Warehouse not found")
            return
            }

        const warehouseNameToChange = parsedWarehouseData[foundWarehouseIndex].name

        if(name != warehouseNameToChange ){

            let changeIndexes = []
            parsedInventoryData.forEach((item, index) =>{

                if(item.warehouseName == warehouseNameToChange){
                    changeIndexes.push(index)
                }})

            changeIndexes.forEach(inventoryIndex => {
                parsedInventoryData[inventoryIndex].warehouseName = name
            })

            const stringInventoryData = JSON.stringify(parsedInventoryData);
            fs.writeFileSync(INVENTORY_JSON_PATH, stringInventoryData)
            }
            

         parsedWarehouseData[foundWarehouseIndex] = 
        {
        ...parsedWarehouseData[foundWarehouseIndex],
        ...req.body
        } 
        const stringWarehouseData = JSON.stringify(parsedWarehouseData);
        fs.writeFileSync(WAREHOUSE_JSON_PATH, stringWarehouseData)

        res.status(200).json(parsedWarehouseData[foundWarehouseIndex])
    })

/* DELETE A WAREHOUSE */
    router.delete("/:warehouseId", (req, res) => {

    })

    module.exports = router;