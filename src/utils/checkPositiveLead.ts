import { positiveAnswers } from '@/constant/formDropdownOptions';
import { HeroSectionFormData } from '@/types';

function checkPositiveLead(data: HeroSectionFormData) {
  if(!data) return false;
  
  const { lookingForSwitch, willingForUpskill, yearsOfExperience, currentCTC, domainOfInterest } = data;
  
  return (
    lookingForSwitch == positiveAnswers.lookingForSwitch &&
    willingForUpskill == positiveAnswers.willingForUpskill &&
    positiveAnswers.yearsOfExperience.includes(yearsOfExperience) &&
    positiveAnswers.currentCTC.includes(currentCTC) &&
    positiveAnswers.domainOfInterest.includes(domainOfInterest)
  );
}

export default checkPositiveLead;