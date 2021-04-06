 const express = require("express");
 const app = express();
 const PORT = 8080;
 const warehouseRouter = require('../routes/warehousesList')


 app.use(express.json());
 
 app.use('/warehouses', warehouseRouter),
 
 
 app.listen(PORT, () => {
     console.log('express is running')
 })

