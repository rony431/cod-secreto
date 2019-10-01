var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send(req.header('user-agent'));
});

app.listen(process.env.PORT || 3000 , () => console.log('Listening on port 3000!'));
