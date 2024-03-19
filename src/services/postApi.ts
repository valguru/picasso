import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Post} from "../models/model";

export const postApi = createApi({
    reducerPath: 'post/api',
    baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com"}),
    endpoints: (builder) => ({
        getPostById: builder.query<Post, number | void>({
            query: (id) => `/posts/${id}`,
        }),
        getPostsPaged: builder.query<Post[], { limit?: number, start: number }>({
            query: ({limit = 10, start = 0}) => ({
                url: "/posts",
                params:
                    {
                        _limit: limit,
                        _start: start,
                    }
            }),
        }),
    }),
})
export const {useGetPostByIdQuery, useGetPostsPagedQuery} = postApi;