var express = require('express');
var exphbs  = require('express-handlebars');

const path =require('path')
var app = express()
const port = 3000

var hbs = exphbs.create({ /* config */ });

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use('/',require(path.join(__dirname,'routes/blog.js')))
app.use(express.static(path.join(__dirname,"static")))



app.listen(port, () => {
  console.log(`Blog app listening at port http://localhost:${port}`)
})