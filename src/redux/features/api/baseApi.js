import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    endpoints: (builder) =>({
        getPosts: builder.query({
            query: ()=>"/posts"
        }),
        // specific id
        getPostsById: builder.query({
            query: (id)=>`/posts/${id}`
        }),

        getUsers: builder.query({
            query: ()=>"/users"
        }),

        // mutation
        setPost: builder.mutation({
            query: (post)=>({
                url: "/posts",
                method: "POST",
                body: post
            })
        })
       
    }),
});

export const { useGetPostsQuery, useGetPostsByIdQuery, useSetPostMutation } = baseApi;
export default baseApi;