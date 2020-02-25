const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        minlength: 3,
        maxlength:20
    },
    lastname:{
        type: String,
        minlength: 1,
        maxlength:6
    },
    email: {
        type: String,
        unique:true,
        required: true,
    }
})

const User=mongoose.model('user',userSchema)

module.exports=User