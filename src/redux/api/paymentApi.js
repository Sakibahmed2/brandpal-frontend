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

    getAllTransactions: builder.query({
      query: () => ({
        url: "/payment/transactions",
      }),
    }),

    getSingleTransaction: builder.query({
      query: ({ email }) => ({
        url: `/payment/transactions/${email}`,
      }),
    }),
  }),
});

export const {
  useCreatePaymentIntentMutation,
  useConfirmPaymentMutation,
  useGetAllTransactionsQuery,
  useGetSingleTransactionQuery,
} = paymentApi;
