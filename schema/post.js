import mongoose from "mongoose";

const post = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel',
        required: true 
    },
    content: {
        type: String,
        required: true
    },
    createAt: {
        type: String,
        required: true
    },
    updateAt: {
        type: String,
        required: true
    }
});

const PostModel = mongoose.model('Post', post);
export default PostModel;
