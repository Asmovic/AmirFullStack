const mongoose = require('mongoose');
const db = require('../db');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: String,
    password: String
})


const memberSchema = new Schema({
    name: String,
    stateCode: String,
    school: String,
    age: { default: 0, type: Number }
})

const userModel = db.model('user', userSchema);
const memberModel = db.model('member', memberSchema);

module.exports = {
    userModel,
    memberModel
}