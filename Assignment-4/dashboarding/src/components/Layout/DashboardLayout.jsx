import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/5 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <nav className="space-y-2">
          <Link to="" className="block">Home</Link>
          <Link to="kanban" className="block">Kanban Layout</Link>
          <Link to="calendar" className="block">Calendar</Link>
          <Link to="theme-settings" className="block">Theme Settings</Link>
          <Link to="/" className="block">Back to Home</Link>
          <Link to="/login" className="block">LogOut</Link>
       </nav>
      </aside>

      {/* Main content */}
      <main className="w-4/5 p-6 bg-gray-100 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
