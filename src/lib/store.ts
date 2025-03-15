import { configureStore } from '@reduxjs/toolkit';

import BrochureReducer from './features/brochure/brochure';
import CallbackSlice from './features/callback/callback';
import OtpStateReducer from './features/heroSectionOtp/otpSlice';
import MasterclassReducer from './features/masterclass/masterclassSlice';
import EverWebinarResponseReducer from './features/webinars/everwebinarResponse';
import WebinarResponseReducer from './features/webinars/webinarjamResponseSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            webinarResponse: WebinarResponseReducer,
            everWebinarResponse: EverWebinarResponseReducer,
            otpState: OtpStateReducer,
            masterclass: MasterclassReducer,
            callback: CallbackSlice,
            brochure: BrochureReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];