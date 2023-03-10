import { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { AxiosError, AxiosRequestConfig } from 'axios';
import axiosInstance from './axiosInstance';
import { AppDispatch } from './store';

interface CustomQueryArgs extends AxiosRequestConfig {
    onSuccess?: (dispatch: AppDispatch, data: unknown) => Promise<void>;
}

export type CustomBaseQueryType = BaseQueryFn<CustomQueryArgs, unknown, unknown>;

export const axiosBaseQuery: CustomBaseQueryType = async ({ onSuccess, ...args }, { dispatch }) => {
    try {
        const result = await axiosInstance.request(args);

        if (onSuccess) {
            try {
                await onSuccess(dispatch, result.data);
            } catch (e) {
                console.error('Error in onSuccess method', e);
                throw e;
            }
        }

        return { data: result.data };
    } catch (error: unknown) {
        const err = error as AxiosError;

        if (err.response?.status === 401) {
            try {
            } catch {}
        }

        return {
            error: error,
        };
    }
};