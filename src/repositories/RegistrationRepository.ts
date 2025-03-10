import db from '@/config/db';
import Registration, { ICandidate } from '@/models/Registration';

class RegistrationRepository {
    private registrationModel;

    constructor() {
        db.connect();
        this.registrationModel = Registration;
    }

    async createRegistration(candidateName: string, candidateEmail: string, candidatePhone: string): Promise<ICandidate> {
        const registration = await this.registrationModel.create({
            candidateName,
            candidateEmail,
            candidatePhone
        });
        return registration;
    }
}

export default RegistrationRepository;