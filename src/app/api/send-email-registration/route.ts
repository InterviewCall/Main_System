import { NextRequest, NextResponse } from 'next/server';

import { sendEmailForMasterclass } from '@/services/emailService';

export async function POST(req: NextRequest) {
    try {
        const wpLink = String(process.env.NEXT_PUBLIC_WHATSAPP_GROUP_LINK);
        const { candidateName, candidateEmail, candidatePhone } = await req.json();
        sendEmailForMasterclass(candidateName, candidateEmail, candidatePhone);
        return NextResponse.json({
            success: 'true',
            message: 'Successfully sent the mail',
            data: wpLink
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Couldn\'t send the mail, Something went wrong',
            error: error
        }, { status: 500 });
    }
}