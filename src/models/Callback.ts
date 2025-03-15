import { Document, model, models, Schema } from 'mongoose';

export interface ICandidate extends Document {
    experienceLevel: string;
    programName: string;
    candidateName: string;
    candidateEmail: string;
    candidatePhone: string
}

const callbackSchema = new Schema<ICandidate>({
    experienceLevel: {
        type: String, 
        required: true
    },
    programName: {
        type: String, 
        required: true
    },
    candidateName: {
        type: String, 
        required: true
    },
    candidateEmail: { 
        type: String, 
        required: true, 
        unique: true
    },
    candidatePhone: { 
        type: String, 
        required: true,
        unique: true
    },
}, { timestamps: true });

const Callback = models.Callback || model<ICandidate>('Callback', callbackSchema);

export default Callback;