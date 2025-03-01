const mongoose =require("mongoose");
var mongoURL = 'mongodb+srv://piyumal:12345@cluster0.cilfr.mongodb.net/roomslist'
mongoose.connect(mongoURL,{useUnifiedTopology : true ,useNewUrlParser:true})

var connecion = mongoose.connection

connecion.on('error',()=>{
    console.log('Mongo DB connecion failed')
})

connecion.on('connected',()=>{
    console.log('Mongo DB connecion successful')
})

module.exports = mongoose