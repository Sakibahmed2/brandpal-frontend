import { Bell, CircleUserRound, Mail } from "lucide-react";

const UserDashboardPage = () => {
  return (
    <div>
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
      </div>
      <hr className="border-gray-500 " />

      <div className="dark:bg-gray-900 bg-gray-50 p-5 mt-5">
        {/* Recent Activity */}
        <div className="card col-span-1 md:col-span-2 lg:col-span-3 dark:bg-gray-800 bg-white mt-4">
          <div className="card-body">
            <h2 className="card-title text-secondary">Recent Activity</h2>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-semibold">Order #1234</p>
                  <span className="text-gray-500">SEO Service</span>
                </div>
                <span className="text-success">Completed</span>
              </li>

              <li className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-semibold">Order #1235</p>
                  <span className="text-gray-500">PPC Campaign</span>
                </div>
                <span className="text-warning">Pending</span>
              </li>

              <li className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Order #1236</p>
                  <span className="text-gray-500">Web Development</span>
                </div>
                <span className="text-success">Completed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;
