import { YesNo } from '@/enums/YesNo';
import { FromDropdown, PositiveAnswers } from '@/types';

export const yesNoOption = ['Yes', 'No'];

export const yearsOfExpOption = [
    // 'I am a Student',
    'Less than 1 Year of Experience',
    '1 - 5 Years of Experience',
    '5 - 12 Years of Experience',
    '12+ Years of Experience'
];

export const currentCTCOptions = [
    'Less than 4 LPA',
    '4 LPA to 7 LPA',
    '7 LPA to 15 LPA',
    '⁠⁠Above 15 LPA'
];

export const domainOfInterestOptions = [
    'Software Engineering',
    '⁠Full Stack Development',
    'Data Engineering',
    // 'Data Science',
    // 'Data Analytics',
    // 'Mobile Development',
    // 'Others'
];

export const fromDropDowns: FromDropdown[] = [
    {
        label: 'lookingForSwitch',
        question: 'Looking for a Job Switch',
        options: yesNoOption
    },

    {
        label: 'willingForUpskill',
        question: 'Willing to upskill yourself',
        options: yesNoOption
    },

    {
        label: 'yearsOfExperience',
        question: 'Years of Experience',
        options: yearsOfExpOption
    },

    {
        label: 'currentCTC',
        question: 'Current CTC',
        options: currentCTCOptions
    },

    {
        label: 'domainOfInterest',
        question: 'Interested Domain',
        options: domainOfInterestOptions
    }
];

export const positiveAnswers: PositiveAnswers = {
    lookingForSwitch: YesNo.Yes,
    willingForUpskill: YesNo.Yes,
    yearsOfExperience: [
        'Less than 1 Year of Experience',
        '1 - 5 Years of Experience',
        '5 - 12 Years of Experience',
        '12+ Years of Experience'
    ],
    currentCTC: [
        '4 LPA to 7 LPA',
        '7 LPA to 15 LPA',
        'Above 15 LPA'
    ],
    domainOfInterest: [
        'Software Engineering',
        '⁠Full Stack Development',
        'Data Engineering'
    ]
};