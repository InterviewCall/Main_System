import MasterclassRepository from '@/repositories/MasterclassRepository';
import { UtmData } from '@/types';

class MasterclassService {
    private masterclassRepository;

    constructor(masterclassRepository: MasterclassRepository) {
        this.masterclassRepository = masterclassRepository;
    }

    async createRegistration(candidateName: string, candidateEmail: string, candidatePhone: string, utmData: UtmData) {
        try {
            const registration = await this.masterclassRepository.createRegistration(candidateName, candidateEmail, candidatePhone, utmData);
            return registration;
        } catch (error) {
            throw error;
        }
    }
}

export default MasterclassService;