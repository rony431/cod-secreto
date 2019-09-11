const express = require('express')
const app = express()

app.get('', (req, res) => {
  var str = '<form method="POST" action=""><input type="text" name="username" /><input type="submit" /><form>'
  res.send(str)
});
app.use(express.urlencoded())
app.post('', (req, res) => {
  const result = req.body.username
  res.send('<h1>Hola '+result+'!</h1>')
  res.end()
})

app.listen(3000, () => console.log('Listening on port 3000!'));
