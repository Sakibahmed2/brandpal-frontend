import React from "react";

const orders = [
  {
    id: "ORD12345",
    date: "2024-09-01T10:30:00Z",
    total: 99.99,
    status: "Shipped",
  },
  {
    id: "ORD12346",
    date: "2024-09-02T11:45:00Z",
    total: 199.99,
    status: "Processing",
  },
];

const MyOrdersPage = () => {
  return (
    <div className="mt-5">
      <div className="flex justify-between items-center dark:bg-gray-900 bg-gray-50 p-5 rounded-md">
        <p className="text-xl lg:text-2xl">My orders</p>
        <button className="custom-dashboard-btn">Pay</button>
      </div>
      <div className="min-h-screen dark:bg-gray-900 bg-gray-50 p-8">
        <div className="container mx-auto">
          {orders.length === 0 ? (
            <p className="text-center text-gray-600">You have no orders yet.</p>
          ) : (
            <div className="dark:bg-gray-800  shadow-md rounded-lg p-6">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="dark:bg-gray-700 bg-gray-200">
                    <th className="px-4 py-2 text-left">Order ID</th>
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">Total</th>
                    <th className="px-4 py-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b">
                      <td className="px-4 py-2">{order.id}</td>
                      <td className="px-4 py-2">
                        {new Date(order.date).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-2">${order.total}</td>
                      <td className="px-4 py-2">{order.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrdersPage;
