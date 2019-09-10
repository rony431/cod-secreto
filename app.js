const express = require('express')
const app = express()

app.get('', (req, res) => {
  for(var i = 1; i<=50; i++){
    console.log(i)
    if (i % 2 == 0){
      res.write('<p> '+i+'Soy Par!</p>');
    }else{
      res.write('<p> '+i+'Soy Impar!</p>');
    }

  }

});
app.listen(3000, () => console.log('Listening on port 3000!'));