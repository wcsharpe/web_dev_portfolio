//where all ejs routing is happening
const express = require('express');
const router = express.Router();
const Contact = require('./models/contact')

router.get('/', (req,res)=>{
  res.render('bootstrapTemplate')
})

router.get('/contact', (req,res)=>{
  res.render('contact')
})

router.get('/education', (req,res)=>{
  res.render('education')
})

router.get('/experience', (req,res)=>{
  res.render('experience')
})

router.get('/projects', (req,res)=>{
  res.render('projects')
})

router.post('/submitContact',(req,res)=>{
  const contact = new Contact({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    comment: req.body.comment,
    urgency: req.body.urgency
  });
  Contact.collection.insertOne(contact)
  .then(result =>{
    res.render('contact')
  })
  .catch(err => console.log(err));
})

module.exports = router;