import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

function Layout() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 p-4 overflow-auto">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
