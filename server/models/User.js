const { Schema, model } = require('mongoose');

//most of this is referencing NoSql activity 22
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    projects: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }
]
},
{
    toJSON: {
        virtuals: true,
    },
    id: true,
});

// TAKEN FROM ACTIVITY 18-22
userSchema
    .virtual('projectCount')
    .get(function () {
        return `${this.projects.length}`;
    });


const User = model('User', userSchema);
module.exports = User;