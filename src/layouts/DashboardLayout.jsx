import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';

export default function DashboardLayout() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    return (
        <div className="dashboard-layout">
            {/* Topbar */}
            <header className="topbar">
                <button
                    className="menu-toggle"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    ☰
                </button>
                <div className="topbar-title">Rentals Dashboard</div>
                <div className="topbar-user">
                    <span className="user-avatar">
                        {user?.name?.charAt(0).toUpperCase()}
                    </span>
                    <div className="user-meta">
                        <span className="user-name">{user?.name}</span>
                        <span className="user-role">
                            {user?.role === 'owner' ? 'Mwenye Nyumba' : 'Mpangaji'}
                        </span>
                    </div>
                    <button onClick={handleLogout} className="btn-topbar-logout">
                        Toka
                    </button>
                </div>
            </header>

            <div className="dashboard-body">
                {/* Sidebar */}
                <div className={`sidebar-wrapper ${sidebarOpen ? 'open' : ''}`}>
                    <Sidebar />
                </div>

                {/* Main Content */}
                <main className="main-content">
                    <Outlet />
                </main>
            </div>

            {/* Overlay for mobile */}
            {sidebarOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    );
}