"use client";

import AnalyticsCard from "@/components/ui/AnalyticsCard";
import React from "react";
import ReactApexChart from "react-apexcharts";

const analyticsData = [
  {
    id: 1,
    title: "Total Employee",
    value: 313,
    change: "+10%",
    changeType: "positive",
    description: "Than Last Year",
  },
  {
    id: 2,
    title: "On Leave Employee",
    value: 55,
    change: "+2.15%",
    changeType: "positive",
    description: "Than Last Month",
  },
  {
    id: 3,
    title: "Total Project",
    value: 313,
    change: "+5.15%",
    changeType: "positive",
    description: "Than Last Month",
  },
  {
    id: 4,
    title: "Compleat Project",
    value: 150,
    change: "-5.5%",
    changeType: "negative",
    description: "Than Last Month",
  },
  {
    id: 5,
    title: "Total Client",
    value: 151,
    change: "+2.15%",
    changeType: "positive",
    description: "Than Last Month",
  },
  {
    id: 6,
    title: "Total Revenue",
    value: "$55",
    change: "+2.15%",
    changeType: "positive",
    description: "Than Last Month",
  },
  {
    id: 7,
    title: "Total Jobs",
    value: 55,
    change: "+2.15%",
    changeType: "positive",
    description: "Than Last Month",
  },
  {
    id: 8,
    title: "Total Ticket",
    value: 55,
    change: "+2.15%",
    changeType: "positive",
    description: "Than Last Month",
  },
];

const AnalyticsPage = () => {
  const series = [
    {
      name: "Revenue",
      data: [10, 20, 15, 25, 18, 22, 10],
    },
    {
      name: "Seals",
      data: [15, 10, 25, 18, 24, 15, 12],
    },
    {
      name: "Profit",
      data: [20, 25, 10, 30, 15, 20, 18],
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
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
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
    colors: ["#A155B9", "#3ABAF4", "#F7B84B"],
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
    <div className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {analyticsData.map((item) => (
          <AnalyticsCard key={item.id} item={item} />
        ))}
      </div>

      <div className="bg-gray-900 mt-5 p-5">
        <div>
          <h3 className="text-xl lg:text-2xl">Weekly Sales Report</h3>
        </div>
        <div className="p-4 text-white rounded-md">
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
