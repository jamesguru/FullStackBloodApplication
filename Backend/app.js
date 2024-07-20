const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./routes/auth")
module.exports=app;

//CORS
app.use(cors());

// JSON
app.use(express.json());

// ROUTES
app.use("/api/v1/auth",authRoute)
