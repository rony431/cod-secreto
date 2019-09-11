var express = require('express');
var app = express();
var useragent = require('express-useragent');
 
app.use(useragent.express());
app.get('/result', function(req, res){
    res.send(req.useragent.browser);
});


app.listen(3000, () => console.log('Listening on port 3000!'));
