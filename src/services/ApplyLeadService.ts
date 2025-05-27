import ApplyLeadRepository from '@/repositories/ApplyLeadRepository';
import { CandidateDetails } from '@/types';

class ApplyLeadService {
    private applyLeadRepository;

    constructor(applyLeadRepository: ApplyLeadRepository) {
        this.applyLeadRepository = applyLeadRepository;
    }

    async createApplyPositive(data: CandidateDetails) {
        try {
            const apply = await this.applyLeadRepository.createApplyPositive(data);
            return apply;
        } catch (error) {
            throw error;
        }
    }

    async createApplyNegative(data: CandidateDetails) {
        try {
            const apply = await this.applyLeadRepository.createApplyNegative(data);
            return apply;
        } catch (error) {
            throw error;
        }
    }
}

export default ApplyLeadService;