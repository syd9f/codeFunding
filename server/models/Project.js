const { Schema, model } = require('mongoose');
const likeSchema = require('./Like')
const donation = require('./Donation');

//most of this is referencing NoSql activity 22
const projectSchema = new Schema({
    projectTitle: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 50
    },
    projectDescription: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 500
    },
    // username: {
    //     type: String,
    //     required: true,
    // },
    donationGoal: {
        type: String,
        required: true,
    },
    
    likes: [likeSchema],
    donations: [{
        type: Schema.Types.ObjectId,
        ref: 'donation'
    }]
    },
    {
    toJSON: { 
        getters: true,
        virtuals: true 
    },
    timestamps: true,
    id: false
});


// thoughtSchema
//     .virtual('likeCount')
//     .get(function () {
//         return `${this.likes.length}`;
//     });

const Project = model('Project', projectSchema);
module.exports = Project;