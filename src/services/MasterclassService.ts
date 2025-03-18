import MasterclassRepository from '@/repositories/MasterclassRepository';

class MasterclassService {
    private masterclassRepository;

    constructor(masterclassRepository: MasterclassRepository) {
        this.masterclassRepository = masterclassRepository;
    }

    async createRegistration(candidateName: string, candidateEmail: string, candidateCountryCode: string, candidatePhone: string) {
        try {
            const registration = await this.masterclassRepository.createRegistration(candidateName, candidateEmail, candidateCountryCode, candidatePhone);
            return registration;
        } catch (error) {
            throw error;
        }
    }
}

export default MasterclassService;