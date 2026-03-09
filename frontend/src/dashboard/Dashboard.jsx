import React from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import StatsCards from "../components/StatsCards";
import RecentRequests from "../components/RecentRequests";

function Dashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-0">
        <TopBar />
        <StatsCards />
        <RecentRequests />
      </main>
    </div>
  );
}

export default Dashboard;