const mongoose = require('mongoose');
// To view mongo quesries being run, on the terminal
mongoose.set("debug", true);
// Promise library
mongoose.Promise = Promise;
// Connect to mongodb
mongoose.connect('mongodb://localhost/twatter', {
    // To keep connection open
    keepAlive: true,
    useNewUrlParser: true
});

// idea of bundling
module.exports.User = require('./user')
module.exports.Message = require('./message')