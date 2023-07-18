//where all ejs routing is happening
const express = require('express');
const router = express.Router();
const Contact = require('./models/contact');

router.get('/', (req,res)=>{
  res.render('bootstrapTemplate', {title: 'bootstrapTemplate'});
});


router.get('/contact', (req,res)=>{
  res.render('contact', {title: 'contact'});
});

router.get('/education', (req,res)=>{
  res.render('education', {title: 'education'});
});

router.get('/experience', (req,res)=>{
  res.render('experience', {title: 'experience'});
});

router.get('/projects', (req,res)=>{
  res.render('projects', {title: 'projects'});
});

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
    res.render('contact',{title: 'contact'});
  })
  .catch(err => console.log(err));
});

module.exports = router;