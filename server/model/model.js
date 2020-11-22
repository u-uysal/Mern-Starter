const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    username:
    {
        type: String,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index: true,
        min: 6
    },
    email:
    {
        type: String,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true
    },
    email:
    {
        type: String,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true
    }, email:
    {
        type: Date,
        default: Date.now()
    },

}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);