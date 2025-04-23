import { Document, model, models, Schema } from 'mongoose';

export interface ICandidate extends Document {
    candidateName: string;
    candidateEmail: string;
    candidatePhone: string
}

const applySchema = new Schema<ICandidate>({
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

const ApplyModel = models.ApplyModel || model<ICandidate>('ApplyModel', applySchema);

export default ApplyModel;