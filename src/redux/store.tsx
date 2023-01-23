import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { api } from './api';
import { companeNewsSlice } from './slices/companyNewsSlice';

const makeStore = () => {
    const store = configureStore({
        reducer: {
            [api.reducerPath]: api.reducer,
            companyNews: companeNewsSlice.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
    });
    return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>;

export type AppDispatch = AppStore['dispatch'];

export const store = makeStore();