const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    balance_amount: {
        type: Number,
        default: 0
    },
    contact_number: {
        type: String,
        required: true,
        // You can add validation for the contact number based on your requirements
    }
});

// Create the User model based on the user schema
const User = mongoose.model('User', userSchema);

module.exports = User;