import { Model, model, models, Schema } from 'mongoose';

import { ApplyCandidate } from '@/types';

const applyNegativeSchema = new Schema<ApplyCandidate>({
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

    // lookingForSwitch: {
    //     type: String,
    //     enum: ['Yes', 'No'],
    //     required: true
    // },

    // willingForUpskill: {
    //     type: String,
    //     enum: ['Yes', 'No'],
    //     required: true,
    // },

    // yearsOfExperience: {
    //     type: String,
    //     required: true,
    // },

    // currentCTC: {
    //     type: String,
    //     required: true
    // },

    // domainOfInterest: {
    //     type: String,
    //     required: true
    // },

    utmData: {
        type: Map,
        of: String,
        default: {}
    }
}, { timestamps: true });

applyNegativeSchema.index({ candidateEmail: 1, candidatePhone: 1 });

const ApplyNegative: Model<ApplyCandidate> = models.ApplyNegative || model<ApplyCandidate>('ApplyNegative', applyNegativeSchema);

export default ApplyNegative;