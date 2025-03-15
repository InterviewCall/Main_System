import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showBrochureModal: false,
    loading: false
};

const brochureSlice = createSlice({
    name: 'callback',
    initialState,
    reducers: {
        setBrochureModal: (state, action) => {
            state.showBrochureModal = action.payload;
        },

        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const { setBrochureModal, setLoading } = brochureSlice.actions;
export default brochureSlice.reducer;