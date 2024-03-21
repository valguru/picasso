import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPostPaginationState {
    start: number;
}

const initialState: IPostPaginationState = {
    start: 0,
};

export const postPaginationSlice = createSlice({
    name: 'postPagination',
    initialState,
    reducers: {
        setStartPost: (state, action: PayloadAction<number>) => {
            state.start = action.payload;
        },
    },
});

export const {setStartPost} = postPaginationSlice.actions;

