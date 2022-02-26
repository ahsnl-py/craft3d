const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/craft-gui'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/craft-gui/index.html'));});
app.listen(process.env.PORT || 8080);
