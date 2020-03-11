const mongoose = require('mongoose');
const db = require('../db');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: String,
    password: String
})

const userModel = db.model('user', userSchema);

module.exports = {
    userModel
}