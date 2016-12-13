import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: "",
        required: false
    },
    status: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now,
        required: true
    },
    lastUpdated: {
        type: Date,
        default: null,
        required: false
    },
    comments: [
        {
            body: String,
            date: Date
        }
    ],
    tags: [String]
});

export default mongoose.model('Task', taskSchema);
