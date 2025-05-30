import { Document, Model, model, models, Schema } from 'mongoose';

export interface ICandidate extends Document {
    candidateName: string;
    candidateEmail: string;
    candidatePhone: string
}

const applynowSchema = new Schema<ICandidate>({
    candidateName: {
        type: String, 
        required: true
    },
    candidateEmail: { 
        type: String, 
        required: true,
    },
    candidatePhone: { 
        type: String, 
        required: true,
    },
}, { timestamps: true });

applynowSchema.index({ candidateEmail: 1, candidatePhone: 1 });

const ApplyNow: Model<ICandidate> = models.ApplyNow || model<ICandidate>('ApplyNow', applynowSchema);

export default ApplyNow;