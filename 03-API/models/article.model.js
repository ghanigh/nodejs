import mongoose from 'mongoose';
import uniqueValidator from "mongoose-unique-validator";


const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

const Article = mongoose.model('Article', articleSchema);

export default Article;
