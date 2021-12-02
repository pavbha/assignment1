const express=require('express')
const route=express.Router();

route.get('/',(req,res)=>{
    if(req.query.name){
        res.send( `Hai ${req.query.name}`);
    }
    else{
        res.send('Welcome home')
    }
});

module.exports=route;