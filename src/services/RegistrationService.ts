import RegistrationRepository from '@/repositories/RegistrationRepository';

class RegistrationService {
    private registrationRepository;

    constructor(registrationRepository: RegistrationRepository) {
        this.registrationRepository = registrationRepository;
    }

    async createRegistration(candidateName: string, candidateEmail: string, candidatePhone: string) {
        try {
            const registration = await this.registrationRepository.createRegistration(candidateName, candidateEmail, candidatePhone);
            return registration;
        } catch (error) {
            throw error;
        }
    }
}

export default RegistrationService;