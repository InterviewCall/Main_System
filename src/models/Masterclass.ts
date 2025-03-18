import { Document, model, models, Schema } from 'mongoose';

export interface ICandidate extends Document {
    candidateName: string;
    candidateEmail: string;
    candidatePhone: string;
    candidateCountryCode: string
}

const masterclassSchema = new Schema<ICandidate>({
    candidateName: {
        type: String, 
        required: true
    },
    candidateEmail: { 
        type: String, 
        required: true, 
        unique: true
    },
    candidateCountryCode: {
        type: String, 
        required: true,
    },
    candidatePhone: { 
        type: String, 
        required: true,
        unique: true
    },
}, { timestamps: true });

const Masterclass = models.Masterclass || model<ICandidate>('Masterclass', masterclassSchema);

export default Masterclass;