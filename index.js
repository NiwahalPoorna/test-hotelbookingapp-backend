const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./DataBase');
var clientController = require('./Controllers/ClientController');
var hotelController = require('./Controllers/HotelController')

var app = express();
app.use(bodyparser.json());
app.use(cors());


app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/clients', clientController);
app.use('/hotels',hotelController );

//http://localhost:3000/clients