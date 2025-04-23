import React from 'react';
const Sidebar: React.FC = () => (
  <aside className="w-64 bg-purple-900 text-white flex flex-col justify-between">
    <div>
      <div className="text-2xl font-bold p-6">techrity</div>
      <nav className="flex flex-col space-y-4 px-6">
        <a href="#" className="bg-white text-purple-900 py-2 px-4 rounded-lg">Dashboard</a>
        <a href="#">Programs</a>
        <a href="#">Activities</a>
        <a href="#">Users</a>
        <a href="#">Forums</a>
        <a href="#">Finances</a>
        <a href="#">Rewards</a>
        <a href="#" className="opacity-50">Analytics <span className="text-xs ml-2">Coming Soon</span></a>
      </nav>
    </div>
    <div className="px-6 py-4 space-y-2">
      <a href="#">Settings</a>
      <a href="#" className="text-red-400">Log Out</a>
    </div>
  </aside>
);
export default Sidebar;