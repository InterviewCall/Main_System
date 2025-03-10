import sender from '@/configs/emailConfig';
import getAcknowledgmentEmail from '@/constant/acknowledgementEmail';
import getCandidateDetails from '@/constant/getCandidateDetails';

export function sendEmail(candidateName: string, bootcampName: string, mailTo: string) {
    sender.sendMail({
        from: String(process.env.NEXT_PUBLIC_EMAIL_ADDRESS),
        to: mailTo,
        subject: String(process.env.NEXT_PUBLIC_EMAIL_SUBJECT),
        html: getAcknowledgmentEmail(candidateName, bootcampName),
    });
}

export function sendEmailForMasterclass(candidateName: string, candidateEmail: string, candidatePhone: string) {
    sender.sendMail({
        from: String(process.env.NEXT_PUBLIC_EMAIL_ADDRESS),
        to: String(process.env.NEXT_PUBLIC_MASTERCLASS_EMAIL),
        subject: String(process.env.NEXT_PUBLIC_MASTERCLASS_EMAIL_SUBJECT),
        html: getCandidateDetails(candidateName, candidateEmail, candidatePhone),
    });
}