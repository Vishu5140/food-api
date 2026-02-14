const express = require ('express');
const cors=require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const data=require('../food.json');
app.use(cors());
app.use(express.json());
app.get("/api/food",(req,res)=>{
    res.json(data);
})
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})