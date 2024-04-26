const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb+srv://vedantagrawal647:vedant03@cluster0.yy8axzs.mongodb.net/aliasdatabase?retryWrites=true&w=majority',{
    useUnifiedTopology : true,
    useNewUrlParser : true,
    useFindAndModify : false
}, err => {
    if(err) console.log(`Error in DB Connection ${err}`)
    console.log(`MongoDB Connection Suceeded...`)
})
