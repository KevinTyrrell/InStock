const { json } = require('express');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const warehousesList = "../../server/data/warehouses.json"

router.use(express.json());

router.get('/', (req, res) => {
  const srcPath = path.resolve(__dirname, '../../server/data/warehouses.json');
  const allWarehouses = JSON.parse(fs.readFileSync(srcPath));
  res.json(allWarehouses);
//   res.send('hello world')
})


module.exports = router;