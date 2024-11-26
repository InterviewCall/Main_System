import { WebinarResponse } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
}

const WebinarResponseSlice = createSlice({
    name: 'WebinarResponse',
    initialState,
    reducers: {
        handleResponse: (state, action: PayloadAction<WebinarResponse>) => {
            return action.payload;
        }
    }
});

const { handleResponse } = WebinarResponseSlice.actions;
export default WebinarResponseSlice.reducer;