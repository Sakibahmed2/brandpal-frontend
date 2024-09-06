"use client";

import { ChartColumnDecreasing, ChartPie, File } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import ApexCharts from "react-apexcharts"; // Ensure you have apexcharts installed

const ReportsPage = () => {
  const { theme } = useTheme();

  const series = [
    {
      name: "Young Age",
      data: [10, 20, 15, 25, 18, 22, 10],
    },
    {
      name: "Old",
      data: [15, 10, 25, 18, 24, 15, 12],
    },
  ];

  const options = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      labels: {
        style: {
          colors: theme === "dark" ? "#FFFFFF" : "#000000",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: theme === "dark" ? "#FFFFFF" : "#000000",
        },
      },
    },
    colors: ["#6C5DD3", "#FF6A55"],
    dataLabels: {
      enabled: false,
    },

    legend: {
      position: "top",
      horizontalAlign: "right",
      labels: {
        colors: theme === "dark" ? "#FFFFFF" : "#000000",
      },
      containerMargin: {
        top: 10, // Add margin to the top of the legend
        left: 0,
        right: 0,
        bottom: 0,
      },
      itemMargin: {
        horizontal: 10, // Horizontal gap between legend items
        vertical: 5, // Vertical gap between legend items
      },
      offsetX: 10, // Additional horizontal padding
      offsetY: 5, // Additional vertical padding
    },

    grid: {
      show: true,
      borderColor: "#f1f1f1",
    },

    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
          legend: {
            position: "bottom",
            horizontalAlign: "center",
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 250,
          },
          xaxis: {
            labels: {
              show: true,
            },
          },
        },
      },
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 200,
          },
          legend: {
            fontSize: "12px",
          },
          xaxis: {
            labels: {
              show: false,
            },
          },
          yaxis: {
            labels: {
              show: false,
            },
          },
        },
      },
    ],
  };

  return (
    <div className="mt-5 min-h-screen mx-5 lg:mx-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="dark:bg-gray-900 bg-gray-50 p-6 rounded-lg shadow-md flex items-center">
          <p className="w-12 h-12 text-purple-500 mr-4">
            <ChartPie size={42} />
          </p>
          <div>
            <h3 className="text-xl ">Sales Report</h3>
            <p className="text-gray-400">View sales by category</p>
          </div>
        </div>

        <div className="dark:bg-gray-900 bg-gray-50 p-6 rounded-lg shadow-md flex items-center">
          <p className="w-12 h-12 text-blue-500 mr-4">
            <ChartColumnDecreasing size={42} />
          </p>
          <div>
            <h3 className="text-xl ">Revenue Report</h3>
            <p className="text-gray-400">View revenue trends</p>
          </div>
        </div>

        <div className="dark:bg-gray-900 bg-gray-50 p-6 rounded-lg shadow-md flex items-center">
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
      <div className="dark:bg-gray-900 mt-5 p-5 rounded-lg shadow-md">
        <h3 className="text-xl lg:text-2xl mb-4">Customer Waves</h3>
        <ApexCharts
          options={options}
          series={series}
          type="area"
          height={350}
        />
      </div>

      {/* Table */}
      <div className="dark:bg-gray-900 mt-5 p-5 rounded-lg shadow-md">
        <h3 className="text-xl lg:text-2xl  mb-4">Recent Transactions</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2">March 20, 2022</td>
                <td className="px-4 py-2">Balance Top Up</td>
                <td className="px-4 py-2 text-green-500">$200</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">March 15, 2022</td>
                <td className="px-4 py-2">Pay Rent</td>
                <td className="px-4 py-2 text-red-500">$100</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">March 12, 2022</td>
                <td className="px-4 py-2">Office Rent</td>
                <td className="px-4 py-2 text-red-500">$500</td>
              </tr>
              <tr>
                <td className="px-4 py-2">March 11, 2022</td>
                <td className="px-4 py-2">Electricity</td>
                <td className="px-4 py-2 text-red-500">$80</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
