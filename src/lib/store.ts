import { configureStore } from '@reduxjs/toolkit';

import WebinarRequestReducer from './features/webinars/webinarjamRequestSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            webinarRequest: WebinarRequestReducer
        }
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];