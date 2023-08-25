const express = require("express");
const path = require("path");
const cors = require("cors");
const { log } = require("console");


const app = express();
const port = process.env.PORT || 3100;


app.use(cors({
    origin: '*'
}));

app.get("*", async (req, res)=>{
    var max = parseInt(req.query.value)
    var result = []
    console.log(req.query.value);
    for (let index = 1; index <= max; index++) {
        var result1 = []
        for (let j = 1; j <= max; j++) {
                result1.push(index*j)
                
        }
        result.push(result1)
    }
    
    res.send(result);
})


app.listen(port, ()=> console.log("server is running on" + port));
