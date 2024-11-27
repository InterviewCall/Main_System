import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import toast from 'react-hot-toast';

import { WebinarRequest, WebinarResponse } from '@/types';
// import { registerWebinarJam } from '@/utils';

const initialState: WebinarResponse = {
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

export const registerForWebinar = createAsyncThunk<AxiosResponse<WebinarResponse>, WebinarRequest>('/api/register', async (data) => {
    try {
        const response: Promise<AxiosResponse<WebinarResponse>> = axios.post('/api/register', data);
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

const WebinarResponseSlice = createSlice({
    name: 'webinarResponse',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerForWebinar.fulfilled, (state, action) => {
            if(action.payload.data.status != 'success' || !action.payload) return;

            state.status = action.payload.data.status;
            state.user = action.payload.data.user;
        });
    }
});

export default WebinarResponseSlice.reducer;