import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://coinranking1.p.rapidapi.com";

const cryptoApiHeaders = {
  'X-RapidAPI-Key': '8b1446d53dmsh321a2de1f2d2f70p16f766jsn44376fd9cb9f',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/coins")
    })
  })
});

export const { useGetCryptosQuery } = cryptoApi;