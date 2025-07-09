import applyDb from '@/config/applyDb';
import ApplyNow, { ICandidate } from '@/models/ApplyNow';
import { UtmData } from '@/types';

class ApplyRepository {
    private applynowModel;

    constructor() {
        applyDb.connect();
        this.applynowModel = ApplyNow;
    }

    async createApply(candidateName: string, candidateEmail: string, candidatePhone: string, utmData: UtmData): Promise<ICandidate | null> {
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
            candidatePhone,
            utmData
        });
        return response;
    }
}

export default ApplyRepository;