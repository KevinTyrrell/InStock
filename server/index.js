
const express = require("express");
const cors = require("cors");
const app = express();

const warehouseRoutes = require("./routes/warehouses");
const inventoryRoutes = require("./routes/inventories");

const SERVER_PORT = 8080;

app.use(express.json());
app.use(cors());

app.use("/warehouses", warehouseRoutes);
app.use("/inventories", inventoryRoutes);

app.listen(SERVER_PORT, () => {
  console.log(`Express server running on port ${SERVER_PORT}`);
});
