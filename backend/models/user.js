const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/notebook')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('user', userSchema)

