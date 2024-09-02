import Sidebar from "@/components/dashboard/Sidebar/Sidebar";
import cn from "@/utils/cn";
import { Menu } from "lucide-react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["cyrillic"],
});

const DashboardLayout = ({ children }) => {
  return (
    <div
      data-theme="dark"
      className={cn("bg-gray-800 text-white", montserrat.className)}
    >
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}

          {children}

          <label
            htmlFor="my-drawer-2"
            className=" drawer-button lg:hidden absolute top-12 left-7 text-gray-400 border border-gray-600 p-2 rounded-sm bg-gray-800 "
          >
            <Menu size={24} />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
