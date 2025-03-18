import ApplyRepository from '@/repositories/ApplyRepository';

class ApplyService {
    private applyRepository;

    constructor(applyRepository: ApplyRepository) {
        this.applyRepository = applyRepository;
    }

    async createApply(candidateName: string, candidateEmail: string, candidateCountryCode: string, candidatePhone: string) {
        try {
            const apply = await this.applyRepository.createApply(candidateName, candidateEmail, candidateCountryCode, candidatePhone);
            return apply;
        } catch (error) {
            throw error;
        }
    }
}

export default ApplyService;