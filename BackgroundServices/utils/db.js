const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

//DB
const DB = process.env.DB;

const dbConnection = async() =>{
    try {
        await mongoose.connect(DB).then(()=>{
            console.log("Database connected Successfully")
        })
    } catch (error) {
        console.log(error);
        setTimeout(dbConnection,5000);
    }
}

module.exports=dbConnection;