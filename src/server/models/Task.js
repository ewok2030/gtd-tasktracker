const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const TaskSchema = new Schema({
        title: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        }
    }}, {timestamps: true});

module.exports = mongoose.model('Tasks', TaskSchema);
