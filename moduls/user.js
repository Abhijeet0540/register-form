const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Server-Side');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    imageurl: String,
});

module.exports = mongoose.model('User', userSchema);





     