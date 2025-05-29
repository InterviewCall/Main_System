// import callbackDb from '@/config/callbackDb';
import applyDb from '@/config/applyDb';
import Callback from '@/models/Callback';
import { UtmData } from '@/types';

class CallbackRepository {
    private callbackModel;

    constructor() {
        applyDb.connect();
        this.callbackModel = Callback;
    }

    async createCallback(experienceLevel: string, programName: string, candidateName: string, candidateEmail: string, candidateCountryCode: string, candidatePhone: string, utmData: UtmData) {
        const callback = await this.callbackModel.create({
            experienceLevel,
            programName,
            candidateName,
            candidateEmail,
            candidateCountryCode,
            candidatePhone,
            utmData
        });
        return callback;
    }
}

export default CallbackRepository;