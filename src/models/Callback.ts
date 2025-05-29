import { Document, Model, model, models, Schema } from 'mongoose';

import { UtmData } from '@/types';

export interface ICandidate extends Document {
    experienceLevel: string
    programName: string
    candidateName: string
    candidateEmail: string
    candidatePhone: string
    utmData: UtmData
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
    utmData: {
        type: Map,
        of: String,
        default: {}
    }
}, { timestamps: true });

const Callback: Model<ICandidate> = models.Callback || model<ICandidate>('Callback', callbackSchema);

export default Callback;