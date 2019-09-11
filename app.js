var express = require('express');
var app = express();

app.get('/result', function(req, res){
    res.send(req.header('user-agent'));
});

app.listen(3000, () => console.log('Listening on port 3000!'));
