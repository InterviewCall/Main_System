import applyDb from '@/config/applyDb';
// import brochureDb from '@/config/brochureDb';
import Brochure, { ICandidate } from '@/models/Brochure';

class BrochureRepository {
    private brochureModel;

    constructor() {
        applyDb.connect();
        this.brochureModel = Brochure;
    }

    async createBrochure(programName: string, candidateName: string, candidateEmail: string, candidatePhone: string): Promise<ICandidate | null> {
        const brochure = await this.brochureModel.findOne({
            $and: [
                { candidateEmail },
                { candidatePhone }
            ]
        });

        if(brochure) return null;

        const response = await this.brochureModel.create({
            programName,
            candidateName,
            candidateEmail,
            candidatePhone
        });
        return response;
    }
}

export default BrochureRepository;