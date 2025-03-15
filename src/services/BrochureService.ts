import BrochureRepository from '@/repositories/BrochureRepository';

class BrochureService {
    private brochureRepository;

    constructor(brochureRepository: BrochureRepository) {
        this.brochureRepository = brochureRepository;
    }

    async createBrochure(programName: string, candidateName: string, candidateEmail: string, candidatePhone: string) {
        try {
            const brochure = await this.brochureRepository.createBrochure(programName, candidateName, candidateEmail, candidatePhone);
            return brochure;
        } catch (error) {
            throw error;
        }
    }
}

export default BrochureService;