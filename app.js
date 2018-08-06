const express = require('express');
const app = express();
const path = require("path");

app.use('/html2canvas',express.static(path.join(__dirname,'node_modules/html2canvas/dist/')));

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'static/map.html')))

app.listen(3000, () => console.log("Example app listening to port 3000!"))
