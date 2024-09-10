"use client";

import ChartSection from "@/components/dashboard/DashboardHome/ChartSection/ChartSection";
import OverviewSection from "@/components/dashboard/DashboardHome/OverviewSection/OverviewSection";
import { useGetAllTransactionsQuery } from "@/redux/api/paymentApi";
import { Bell, CircleUserRound, Mail, Users } from "lucide-react";
import React from "react";

const transactionsData = [
  {
    id: 1,
    title: "Balance Top Up",
    date: "March, 20 2022",
    amount: 200,
  },
  {
    id: 2,
    title: "Pay Rent",
    date: "March, 15 2022",
    amount: 100,
  },
  {
    id: 3,
    title: "Office Rent",
    date: "March, 12 2022",
    amount: 500,
  },
  {
    id: 4,
    title: "Electricity",
    date: "March, 12 2022",
    amount: 80,
  },
  {
    id: 5,
    title: "Food & Drink",
    date: "March, 11 2022",
    amount: 12,
  },
];

const DashboardHomePage = () => {
  const { data, isLoading } = useGetAllTransactionsQuery({});

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className=" mt-0 lg:mt-5">
      <OverviewSection />

      {/* customer chart */}
      <div className="mt-4  lg:flex ">
        <ChartSection />

        <div className="dark:bg-gray-900 bg-gray-50 p-5 mx-4 lg:mx-0 lg:w-[280px] lg:ml-4 mt-4 lg:mt-0">
          <p className="text-xl lg:text-2xl pb-2 lg:pb-4">Transaction</p>
          <hr className="border-gray-500 " />

          <div className="mt-4 space-y-5">
            {data?.data.map((transaction) => (
              <div
                key={transaction._id}
                className="flex justify-between items-center"
              >
                <div>
                  <p>{transaction.email}</p>
                  <p className="text-gray-400 text-sm">
                    {new Date(transaction.date).toLocaleDateString()}
                  </p>
                </div>
                <p>$ {transaction.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHomePage;
