import applyDb from '@/config/applyDb';
import ApplyNow, { ICandidate } from '@/models/ApplyNow';

class ApplyRepository {
    private applynowModel;

    constructor() {
        applyDb.connect();
        this.applynowModel = ApplyNow;
    }

    async createApply(candidateName: string, candidateEmail: string, candidateCountryCode: string, candidatePhone: string): Promise<ICandidate | null> {
        const apply = await this.applynowModel.findOne({
            $and: [
                { candidateEmail },
                { candidatePhone }
            ]
        });

        if(apply) return null;

        const response = await this.applynowModel.create({
            candidateName,
            candidateEmail,
            candidateCountryCode,
            candidatePhone
        });
        return response;
    }
}

export default ApplyRepository;