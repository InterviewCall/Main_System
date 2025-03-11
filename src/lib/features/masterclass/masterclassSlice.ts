import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false
};

const masterclassSlice = createSlice({
    name: 'masterclass',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const { setLoading } = masterclassSlice.actions;
export default masterclassSlice.reducer;