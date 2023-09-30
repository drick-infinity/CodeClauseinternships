const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/mydatabase").then(()=>{
    console.log("connection sucessfull");
}).catch((e)=>{
    console.log(`no connection`);
})