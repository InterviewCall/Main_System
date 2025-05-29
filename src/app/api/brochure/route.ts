import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';

import BrochureRepository from '@/repositories/BrochureRepository';
import BrochureService from '@/services/BrochureService';

const brochureService = new BrochureService(new BrochureRepository());

export async function POST(req: NextRequest) {
    try {
        const { programName, candidateName, candidateEmail, candidateCountryCode, candidatePhone, utmData } = await req.json();
        const brochureResponse = await brochureService.createBrochure(programName, candidateName, candidateEmail, candidateCountryCode, candidatePhone, utmData);

        return NextResponse.json({
            success: true,
            message: 'Redirecting to download page',
            data: brochureResponse,
            error: {}
        }, { status: StatusCodes.CREATED });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        // let message = 'Something went wrong';
        // let statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
        // if(error.code === 11000) {
        //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
        //     message = 'Email or Phone already registered';
        //     statusCode = StatusCodes.BAD_REQUEST;
        // }
        return NextResponse.json({
            success: false,
            message: 'Something went wrong',
            data: {},
            error: error
        }, { status: StatusCodes.INTERNAL_SERVER_ERROR });
    }
}