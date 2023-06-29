const { Schema, Types } = require('mongoose');

//NoSql activity 22
const likeSchema = new Schema({
    likeId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: time => new Date(time).toLocaleString()
    },
    username: {
        type: String,
        required: true,
    }
},
{
    toJSON: { 
        getters: true,
        virtuals: true 
    },
    timestamps: true,
});


module.exports = likeSchema;