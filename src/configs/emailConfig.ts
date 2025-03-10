import nodemailer from 'nodemailer';

const sender = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD
    }
});

export default sender;