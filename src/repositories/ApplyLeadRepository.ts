import applyDb from '@/config/applyDb';
import ApplyNegative from '@/models/ApplyNegative';
import ApplyPositive from '@/models/ApplyPositive';
import { ApplyCandidate, CandidateDetails } from '@/types';

class ApplyLeadRepository {
    private applyPositive;
    private applyNegative;

    constructor() {
        applyDb.connect();
        this.applyPositive = ApplyPositive;
        this.applyNegative = ApplyNegative;
    }

    async createApplyPositive(data: CandidateDetails): Promise<ApplyCandidate | null> {
        const { candidateEmail, candidatePhone } = data;

        const applyPositive = await this.applyPositive.findOne({
            $and: [
                { candidateEmail },
                { candidatePhone }
            ]
        }).lean();

        if(applyPositive) return null;

        const response = await this.applyPositive.create(data);
        return response;
    }

    async createApplyNegative(data: CandidateDetails): Promise<ApplyCandidate | null> {
        const { candidateEmail, candidatePhone } = data;

        const applyNegative = await this.applyNegative.findOne({
            $and: [
                { candidateEmail },
                { candidatePhone }
            ]
        }).lean();

        if(applyNegative) return null;

        const response = await this.applyNegative.create(data);
        return response;
    }
}

export default ApplyLeadRepository;