
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { CustomerSuccessCockpit } from "@/components/cs-cockpit/CustomerSuccessCockpit";

const Messages = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Customer Success Cockpit</h1>
      <CustomerSuccessCockpit />
    </DashboardLayout>
  );
};

export default Messages;
