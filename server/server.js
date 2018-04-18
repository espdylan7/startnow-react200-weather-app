const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const app = express();
require('dotenv').config()

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));


app.get('/api/:location', (req,res) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${req.params.location}&appid=${process.env.WEATHER_API_KEY}&units=imperial`)
        .then(response => res.send(response.data));
})



module.exports = app;
