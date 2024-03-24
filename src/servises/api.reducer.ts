import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const shopapi = createApi({
  reducerPath: "shopapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://v2.api.noroff.dev/online-shop/",
  }),


endpoints: (builder) => ({
    getPosts: builder.query<Array<any>, void>({
      query: () => '',
      transformResponse: (response: { data: Array<any> }) => response.data,
    }),
    getPost: builder.query<any, string>({
        query: (id) => `/${id}`,
    }),
  }),

});

export const { 
    useGetPostsQuery,
    useGetPostQuery
} = shopapi;
