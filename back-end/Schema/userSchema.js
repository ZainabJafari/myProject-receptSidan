const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName:        {type: String, required: true},
    lastName:    {type: String, required: true},
    email:       {type: String, required: true},
    passwordHash:    {type: String, required: true}
})


userSchema.virtual('displayName').get(function(){
    return this.firstName + ' ' + this.lastName;
})

const User = mongoose.model('User', userSchema)

module.exports = User;