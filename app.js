const express = require('express');
const app = express();
const path = require("path");
var port = process.env.PORT || 8000

app.use('/html2canvas',express.static(path.join(__dirname,'node_modules/html2canvas/dist/')));
app.use('/canvas2image/canvas2image.js',express.static(path.join(__dirname,'static/canvas2image.js')))

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'static/map.html')))
app.listen(port, () => console.log("Example app listening to port:"+port))
