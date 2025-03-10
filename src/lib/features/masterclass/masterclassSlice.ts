import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    link: ''
};

const masterclassSlice = createSlice({
    name: 'masterclass',
    initialState,
    reducers: {
        setLink: (state, action) => {
            state.link = action.payload;
        }
    }
});

export const { setLink } = masterclassSlice.actions;
export default masterclassSlice.reducer;