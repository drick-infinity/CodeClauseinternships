const express = require("express");
const app = express();
const {json} = require("express");
const path = require("path");
require("./db/connection");
app.use(express.static("public"));
const Submit = require("./models/submit");

const port = process.env.PORT || 3000

const static_path = path.join(__dirname,"../views")

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set("view engine","hbs");
app.get('/',(req,res) => {
    res.render("index");
});
app.get('/home',(req,res)=>{
    res.render("home");
});
app.get('/posts',async (req,res)=>{
    try{
        const comments = await Submit.find({});
        res.render("posts",{comments});
    }catch(error){
        res.status(500).send(error);
    }
});

// new method
app.post("/posts", async (req,res) =>{

    try{
        const comments = new Submit({
            //   comment: {type: String},
              comment:req.body.comment,
              // commentId:{type:Schema.Types.ObjectId,ref:"comment"},
              // createdBy:{type:Schema.Types.ObjectId,ref:"user"} 
            });
            const commented = await comments.save();
            res.redirect("/posts");  
            // console.log(req.body.comment);
            // res.send(req.body.comment);
    }catch(error){
        res.status(400).send(error);
    }
});



app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})