const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 5000;

const app = express();
require('./routes/auth-routes')(app)

app.listen(PORT);