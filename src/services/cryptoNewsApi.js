import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define headers for the RapidAPI request
const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true', // Required by the Bing News API
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
  'x-rapidapi-host': process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
};

// Helper function to create API requests
const createRequest = (url) => ({
  url,
  headers: cryptoNewsHeaders,
});

// Create the crypto news API service using Redux Toolkit's createApi function
export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi', // Unique name for this API slice
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NEWS_API_URL }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${encodeURIComponent(newsCategory)}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
      providesTags: ['CryptoNews'],
    }),
  }),
});

// Export hooks to fetch data in components
export const { useGetCryptoNewsQuery } = cryptoNewsApi;

