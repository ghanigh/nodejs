import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const avisSchema = mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        articleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Article', required: true },
        commentaire: { type: String, required: true },
        note: { type: Number, required: true, min: 1, max: 5 }
    },
    { timestamps: { createdAt: true } }
);

avisSchema.plugin(uniqueValidator);

export default mongoose.model('Avis', avisSchema);
