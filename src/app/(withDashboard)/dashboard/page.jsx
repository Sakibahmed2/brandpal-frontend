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
  return (
    <div className="w-full max-w-[1190px] mt-5 ">
      <div className="bg-gray-900 py-10 px-5 mx-4 lg:mx-0 mt-4 lg:mt-0 rounded-t-xl">
        <div className="lg:flex justify-between items-center pb-5 text-center lg:text-start">
          <div>
            <h2 className="text-xl lg:text-3xl mt-4 lg:mt-0">
              Good Morning, George!
            </h2>
            <p className="light-text">Your ID: 13647832648</p>
          </div>

          <div className="flex items-center justify-center lg:justify-end gap-5 text-gray-400 mt-4 lg:mt-0">
            <span className="hover:bg-gray-300 hover:text-gray-800 p-3 rounded-full ease-in-out duration-200">
              <CircleUserRound size={24} />
            </span>
            <span className="hover:bg-gray-300 hover:text-gray-800 p-3 rounded-full ease-in-out duration-200">
              <Bell size={24} />
            </span>
            <span className="hover:bg-gray-300 hover:text-gray-800 p-3 rounded-full ease-in-out duration-200">
              <Mail size={24} />
            </span>
          </div>
        </div>

        <hr className="border-gray-500 " />

        <div className="mt-7 text-center lg:text-start">
          <h2 className="text-xl lg:text-2xl ">Overview</h2>
          <p className="light-text">last month</p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 ">
            <div className="flex gap-5 border border-gray-500 rounded-xl w-full max-w-[250px] py-4 px-6 mx-auto">
              <p className="bg-[#EAF0FF] size-16 text-sky-500 rounded-full flex justify-center items-center">
                <Users size={24} />
              </p>
              <div>
                <span className="light-text">Member</span>
                <p className="text-xl lg:text-2xl">765K</p>
              </div>
            </div>

            <div className="flex gap-5 border border-gray-500 rounded-xl w-full max-w-[250px] py-4 px-6 mx-auto">
              <p className="bg-[#EAF0FF] size-16 text-sky-500 rounded-full flex justify-center items-center">
                <Users size={24} />
              </p>
              <div>
                <span className="light-text">Member</span>
                <p className="text-xl lg:text-2xl">765K</p>
              </div>
            </div>

            <div className="flex gap-5 border border-gray-500 rounded-xl w-full max-w-[250px] py-4 px-6 mx-auto">
              <p className="bg-[#EAF0FF] size-16 text-sky-500 rounded-full flex justify-center items-center">
                <Users size={24} />
              </p>
              <div>
                <span className="light-text">Member</span>
                <p className="text-xl lg:text-2xl">765K</p>
              </div>
            </div>

            <div className="flex gap-5 border border-gray-500 rounded-xl w-full max-w-[250px] py-4 px-6 mx-auto">
              <p className="bg-[#EAF0FF] size-16 text-sky-500 rounded-full flex justify-center items-center">
                <Users size={24} />
              </p>
              <div>
                <span className="light-text">Member</span>
                <p className="text-xl lg:text-2xl">765K</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* customer chart */}
      <div className="mt-4 lg:flex ">
        <div className="bg-gray-900 p-5 mx-4 lg:mx-0 w-full lg:w-[900px]">
          <div className="lg:flex justify-between items-center">
            <div>
              <p className="text-xl lg:text-2xl">Customer Waves</p>
              <p className="light-text">In last 6 months</p>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2 lg:gap-5 rounded-xl border border-gray-500 lg:py-2 lg:px-4 px-2 py-1">
                <p className="lg:w-4 lg:h-4 w-2 h-2 rounded-full bg-purple-500"></p>
                <p className="text-xs lg:text-lg">Young Age</p>
              </div>
              <div className="flex items-center gap-2 lg:gap-5 rounded-xl border border-gray-500 lg:py-2 lg:px-4 px-2 py-1">
                <p className="lg:w-4 lg:h-4 w-2 h-2 rounded-full bg-sky-500"></p>
                <p className="text-xs lg:text-lg">Old Age</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 p-5 mx-4 lg:mx-0 lg:w-[280px] lg:ml-4 mt-4 lg:mt-0">
          <p className="text-xl lg:text-2xl pb-2 lg:pb-4">Transaction</p>
          <hr className="border-gray-500 " />

          <div className="mt-4 space-y-5">
            {transactionsData.map((transaction) => (
              <div
                key={transaction.id}
                className="flex justify-between items-center"
              >
                <div>
                  <p>{transaction.title}</p>
                  <p className="text-gray-400 text-sm">{transaction.date}</p>
                </div>
                <p>$ {transaction.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHomePage;
