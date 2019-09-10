const express = require('express')
const app = express()

app.get('/makers/:nombre', (req, res) => {
  var name = req.params.nombre;
  if (name){
    res.send('<h1>Hola '+stringCap(name)+'!</h1>');
  }else{
    res.send('<h1>Hola desconocido!</h1>');
  }


});
function stringCap(name) 
{
    return name.charAt(0).toUpperCase() + name.slice(1);
}
app.listen(3000, () => console.log('Listening on port 3000!'));