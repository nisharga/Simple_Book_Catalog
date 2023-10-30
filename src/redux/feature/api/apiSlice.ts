import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
    endpoints: (builder) => ({ 

        
        addBook: builder.mutation({
            query: ( data  ) => ({
              url: `/book`,
              method: 'POST',
              body: data,
            })
          }),


          getBooks: builder.query({
            query: () => '/book'
        }),
        getAllBooks: builder.query({
            query: () => '/book/getall'
        }),
    })
})


export const {useGetBooksQuery, useGetAllBooksQuery, useAddBookMutation} = api;