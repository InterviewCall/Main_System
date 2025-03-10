import nodemailer from 'nodemailer';

const sender = nodemailer.createTransport({
    service: 'Gmail',
    secure: false,
    auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});

export default sender;