import { Document, model, models, Schema } from 'mongoose';

export interface ICandidate extends Document {
    experienceLevel: string;
    programName: string;
    candidateName: string;
    candidateEmail: string;
    candidatePhone: string
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
}, { timestamps: true });

brochureSchema.index({ candidateEmail: 1, candidatePhone: 1 });

const Brochure = models.Brochure || model<ICandidate>('Brochure', brochureSchema);

export default Brochure;