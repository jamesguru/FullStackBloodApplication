const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name:{type:String, require:true},
    email:{type:String, require:true},
    password:{type:String, require:true},
    status:{type:Number, default:0},
    role:{type:String, default:"admin"}
},{
timestamp:true
})

module.exports=mongoose.model("User", UserSchema)