import BrochureRepository from '@/repositories/BrochureRepository';
import { UtmData } from '@/types';

class BrochureService {
    private brochureRepository;

    constructor(brochureRepository: BrochureRepository) {
        this.brochureRepository = brochureRepository;
    }

    async createBrochure(programName: string, candidateName: string, candidateEmail: string, candidateCountryCode: string, candidatePhone: string, utmData: UtmData) {
        try {
            const brochure = await this.brochureRepository.createBrochure(programName, candidateName, candidateEmail, candidateCountryCode, candidatePhone, utmData);
            return brochure;
        } catch (error) {
            throw error;
        }
    }
}

export default BrochureService;