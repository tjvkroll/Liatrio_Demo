const express = require('express');     
const app = express();                  

app.get('/', (req, res)=>{
    res.json({
        "message": "My name is Travis Kroll",
        "timestamp": Date.now(),
    }); 
}); 

app.listen(80); 