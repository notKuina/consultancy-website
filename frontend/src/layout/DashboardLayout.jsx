import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>


      <main className="pt-20 p-4 relative">
        {/* This renders child routes */}
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
