import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import toast from 'react-hot-toast';

import { EverWebinarRequest, EverWebinarResponse } from '@/types';
// import { registerWebinarJam } from '@/utils';

const initialState: EverWebinarResponse = {
    status: 'error',
    user: {
        webinar_id: 1,
        webinar_hash: '',
        user_id: null,
        first_name: '',
        last_name: null,
        phone_country_code: null,
        phone: null,
        email: '',
        password: null,
        schedule: null,
        date: '',
        timezone: '',
        live_room_url: '',
        replay_room_url: '',
        thank_you_url: '',
    }
};

export const registerForEverWebinar = createAsyncThunk<AxiosResponse<EverWebinarResponse>, EverWebinarRequest>('/api/everwebinar/register', async (data) => {
    try {
        const response: Promise<AxiosResponse<EverWebinarResponse>> = axios.post('/api/everwebinar/register', data);
        toast.promise(response, {
            loading: 'Loading',
            success: 'Registration Completed',
            error: 'Something went wrong, Please try again'
        });
        return await response;
    } catch(error) {
        throw error;
    }
});

const EverWebinarResponseSlice = createSlice({
    name: 'everWebinarResponse',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerForEverWebinar.fulfilled, (state, action) => {
            if(action.payload.data.status != 'success' || !action.payload) return;

            state.status = action.payload.data.status;
            state.user = action.payload.data.user;
        });
    }
});

export default EverWebinarResponseSlice.reducer;