import applyDb from '@/config/applyDb';
import Masterclass, { ICandidate } from '@/models/Masterclass';

class MasterclassRepository {
    private masterclassModel;

    constructor() {
        applyDb.connect();
        this.masterclassModel = Masterclass;
    }

    async createRegistration(candidateName: string, candidateEmail: string, candidatePhone: string): Promise<ICandidate> {
        const registration = await this.masterclassModel.create({
            candidateName,
            candidateEmail,
            candidatePhone
        });
        return registration;
    }
}

export default MasterclassRepository;