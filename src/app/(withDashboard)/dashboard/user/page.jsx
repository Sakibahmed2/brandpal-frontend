import { Bell, CircleUserRound, Mail } from "lucide-react";

const UserDashboardPage = () => {
  return (
    <div className="dark:bg-gray-900 bg-gray-50 py-10 px-5 mx-4 lg:mx-0 mt-5 rounded-t-xl">
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
    </div>
  );
};

export default UserDashboardPage;
