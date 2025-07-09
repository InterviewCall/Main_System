import { Document, Model, model, models, Schema } from 'mongoose';

import { UtmData } from '@/types';

export interface ICandidate extends Document {
    candidateName: string;
    candidateEmail: string;
    candidatePhone: string
    utmData: UtmData
}

const applynowSchema = new Schema<ICandidate>({
    candidateName: {
        type: String, 
        required: true
    },
    candidateEmail: { 
        type: String, 
        required: true,
        index: true
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

applynowSchema.index({ candidateEmail: 1, candidatePhone: 1 });

const ApplyNow: Model<ICandidate> = models.ApplyNow || model<ICandidate>('ApplyNow', applynowSchema);

export default ApplyNow;