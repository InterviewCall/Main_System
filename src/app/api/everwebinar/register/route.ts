import axios, { AxiosError } from 'axios';
import { NextRequest, NextResponse } from 'next/server';

import { registerEverWebinar } from '@/utils';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const response = await axios.post(registerEverWebinar(), body);
        return NextResponse.json(response.data, { status: response.status });
    } catch (error) {
        const axiosError = error as AxiosError;
        return NextResponse.json({
            message: axiosError.response?.data || axiosError.message
        }, {
            status: axiosError.response?.status || 500
        });
    }
}