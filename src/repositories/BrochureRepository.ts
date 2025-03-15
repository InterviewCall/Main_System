import applyDb from '@/config/applyDb';
// import brochureDb from '@/config/brochureDb';
import Brochure from '@/models/Brochure';

class BrochureRepository {
    private brochureModel;

    constructor() {
        applyDb.connect();
        this.brochureModel = Brochure;
    }

    async createBrochure(programName: string, candidateName: string, candidateEmail: string, candidatePhone: string) {
        const brochure = await this.brochureModel.create({
            programName,
            candidateName,
            candidateEmail,
            candidatePhone
        });
        return brochure;
    }
}

export default BrochureRepository;