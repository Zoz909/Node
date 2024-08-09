const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
app.use(express.urlencoded({ extended: true }));
const { mongo } = require('mongoose');
app.set('view engine', 'ejs')
app.use(express.static('public'))
var methodOverride = require('method-override')
app.use(methodOverride('_method'))
const Routes = require('./routes/routes')





mongoose.connect(
  'mongodb+srv://zezoboss666:Ud5AzRoaYFc1HBm3@cluster0.9ulfs.mongodb.net/ClientsData?retryWrites=true&w=majority&appName=Cluster0'
)
.then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})
.catch( err => console.log(err));

  app.use(Routes)