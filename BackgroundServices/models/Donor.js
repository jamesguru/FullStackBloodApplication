const mongoose = require("mongoose");

const DonorSchema = mongoose.Schema({
    name:{type:String, require:true},
    email:{type:String, require:true},
    address:{type:String},
    tel:{type:String},
    bloodgroup:{type:String},
    weight:{type:Number},
    date:{type:String},
    diseases:{type:String},
    age:{type:Number},
    bloodpressure:{type:Number},
    status:{type:Number, default:0}
})

module.exports=mongoose.model("Donor", DonorSchema);