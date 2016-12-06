import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
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
    comments: [
        {
            body: String,
            date: Date
        }
    ],
    tags: [String]
});

export default mongoose.model('Task', taskSchema);
