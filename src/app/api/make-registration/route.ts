import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';

import MasterclassRepository from '@/repositories/MasterclassRepository';
import MasterclassService from '@/services/MasterclassService';

const masterclassService = new MasterclassService(new MasterclassRepository());

export async function POST(req: NextRequest) {
    try {
        const { candidateName, candidateEmail, candidatePhone, utmData } = await req.json();
        // console.log(candidateCountryCode);

        const newRegistration = await masterclassService.createRegistration(candidateName, candidateEmail, candidatePhone, utmData);

        return NextResponse.json({
            success: true,
            message: 'Registered Successfully',
            data: newRegistration,
            error: {}
        }, { status: StatusCodes.CREATED });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        let message = 'Something went wrong';
        let statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
        if(error.code === 11000) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            message = 'Email or Phone already registered';
            statusCode = StatusCodes.BAD_REQUEST;
        }
        return NextResponse.json({
            success: false,
            message,
            data: {},
            error: error
        }, { status: statusCode });
    }
}