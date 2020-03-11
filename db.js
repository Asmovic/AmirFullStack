const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://asmovic:asmovic@cluster0-licho.mongodb.net/test?retryWrites=true&w=majority';

mongoose.Promise = global.Promise;

mongoose.set('debug', true);

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose.connection;