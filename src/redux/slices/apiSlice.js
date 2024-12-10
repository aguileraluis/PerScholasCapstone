import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; 

const API_URI = window.process.env.API_URI; 

const baseQuery = fetchBaseQuery({baseUrl: API_URI}); 

export const apiSlice = createApi ({
  baseQuery, 
  tagTypes: [], 
  endpoints: (builder) => ({}), 
}); 
