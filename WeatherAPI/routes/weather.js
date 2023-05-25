var express = require('express');
const axios = require('axios');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'WeatherWeb' });
  });
  
router.get('/week', (req, res)=> {
    const latitude = req.query.lat; 
    const longitude = req.query.lon;
    const apiUrl = `http://127.0.0.1:8000/weather/week?lat=${latitude}&lon=${longitude}`;
 if(latitude != undefined && longitude != undefined){

    axios.get(apiUrl)
    .then(response => {
        res.json(response.data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    });
 }
 else{
  res.render('weather');
 }

  
    
});



module.exports = router;