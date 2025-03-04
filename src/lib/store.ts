import { configureStore } from '@reduxjs/toolkit';

import OtpStateReducer from './features/heroSectionOtp/otpSlice';
import EverWebinarResponseReducer from './features/webinars/everwebinarResponse';
import WebinarResponseReducer from './features/webinars/webinarjamResponseSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            webinarResponse: WebinarResponseReducer,
            everWebinarResponse: EverWebinarResponseReducer,
            otpState: OtpStateReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];