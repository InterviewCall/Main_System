import { StatusCodes } from 'http-status-codes';
import { NextRequest, NextResponse } from 'next/server';

import applyLeadService from '@/library/applyLeadServiceInstance';

export async function POST(req: NextRequest) {
    try {
       const candidateDetails = await req.json();
       const response = await applyLeadService.createApplyNegative(candidateDetails);

       return NextResponse.json({
            success: true,
            message: 'Successfully Applied',
            data: response,
            error: {}
        }, { status: StatusCodes.CREATED });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Something went wrong',
            data: {},
            error: error
        }, { status: StatusCodes.INTERNAL_SERVER_ERROR });
    }
}