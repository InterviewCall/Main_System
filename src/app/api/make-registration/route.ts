import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';

import RegistrationRepository from '@/repositories/RegistrationRepository';
import RegistrationService from '@/services/RegistrationService';

const registrationService = new RegistrationService(new RegistrationRepository());

export async function POST(req: NextRequest) {
    try {
        const { candidateName, candidateEmail, candidatePhone } = await req.json();

        const newRegistration = await registrationService.createRegistration(candidateName, candidateEmail, candidatePhone);

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