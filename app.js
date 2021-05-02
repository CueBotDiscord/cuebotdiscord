var express = require('express');
const path = require('path');
var app = express();
app.use('/html', express.static(__dirname + '/html'))
app.get('/', function(req, resp) {
    resp.sendFile('index.html', {root: path.join(__dirname, './html')})
})
app.listen(1337, function() { 
    console.log("online at port 1337")
})