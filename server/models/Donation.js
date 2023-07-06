const { Schema, Types } = require('mongoose');
const mongoose = require('mongoose');

//most of this is referencing NoSql activity 22
const donationSchema = new Schema({
    donationId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: time => new Date(time).toLocaleString()
    },
    username: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true
    }
},
{
    toJSON: { 
        getters: true,
        virtuals: true 
    },
    timestamps: true,
});



const donation = mongoose.model('donation', donationSchema);
module.exports = donation;