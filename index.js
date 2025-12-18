const express = require('express');
const ip = require('ip');

const app = express();


app.get("/ping", (req,res) => {
    return res.json({
        message: "Ping Suuccessful",
        ip: ip.address()
    })
});

app.get("/heavy", (req,res) => {

    for(let i=0;i<1000000;i++){};
    return res.json({
        message: "Heavy Endpoint Processed",
        ip: ip.address()
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
