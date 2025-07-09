import ApplyRepository from '@/repositories/ApplyRepository';
import { UtmData } from '@/types';

class ApplyService {
    private applyRepository;

    constructor(applyRepository: ApplyRepository) {
        this.applyRepository = applyRepository;
    }

    async createApply(candidateName: string, candidateEmail: string, candidatePhone: string, utmData: UtmData) {
        try {
            const apply = await this.applyRepository.createApply(candidateName, candidateEmail, candidatePhone, utmData);
            return apply;
        } catch (error) {
            throw error;
        }
    }
}

export default ApplyService;