const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
  res.render('places/index', { places })
})

router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})


router.get('/new', (req, res) => {
  res.render('places/new')
})




module.exports = router

//thai Photo by <a href="https://unsplash.com/@shawnanggg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">shawnanggg</a> on <a href="https://unsplash.com/photos/H82HDdkcd4c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    
//bakery good Photo by <a href="https://unsplash.com/@pinarimsi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pinar Kucuk</a> on <a href="https://unsplash.com/photos/3-PfUgbyWEs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
