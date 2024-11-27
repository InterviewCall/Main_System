import { configureStore } from '@reduxjs/toolkit';

import EverWebinarResponseReducer from './features/webinars/everwebinarResponse';
import WebinarResponseReducer from './features/webinars/webinarjamResponseSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            webinarResponse: WebinarResponseReducer,
            everWebinarResponse: EverWebinarResponseReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];