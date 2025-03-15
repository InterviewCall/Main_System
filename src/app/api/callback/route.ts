import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';

import CallbackRepository from '@/repositories/CallbackRepository';
import CallbackService from '@/services/CallbackService';

const callbcakService = new CallbackService(new CallbackRepository());

export async function POST(req: NextRequest) {
    try {
        const { experienceLevel, programName, candidateName, candidateEmail, candidatePhone } = await req.json();
        const callbackResponse = await callbcakService.createCallback(experienceLevel, programName, candidateName, candidateEmail, candidatePhone);

        return NextResponse.json({
            success: true,
            message: 'Successfully raised a callback request',
            data: callbackResponse,
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