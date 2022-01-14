const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 8800;
const mongoose = require("mongoose");
const connectDB = require('./db/conn')

app.use(cors());
app.use(express.json());
app.use(require("./routes/fav"));

//connect to mongoDB
connectDB()

//user schema 
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})

const User = new mongoose.model("User", userSchema)

//routes routes
app.post("/Login",(req,res)=>{
  const {email,password} =req.body;
  User.findone({email:email},(err,user)=>{
      if(user){
         if(password === user.password){
             res.send({message:"login sucess",user:user})
         }else{
             res.send({message:"wrong credentials"})
         }
      }else{
          res.send("not register")
      }
  })
});
app.post("/Register",(req,res)=>{
  console.log(req.body) 
  const {name,email,password} =req.body;
  User.findOne({email:email},(err,user)=>{
      if(user){
          res.send({message:"user already exist"})
      }else {
          const user = new User({name,email,password})
          user.save(err=>{
              if(err){
                  res.send(err)
              }else{
                  res.send({message:"sucessfull"})
              }
          })
      }
  })
}) 

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(port, () => console.log(`Backend server is running on port ${port}`));
});