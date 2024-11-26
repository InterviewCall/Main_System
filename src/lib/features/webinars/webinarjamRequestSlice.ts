import { createSlice } from '@reduxjs/toolkit';

import { WebinarRequest } from '@/types';

const initialState: WebinarRequest = {
    api_key: process.env.NEXT_PUBLIC_API_KEY,
    webinar_id: 1,
    first_name: '',
    email: '',
    phone: '',
    schedule: 1
};

const WebinarRequestSlice = createSlice({
    name: 'webinarRequest',
    initialState,
    reducers: {
        handleFirstName: (state, action) => {
            state.first_name = action.payload;
        },
        handleEmail: (state, action) => {
            state.email = action.payload;
        },
        handlePhone: (state, action) => {
            state.phone = action.payload;
        }
    }
});

export const { handleFirstName,  handleEmail, handlePhone } = WebinarRequestSlice.actions;
export default WebinarRequestSlice.reducer;
