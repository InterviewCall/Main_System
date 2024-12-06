import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';

import { FormState, OtpVerificationRequest, RequestOtp, ResponseOtp, VerifyOtpResponse } from '@/types';
import { initiateOtp, otpVerification } from '@/utils';

const initialState: FormState = {
    stepOtp: false,
    otp: '',
    isLoading: false,
    requestId: '',
    errorNumber: '',
    errorOtp: '',
    startTime: false,
    page: '',
    showModal: false
};

export const sendOtpRequest = createAsyncThunk<AxiosResponse<ResponseOtp>, RequestOtp>('/api/send', async (data) => {
    try {
        const response: AxiosResponse<ResponseOtp> = await axios.post(initiateOtp(), data, {
            headers: {
                clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
                clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
                'Content-Type': 'application/json'
            }
        });
        return response;
    } catch (error) {
        throw error;
    }
});

export const verifyOtpRequest = createAsyncThunk<AxiosResponse<VerifyOtpResponse>, OtpVerificationRequest>('/api/verify', async (data) => {
    try {
        const response = await axios.post(otpVerification(), data, {
            headers: {
                clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
                clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
                'Content-Type': 'application/json',
            }
        });
        return response;
    } catch (error) {
        throw error;
    }
});

const heroSectionOtpSlice = createSlice({
    name: 'otpState',
    initialState,
    reducers: {
        setShowModal: (state, action) => {
            state.showModal = action.payload;
        },
        setStepOtp: (state, action) => {
            state.stepOtp = action.payload;
        },
        setOtp: (state, action) => {
            state.otp = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setErrorNumber: (state, action) => {
            state.errorNumber = action.payload;
        },
        setErrorOtp: (state, action) => {
            state.errorOtp = action.payload;
        },
        setStartTime: (state, action) => {
            state.startTime = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        resetForm: (state) => {
            state.showModal = false;
            state.stepOtp = false;
            state.otp = '';
            state.isLoading = false;
            state.requestId = '';
            state.errorNumber = '';
            state.errorOtp = '';
            state.startTime = false;
            state.page = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendOtpRequest.fulfilled, (state, action) => {
                if(!action.payload || action.payload.status != 200) return;

                state.isLoading = false;
                state.stepOtp = true;
                state.requestId = action.payload.data?.requestId;
            })
            .addCase(verifyOtpRequest.fulfilled, (state, action) => {
                if(!action.payload || action.payload.status != 200) return;

                state.isLoading = false;
                state.stepOtp = false;
                state.showModal = false;
            });
    }
});

export const { setShowModal, setStepOtp, setOtp, setIsLoading, setErrorNumber, setErrorOtp, setStartTime, setPage, resetForm } = heroSectionOtpSlice.actions;
export default heroSectionOtpSlice.reducer;