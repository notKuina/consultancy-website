// src/components/StatsCards.jsx
import React from "react";

function StatsCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8 p-5">
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <p className="text-gray-500">Total Requests</p>
        <h2 className="text-2xl font-bold">12</h2>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <p className="text-gray-500">Pending</p>
        <h2 className="text-2xl font-bold text-yellow-500">4</h2>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <p className="text-gray-500">Approved</p>
        <h2 className="text-2xl font-bold text-green-500">6</h2>
      </div>
    </div>
  );
}

export default StatsCards;