import { User } from "lucide-react";
import React from "react";

const AnalyticsCard = ({ item }) => {
  const { title, value, change, changeType, description } = item;
  return (
    <div className="dark:bg-gray-900 bg-gray-50 dark:text-white rounded-lg shadow-md p-6 flex items-center space-x-4">
      <div className="bg-purple-200 text-purple-500 rounded-full p-3">
        {/* Render the icon here */}
        <User />
      </div>
      <div className="flex flex-col">
        <h4 className="dark:text-gray-300 text-sm">{title}</h4>
        <div className="flex items-center space-x-2 my-2">
          <p className="text-2xl font-semibold ">{value}</p>
          <span
            className={`text-sm ${
              changeType === "positive" ? "text-green-500" : "text-red-500"
            }`}
          >
            {change}
          </span>
        </div>
        <p className="dark:text-gray-300 text-xs">{description}</p>
      </div>
    </div>
  );
};

export default AnalyticsCard;
