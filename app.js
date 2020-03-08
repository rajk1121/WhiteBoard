var express = require('express')
const fs = require('fs')
const index = fs.readFileSync('index.html')
var app = express();
app.get('', (req, res) => {
    res.status(200).write(index);
    res.end();
})
const PORT = 8000 || process.env.PORT;;
app.listen(PORT, (req, res) => {
    console.log("Server started")
})