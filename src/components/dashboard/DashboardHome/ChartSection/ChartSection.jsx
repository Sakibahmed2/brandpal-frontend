"use client";

import React from "react";
import ReactApexChart from "react-apexcharts";

const ChartSection = () => {
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
      categories: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
      ],
      labels: {
        style: {
          colors: "#FFFFFF", // Text color set to white
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#FFFFFF", // Text color set to white
        },
      },
    },
    colors: ["#A155B9", "#3ABAF4"],
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
    <div className="bg-gray-900 p-5 mx-4 lg:mx-0 lg:w-[900px]">
      <div className="lg:flex justify-between items-center">
        <div>
          <p className="text-xl lg:text-2xl">Customer Waves</p>
          <p className="light-text">In last 6 months</p>
        </div>

        {/* <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 lg:gap-5 rounded-xl border border-gray-500 lg:py-2 lg:px-4 px-2 py-1">
            <p className="lg:w-4 lg:h-4 w-2 h-2 rounded-full bg-purple-500"></p>
            <p className="text-xs lg:text-lg">Young Age</p>
          </div>
          <div className="flex items-center gap-2 lg:gap-5 rounded-xl border border-gray-500 lg:py-2 lg:px-4 px-2 py-1">
            <p className="lg:w-4 lg:h-4 w-2 h-2 rounded-full bg-sky-500"></p>
            <p className="text-xs lg:text-lg">Old Age</p>
          </div>
        </div> */}
      </div>

      <div className="p-4 text-white rounded-md">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default ChartSection;
