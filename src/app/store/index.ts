import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import {postApi} from "../../widgets/api/postApi";
import {postPaginationSlice} from "../../widgets/api/postPagination";

export type PostPaginationState = ReturnType<typeof postPaginationSlice.reducer>;

export type RootState = {
    postApi: ReturnType<typeof postApi.reducer>;
    postPagination: PostPaginationState;
};

export const store = configureStore({
    reducer: {
        [postApi.reducerPath]: postApi.reducer,
        [postPaginationSlice.name]: postPaginationSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postApi.middleware),
})
setupListeners(store.dispatch)