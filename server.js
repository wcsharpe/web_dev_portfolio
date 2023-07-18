const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const route = require('./route/pages') // how pages will interact with each other
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))
app.use('/', route);

mongoose.connect('mongodb+srv://willcsharpe:mdNmPUeYCq1GrddO@cluster0.enrfnwi.mongodb.net/portfolioDB', {useNewURLParser: true, useUnifiedTopology: true})
.then(()=> {
  app.listen(3000, () =>{
    console.log("server is running on 3000")
  })
})


//willcsharpe
//mdNmPUeYCq1GrddO
