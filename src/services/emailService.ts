import TestEmail from 'emails/TestEmail';

import sender from '@/configs/emailConfig';
// import getAcknowledgmentEmail from '@/constant/acknowledgementEmail';
import getCandidateDetails from '@/constant/getCandidateDetails';
import { resend } from '@/lib/resend';

// export function sendEmail(candidateName: string, bootcampName: string, mailTo: string) {
//     sender.sendMail({
//         from: String(process.env.NEXT_PUBLIC_EMAIL_ADDRESS),
//         to: mailTo,
//         subject: String(process.env.NEXT_PUBLIC_EMAIL_SUBJECT),
//         html: getAcknowledgmentEmail(candidateName, bootcampName),
//     });
// }

export function sendEmailForMasterclass(candidateName: string, candidateEmail: string, candidatePhone: string) {
    sender.sendMail({
        from: String(process.env.NEXT_PUBLIC_EMAIL_ADDRESS),
        to: String(process.env.NEXT_PUBLIC_MASTERCLASS_EMAIL),
        subject: String(process.env.NEXT_PUBLIC_MASTERCLASS_EMAIL_SUBJECT),
        html: getCandidateDetails(candidateName, candidateEmail, candidatePhone),
    });
}

export async function sendEmail(date: string, timeSlot: string, maxStartTime: string, mailTo: string) {
    try {
        await resend.emails.send({
            from: 'entrance-test@interviewcall.club',
            to: mailTo,
            subject: 'Exclusive Invitation: InterviewCall Entrance Test',
            html: TestEmail({ date, timeSlot, maxStartTime, testLink: 'https://www.interviewcall.club'})
        });
        return {
            success: true,
            message: 'Successfully send the mail'
        };
    } catch (error) {
        console.error('Error sending email', error);
        return {
            success: false,
            message: 'Failed to send email'
        };
    }
}