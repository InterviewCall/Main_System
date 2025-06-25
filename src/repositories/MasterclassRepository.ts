import applyDb from '@/config/applyDb';
import Masterclass, { ICandidate } from '@/models/Masterclass';
import { UtmData } from '@/types';

class MasterclassRepository {
    private masterclassModel;

    constructor() {
        applyDb.connect();
        this.masterclassModel = Masterclass;
    }

    async createRegistration(candidateName: string, candidateEmail: string, candidatePhone: string, utmData: UtmData): Promise<ICandidate> {
        const registration = await this.masterclassModel.create({
            candidateName,
            candidateEmail,
            candidatePhone,
            utmData
        });
        return registration;
    }
}

export default MasterclassRepository;