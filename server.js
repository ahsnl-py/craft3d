const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/craft3d'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/craft3d/index.html'));});
app.listen(process.env.PORT || 8080);
