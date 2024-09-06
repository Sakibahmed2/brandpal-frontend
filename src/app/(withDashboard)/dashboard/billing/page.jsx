"use client";

const AdminBillingDashboard = () => {
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
                <th className="dark:text-gray-400">ID</th>
                <th className="dark:text-gray-400">Name</th>
                <th className="dark:text-gray-400">Plan</th>
                <th className="dark:text-gray-400">Amount</th>
                <th className="dark:text-gray-400">Payment Status</th>
                <th className="dark:text-gray-400">Date</th>
              </tr>
            </thead>
            <tbody>
              {billingData.map((billing) => (
                <tr key={billing.id}>
                  <td>{billing.id}</td>
                  <td>{billing.name}</td>
                  <td>{billing.plan}</td>
                  <td>{billing.amount}</td>
                  <td>
                    <span
                      className={`badge ${
                        billing.paymentStatus === "Paid"
                          ? "badge-success"
                          : billing.paymentStatus === "Pending"
                          ? "badge-warning"
                          : ""
                      }`}
                    >
                      {billing.paymentStatus}
                    </span>
                  </td>
                  <td>{billing.date}</td>
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
