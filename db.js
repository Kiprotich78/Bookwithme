const mongoose = require ("mongoose");

var mongoURL = 'mongodb+srv://johnmisky:bu8K9WXZAdRxkQ2A@cluster0.hmsyhnh.mongodb.net/book-rooms';

mongoose.set('strictQuery', false);
mongoose.connect(mongoURL,{useUnifiedTopology :true ,useNewUrlParser :true});

var connection = mongoose.connect

mongoose.connection.on('error', ()=> {
    console.log("mongo connection failed")
});

mongoose.connection.on('connected', ()=> {
    console.log("mongo connection successful")
});

module.exports = mongoose