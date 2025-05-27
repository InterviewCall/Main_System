import { Model, model, models, Schema } from 'mongoose';

import { ApplyCandidate, UtmData } from '@/types';

const utmDataSchema = new Schema<UtmData>({
    utm_source: {
        type: String,
        default: '',
    },

    utm_campaign: {
        type: String,
        default: '',
    },

    adset_name: {
        type: String,
        default: '',
    },

    ad_name: {
        type: String,
        default: '',
    },
    
    placement: {
        type: String,
        default: '',
    },
}, { _id: false });

const applyPositiveSchema = new Schema<ApplyCandidate>({
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

    lookingForSwitch: {
        type: String,
        enum: ['Yes', 'No'],
        required: true
    },

    willingForUpskill: {
        type: String,
        enum: ['Yes', 'No'],
        required: true,
    },

    yearsOfExperience: {
        type: String,
        required: true,
    },

    currentCTC: {
        type: String,
        required: true
    },

    domainOfInterest: {
        type: String,
        required: true
    },

    utmData: utmDataSchema
}, { timestamps: true });

applyPositiveSchema.index({ candidateEmail: 1, candidatePhone: 1 });

const ApplyPositive: Model<ApplyCandidate> = models.ApplyPositive || model<ApplyCandidate>('ApplyPositive', applyPositiveSchema);

export default ApplyPositive;