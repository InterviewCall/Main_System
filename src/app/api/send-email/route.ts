import { NextRequest, NextResponse } from 'next/server';

import { sendEmail } from '@/services/emailService';

export async function POST(req: NextRequest) {
    try {
        const { candidateName, mailTo, bootcampName } = await req.json();
        sendEmail(candidateName, bootcampName, mailTo);
        return NextResponse.json({
            success: 'true',
            message: 'Successfully sent the mail',
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Couldn\'t send the mail, Something went wrong',
            error: error
        }, { status: 500 });
    }
}