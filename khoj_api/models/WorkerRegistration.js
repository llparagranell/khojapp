const mongoose = require('mongoose');

const WorkerModal = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model('Worker', WorkerModal);