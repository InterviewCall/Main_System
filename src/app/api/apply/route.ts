import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';

import ApplyRepository from '@/repositories/ApplyRepository';
import ApplyService from '@/services/ApplyService';

const applyService = new ApplyService(new ApplyRepository());

export async function POST(req: NextRequest) {
    try {
        const { candidateName, candidateEmail, candidatePhone } = await req.json();
        const applyResponse = await applyService.createApply(candidateName, candidateEmail, candidatePhone);

        return NextResponse.json({
            success: true,
            message: 'Successfully Applied',
            data: applyResponse,
            error: {}
        }, { status: StatusCodes.CREATED });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        let message = 'Something went wrong';
        let statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
        if(error.code === 11000) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            message = 'Phone already registered';
            statusCode = StatusCodes.BAD_REQUEST;
        }
        return NextResponse.json({
            success: false,
            message,
            data: {},
            error: error
        }, { status: StatusCodes.INTERNAL_SERVER_ERROR });
    }
}