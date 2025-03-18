import BrochureRepository from '@/repositories/BrochureRepository';

class BrochureService {
    private brochureRepository;

    constructor(brochureRepository: BrochureRepository) {
        this.brochureRepository = brochureRepository;
    }

    async createBrochure(programName: string, candidateName: string, candidateEmail: string, candidateCountryCode: string, candidatePhone: string) {
        try {
            const brochure = await this.brochureRepository.createBrochure(programName, candidateName, candidateEmail, candidateCountryCode, candidatePhone);
            return brochure;
        } catch (error) {
            throw error;
        }
    }
}

export default BrochureService;