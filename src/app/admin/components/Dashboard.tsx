"use client";

import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Tooltip, Legend } from "chart.js";
import Link from "next/link"; // Import Link from Next.js

// Register the necessary components
Chart.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Tooltip, Legend);

const AdminDashboard = () => {
  // Sample data for the charts
  const revenueData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue Growth",
        data: [0, 0, 0, 0, 0, 0], // 0 sales as it's a new site
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const salesData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales Overview",
        data: [0, 0, 0, 0, 0, 0], // 0 sales as it's a new site
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Dabbe me Dabba Admin Dashboard</h1>
        <Link href="/setting"> {/* Link to User Settings page */}
          <button className="bg-blue-600 text-white hover:bg-blue-700 p-2 rounded">Settings</button>
        </Link>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-3xl font-bold">0002</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold">Sales</h2>
          <p className="text-3xl font-bold">$0</p> {/* Updated to show $0 sales */}
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold">Active Sessions</h2>
          <p className="text-3xl font-bold">0</p> {/* Updated to show 0 active sessions */}
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold">Revenue Growth</h2>
          <div className="h-40">
            <Line data={revenueData} options={{ responsive: true }} />
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold">Sales Overview</h2>
          <div className="h-40">
            <Bar data={salesData} options={{ responsive: true }} />
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold">New Orders</h2>
          <p className="text-3xl font-bold">0</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold">Pending Reviews</h2>
          <p className="text-3xl font-bold">5</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold">Support Tickets</h2>
          <p className="text-3xl font-bold">2</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
