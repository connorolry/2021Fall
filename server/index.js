const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000;
const usersController = require('./controllers/users')
require('dotenv').config();
console.log(`The best class at New Paltz is $(process.env.BEST_CLASS)`)

app

  .use('/', express.static(path.join(__dirname, '../docs')) )
  .use('/users', usersController)
app 
  .get('*', (req, res) => res.sendFile(path.join(__dirname, '../docs/index.html')))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})