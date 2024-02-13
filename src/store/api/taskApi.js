import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: build => ({
    getTasks: build.query({
      query: () => '/tasks',
    }),
    // taskById: build.query({
    //   query: (userId) => `/users/${userId}`,
    // }),
    // // A mutation endpoint
    // updateTask: build.mutation({
    //   query: (updatedTask) => ({
    //     url: `/Tasks/${updatedTask.id}`,
    //     method: 'POST',
    //     body: updatedTask,
    //   }),
    // }),
  }),
});

export const {useGetTasksQuery} = api;
