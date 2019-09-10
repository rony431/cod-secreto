const express = require('express')
const app = express()

app.get('/', (req, res) => {
  var name = req.query.nombre;
  if (name){
    res.send('<h1>Hola '+name+'!</h1>');
  }else{
    res.send('<h1>Hola desconocido!</h1>');
  }


});

app.listen(3000, () => console.log('Listening on port 3000!'));