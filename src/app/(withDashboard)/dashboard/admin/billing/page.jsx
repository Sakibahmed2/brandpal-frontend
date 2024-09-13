"use client";

import LoadingPage from "@/components/ui/LoadingPage";
import TransactionsTable from "@/components/ui/TransactionsTable";
import {
  useGetAllTransactionsQuery,
  useUpdateToSuccessMutation,
} from "@/redux/api/paymentApi";
import Swal from "sweetalert2";

const AdminBillingDashboard = () => {
  return (
    <div className="min-h-screen">
      <div className=" bg-gray-50 dark:bg-gray-900 p-6 mt-5 mx-5 lg:mx-0">
        {/* Page Title */}
        <h1 className="text-xl lg:text-3xl  font-semibold mb-6">
          Billing Details
        </h1>
      </div>
      <TransactionsTable />
    </div>
  );
};

export default AdminBillingDashboard;
