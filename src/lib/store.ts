import { configureStore } from '@reduxjs/toolkit';

import WebinarResponseReducer from './features/webinars/webinarjamResponseSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            webinarResponse: WebinarResponseReducer
        }
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];