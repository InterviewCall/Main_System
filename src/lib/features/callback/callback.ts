import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showCallbackModal: false,
    loading: false
};

const callbackSlice = createSlice({
    name: 'callback',
    initialState,
    reducers: {
        setCallbackModal: (state, action) => {
            state.showCallbackModal = action.payload;
        },

        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const { setCallbackModal, setLoading } = callbackSlice.actions;
export default callbackSlice.reducer;