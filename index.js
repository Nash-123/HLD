const express = require('express');
const ip = require('ip');

const app = express();


app.get("/ping", (req,res) => {
    for(int i=0;i<100000000000;i++){}
    return res.json({
        message: "Ping Suuccessful",
        ip: ip.address()
    })
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
