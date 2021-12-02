const express = require('express')
const route = express.Router();

// route.get('/:pavi', (req,res)=>{
//     const text = req.params.pavi;
//     res.json({
//         startpoint:text,
//     });
// })

route.get('/:from/:to',(req,res)=>{
    const location1 = req.params.from;
    const location2 =req.params.to;
    res.json({
        startpoint: location1,
        endpoint : location2,
    })
})


// route.get('/:from-:to',(req,res)=>{
//     const locality1 = req.params.from;
//     const locality2 =req.params.to;
//     res.json({
//         startpoint: locality1,
//         endpoint : locality2,
//     })
// })

module.exports=route;