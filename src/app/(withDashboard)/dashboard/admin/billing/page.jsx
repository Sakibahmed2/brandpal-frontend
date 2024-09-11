"use client";

import { useGetAllTransactionsQuery } from "@/redux/api/paymentApi";

const AdminBillingDashboard = () => {
  const { data, isLoading } = useGetAllTransactionsQuery({});

  if (isLoading) return <p>Loading...</p>;

  // Sample billing data for users
  const billingData = [
    {
      id: 1,
      name: "John Doe",
      plan: "Premium Plan",
      amount: "$50",
      paymentStatus: "Paid",
      date: "2024-08-30",
    },
    {
      id: 2,
      name: "Jane Smith",
      plan: "Basic Plan",
      amount: "$20",
      paymentStatus: "Pending",
      date: "2024-08-28",
    },
    {
      id: 3,
      name: "Alex Johnson",
      plan: "Standard Plan",
      amount: "$30",
      paymentStatus: "Paid",
      date: "2024-08-25",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className=" bg-gray-50 dark:bg-gray-900 p-6 mt-5 mx-5 lg:mx-0">
        {/* Page Title */}
        <h1 className="text-xl lg:text-3xl  font-semibold mb-6">
          Billing Details
        </h1>

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
                      className={`badge ${
                        billing.status === "ongoing"
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
    </div>
  );
};

export default AdminBillingDashboard;
