import CallbackRepository from '@/repositories/CallbackRepository';
import { UtmData } from '@/types';

class CallbackService {
    private callbackRepository;

    constructor(callbackRepository: CallbackRepository) {
        this.callbackRepository = callbackRepository;
    }

    async createCallback(experienceLevel: string, programName: string, candidateName: string, candidateEmail: string, candidateCountryCode: string, candidatePhone: string, utmData: UtmData) {
        try {
            const callback = await this.callbackRepository.createCallback(experienceLevel, programName, candidateName, candidateEmail, candidateCountryCode, candidatePhone, utmData);
            return callback;
        } catch (error) {
            throw error;
        }
    }
}

export default CallbackService;