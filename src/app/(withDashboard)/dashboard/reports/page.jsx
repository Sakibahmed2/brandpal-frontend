"use client";

import React from "react";
import ApexCharts from "react-apexcharts"; // Ensure you have apexcharts installed

const ReportsPage = () => {
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
          colors: "#FFF",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#FFF",
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
        colors: "#FFFFFF", // Text color set to white
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
    <div className="p-6 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Report Cards */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex items-center">
          {/* <FaChartPie className="w-12 h-12 text-purple-500 mr-4" /> */}
          <div>
            <h3 className="text-lg font-semibold">Sales Report</h3>
            <p className="text-gray-400">View sales by category</p>
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex items-center">
          {/* <FaChartBar className="w-12 h-12 text-blue-500 mr-4" /> */}
          <div>
            <h3 className="text-lg font-semibold">Revenue Report</h3>
            <p className="text-gray-400">View revenue trends</p>
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex items-center">
          {/* <FaFileAlt className="w-12 h-12 text-green-500 mr-4" /> */}
          <div>
            <h3 className="text-lg font-semibold">Expense Report</h3>
            <p className="text-gray-400">View expense breakdown</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="bg-gray-900 mt-8 p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Customer Waves</h3>
        <ApexCharts
          options={options}
          series={series}
          type="area"
          height={350}
        />
      </div>

      {/* Table */}
      <div className="bg-gray-900 mt-8 p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
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
