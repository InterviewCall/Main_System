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

const brochureSchema = new Schema<ICandidate>({
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
    },
    candidatePhone: { 
        type: String, 
        required: true,
    },

    utmData: {
        type: Map,
        of: String,
        default: {}
    }
}, { timestamps: true });

brochureSchema.index({ candidateEmail: 1, candidatePhone: 1 });

const Brochure: Model<ICandidate> = models.Brochure || model<ICandidate>('Brochure', brochureSchema);

export default Brochure;