import React, { useState, useEffect } from 'react';

import Sidebar from '../SideBar';
import Header from '../SiteHeader';

function Dashboard({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    useEffect(() => {}, [children]);
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {/*  Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main>
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;
