const { baseApi } = require("./baseApi");

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPaymentIntent: builder.mutation({
      query: (data) => ({
        url: "/payment/create-payment",
        method: "POST",
        body: data,
      }),
    }),

    confirmPayment: builder.mutation({
      query: (data) => ({
        url: "/payment/confirm-payment",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreatePaymentIntentMutation, useConfirmPaymentMutation } =
  paymentApi;
