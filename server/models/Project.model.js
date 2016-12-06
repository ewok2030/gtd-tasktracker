import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    },
    tags: [String]
});

export default mongoose.model('Project', projectSchema);
