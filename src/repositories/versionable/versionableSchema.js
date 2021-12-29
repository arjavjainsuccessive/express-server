import mongoose from 'mongoose';
const VersionableSchema = mongoose.Schema({
    createdAt: {
        default: Date.now,
        required: true,
        type: Date,
    },
    createdBy: {
        required: true,
        type: String,
    },
    deletedAt: {
        required: false,
        type: Date,
    },
    deletedBy: {
        optional: false,
        type: String,
    },
    originalId: {
        required: false,
        type: String,
    },
    role: {
        required: true,
        type: String,
    },
    updatedAt: {
        default: Date.now,
        required: true,
        type: Date,
    },
    updatedBy: {
        required: true,
        type: String,
    }
})
export default VersionableSchema;
