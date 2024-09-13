"use client";

import LoadingPage from "@/components/ui/LoadingPage";
import SalesReportsChart from "@/components/ui/SalesReportsChart";
import { useGetAllTransactionsQuery } from "@/redux/api/paymentApi";
import { ChartColumnDecreasing, ChartPie, File } from "lucide-react";

const ReportsPage = () => {
  const { data, isLoading } = useGetAllTransactionsQuery({});

  if (isLoading) return <LoadingPage />;

  return (
    <div className="mt-5 min-h-screen mx-5 lg:mx-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="dark:bg-gray-900 bg-gray-50 p-6 rounded-lg flex items-center">
          <p className="w-12 h-12 text-purple-500 mr-4">
            <ChartPie size={42} />
          </p>
          <div>
            <h3 className="text-xl ">Sales Report</h3>
            <p className="text-gray-400">View sales by category</p>
          </div>
        </div>

        <div className="dark:bg-gray-900 bg-gray-50 p-6 rounded-lg flex items-center">
          <p className="w-12 h-12 text-blue-500 mr-4">
            <ChartColumnDecreasing size={42} />
          </p>
          <div>
            <h3 className="text-xl ">Revenue Report</h3>
            <p className="text-gray-400">View revenue trends</p>
          </div>
        </div>

        <div className="dark:bg-gray-900 bg-gray-50 p-6 rounded-lg flex items-center">
          <p className=" text-green-500 mr-4">
            <File size={42} />
          </p>
          <div>
            <h3 className="text-xl ">Expense Report</h3>
            <p className="text-gray-400">View expense breakdown</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <SalesReportsChart />

      {/* Table */}
      <div className="mt-5 dark:bg-gray-900 bg-gray-50 p-5 ">
        <div className=" overflow-x-auto">
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

export default ReportsPage;
