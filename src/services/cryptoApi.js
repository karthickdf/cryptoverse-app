import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a function to get headers dynamically
const cryptoApiHeaders = () => ({
  'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
});

// Define API service
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_CRYPTO_API_URL,
    prepareHeaders: (headers) => {
      // Set headers dynamically
      const apiHeaders = cryptoApiHeaders();
      Object.entries(apiHeaders).forEach(([key, value]) => {
        headers.set(key, value);
      });
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => `/coins?limit=${count}`, // ✅ No need for createRequest
      providesTags: ['Cryptos'],
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => `/coin/${coinId}`,
      providesTags: ['CryptoDetails'],
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => `/coin/${coinId}/history?timeperiod=${timeperiod}`,
      providesTags: ['CryptoHistory'],
    }),
    getExchanges: builder.query({
      query: () => '/exchanges',
      providesTags: ['Exchanges'],
    }),
  }),
});

// Export hooks
export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = cryptoApi;

