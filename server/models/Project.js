const { Schema, model } = require('mongoose');
const likeSchema = require('./Like')

//most of this is referencing NoSql activity 22
const projectSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 50
    },
    description: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 500
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => new Date(timestamp).toLocaleString()
    },
    username: {
        type: String,
        required: true,
    },
    likes: [likeSchema],
    donations: [donationsSchema]
    },
    {
    toJSON: { 
        getters: true,
        virtuals: true 
    },
    timestamps: true,
    id: false
});


thoughtSchema
    .virtual('likeCount')
    .get(function () {
        return `${this.likes.length}`;
    });

const Project = model('Project', projectSchema);
module.exports = Project;