import React from "react";

function RecentRequests() {
  return (
    <div className="bg-white p-6 m-5 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Recent Requests</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b">
            <th className="py-2">Service</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-3">IELTS Consultation</td>
            <td className="text-yellow-500">Pending</td>
            <td>Feb 20</td>
          </tr>
          <tr>
            <td className="py-3">Visa Processing</td>
            <td className="text-green-500">Approved</td>
            <td>Feb 18</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RecentRequests;