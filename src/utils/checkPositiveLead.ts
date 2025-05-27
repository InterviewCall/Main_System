import { positiveAnswers } from '@/constant/formDropdownOptions';
import { HeroSectionFormData } from '@/types';

function checkPositiveLead(data: HeroSectionFormData) {
  if (!data) return false;

  const normalize = (str: string) => str.replace(/\u200B|\u200C|\u200D|\u2060/g, '').trim();

  const {
    lookingForSwitch,
    willingForUpskill,
    yearsOfExperience,
    currentCTC,
    domainOfInterest
  } = data;

  return (
    normalize(lookingForSwitch) === normalize(positiveAnswers.lookingForSwitch) &&
    normalize(willingForUpskill) === normalize(positiveAnswers.willingForUpskill) &&
    positiveAnswers.yearsOfExperience.map(normalize).includes(normalize(yearsOfExperience)) &&
    positiveAnswers.currentCTC.map(normalize).includes(normalize(currentCTC)) &&
    positiveAnswers.domainOfInterest.map(normalize).includes(normalize(domainOfInterest))
  );
}


export default checkPositiveLead;