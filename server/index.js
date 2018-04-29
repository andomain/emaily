const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI).catch(err => console.error(err));

const PORT = process.env.PORT || 5000;

const app = express();
require('./routes/auth-routes')(app)

app.listen(PORT);