const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cron = require('node-cron');
const dbConnection = require("./utils/db");
dotenv.config();

// SERVER
const PORT =  process.env.PORT;

// SCHEDULE TASK

const run = () =>{
    cron.schedule('* * * * * *', () => {
        
   });
}

run();

app.listen(8001, () =>{
    console.log(`Backgroundservices is running on 8001`);
    dbConnection();
})