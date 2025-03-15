import applyDb from '@/config/applyDb';
import ApplyModel from '@/models/ApplyModel';

class ApplyRepository {
    private applyModel;

    constructor() {
        applyDb.connect();
        this.applyModel = ApplyModel;
    }

    async createApply(candidateName: string, candidateEmail: string, candidatePhone: string) {
        const brochure = await this.applyModel.create({
            candidateName,
            candidateEmail,
            candidatePhone
        });
        return brochure;
    }
}

export default ApplyRepository;