import { Document, model, models, Schema } from 'mongoose';

import { UtmData } from '@/types';

export interface ICandidate extends Document {
    candidateName: string;
    candidateEmail: string;
    candidatePhone: string;
    utmData: UtmData
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

const Masterclass = models.Masterclass || model<ICandidate>('Masterclass', masterclassSchema);

export default Masterclass;