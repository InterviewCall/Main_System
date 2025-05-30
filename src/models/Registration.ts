import { Document, model, models, Schema } from 'mongoose';

export interface ICandidate extends Document {
    candidateName: string;
    candidateEmail: string;
    candidatePhone: string;
    candidateCountryCode: string
}

const registrationSchema = new Schema<ICandidate>({
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

const Registration = models.Registration || model<ICandidate>('Registration', registrationSchema);

export default Registration;