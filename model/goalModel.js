const mongoose = require('mongoose')

const goalSchema =  mongoose.Schema({
    text:{
        type:String,
        required: [true, 'please add a text value']
    }
})

module.exports = mongoose.model('Goals', goalSchema)