const express = require("express");
const adminRoute = require("./Routes/adminRoute");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/mongodb");
const frontendRoute = require("./Routes/frontendRoute");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use("/uploads", express.static("uploads"));

app.use("/api", adminRoute);
app.use("/api", frontendRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
