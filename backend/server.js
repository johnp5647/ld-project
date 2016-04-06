var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');

var config = require('./config');
var authRoutes = require('./routes/authRoutes');
var otherRoutes = require('./routes/otherRoutes.js');

var port = process.env.PORT || 5000;
mongoose.connect(config.database);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

//app.use('/api', poemRoutesGetOnly);
app.use('/auth', authRoutes);
app.use('/api', otherRoutes);


app.listen(port, function() {
    console.log('Reached Port ' + port);
});