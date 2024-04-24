const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://agachet:VayNxZcRxW7Qu4nr@ucb.hhmnjm6.mongodb.net/brewTip?retryWrites=true&w=majority&appName=UCB');

module.exports = mongoose.connection;
