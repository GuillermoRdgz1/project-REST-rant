const router = require('express').Router()


router.get('/new', (req, res) => {
  res.render('places/new')
})


router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/bake.jpg'
      }]
      
    res.render('places/index', { places })
})


module.exports = router

//thai Photo by <a href="https://unsplash.com/@shawnanggg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">shawnanggg</a> on <a href="https://unsplash.com/photos/H82HDdkcd4c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    
//bakery good Photo by <a href="https://unsplash.com/@pinarimsi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pinar Kucuk</a> on <a href="https://unsplash.com/photos/3-PfUgbyWEs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  