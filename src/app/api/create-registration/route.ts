import { NextRequest, NextResponse } from 'next/server';

import {prisma} from '@/lib2/prisma';

export async function POST(req: NextRequest) {
    try {
        const { candidate_name, candidate_email, candidate_phone } = await req.json();

        const newRegistration = await prisma.registration.create({
            data: { candidate_name, candidate_email, candidate_phone }
        });

        return NextResponse.json({
            success: true,
            message: 'Registered Successfully',
            data: newRegistration,
            error: {}
        }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: 'Something went wrong',
            data: {},
            error: error
        }, { status: 500 });
    }
}