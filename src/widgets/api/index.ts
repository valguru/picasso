import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {IPost} from "../../entities/post/model";

export const postApi = createApi({
    reducerPath: 'post/api',
    baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com"}),
    endpoints: (builder) => ({
        getPostById: builder.query<IPost, number | void>({
            query: (id) => `/posts/${id}`,
        }),
        getPostsPaged: builder.query<IPost[], { limit?: number, start: number }>({
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