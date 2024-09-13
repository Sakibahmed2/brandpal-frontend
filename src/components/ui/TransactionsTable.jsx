"use client";

import React from "react";
import LoadingPage from "./LoadingPage";
import {
  useGetAllTransactionsQuery,
  useUpdateToSuccessMutation,
} from "@/redux/api/paymentApi";
import Swal from "sweetalert2";

const TransactionsTable = () => {
  const { data, isLoading, refetch } = useGetAllTransactionsQuery({});
  const [updateToSuccess] = useUpdateToSuccessMutation();

  if (isLoading) return <LoadingPage />;

  const handleUpdateToSuccess = async (transactionId) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't change it to success!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, do it!",
      }).then((result) => {
        if (result.isConfirmed) {
          updateToSuccess(transactionId);
          refetch();
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className=" bg-gray-50 dark:bg-gray-900 mt-5 p-5">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="dark:text-gray-400">Date</th>
              <th className="dark:text-gray-400">Email</th>
              <th className="dark:text-gray-400">Amount</th>
              <th className="dark:text-gray-400">Status</th>
              <th className="dark:text-gray-400">Transaction ID</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((billing) => (
              <tr key={billing._id}>
                <td className="px-4 py-2">
                  {new Date(billing.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">{billing.email}</td>
                <td className="px-4 py-2">{`$${billing.price}`}</td>

                <td className="px-4 py-2">
                  <span
                    onClick={() => handleUpdateToSuccess(billing._id)}
                    className={`badge cursor-pointer ${
                      billing.status === "success"
                        ? "badge-success"
                        : "badge-error"
                    }`}
                  >
                    {billing.status}
                  </span>
                </td>
                <td className="px-4 py-2">{billing.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;
