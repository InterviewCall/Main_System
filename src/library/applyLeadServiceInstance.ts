import ApplyLeadRepository from '@/repositories/ApplyLeadRepository';
import ApplyLeadService from '@/services/ApplyLeadService';

const applyLeadService = new ApplyLeadService(new ApplyLeadRepository());

export default applyLeadService;