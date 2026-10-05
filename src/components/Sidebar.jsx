import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
    LuLayoutDashboard,
    LuHouse,
    LuCirclePlus,
    LuMail,
    LuFileText,
    LuDollarSign,
    LuWrench,
    LuUser,
    LuSearch,
    LuCreditCard,
} from 'react-icons/lu';

export default function Sidebar() {
    const { user } = useAuth();

    const ownerMenu = [
        { path: '/dashboard', label: 'Dashboard', icon: LuLayoutDashboard },
        { path: '/owner/properties', label: 'Nyumba Zangu', icon: LuHouse },
        { path: '/owner/properties/add', label: 'Ongeza Nyumba', icon: LuCirclePlus },
        { path: '/owner/rental-requests', label: 'Maombi ya Kukodisha', icon: LuMail },
        { path: '/owner/leases', label: 'Mikataba', icon: LuFileText },
        { path: '/owner/payments', label: 'Malipo Yaliyopokelewa', icon: LuDollarSign },
        { path: '/owner/maintenance', label: 'Matengenezo', icon: LuWrench },
        { path: '/profile', label: 'Wasifu Wangu', icon: LuUser },
    ];

    const tenantMenu = [
        { path: '/dashboard', label: 'Dashboard', icon: LuLayoutDashboard },
        { path: '/tenant/properties', label: 'Tafuta Nyumba', icon: LuSearch },
        { path: '/tenant/rental-requests', label: 'Maombi Yangu', icon: LuMail },
        { path: '/tenant/lease', label: 'Mkataba Wangu', icon: LuFileText },
        { path: '/tenant/payments', label: 'Malipo Yangu', icon: LuCreditCard },
        { path: '/tenant/maintenance', label: 'Maombi ya Matengenezo', icon: LuWrench },
        { path: '/profile', label: 'Wasifu Wangu', icon: LuUser },
    ];

    const menu = user?.role === 'owner' ? ownerMenu : tenantMenu;

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-logo">
                    <LuHouse className="sidebar-logo-icon" />
                    <h2>Rentals</h2>
                </div>
                <span className={`sidebar-role ${user?.role}`}>
                    {user?.role === 'owner' ? 'Mwenye Nyumba' : 'Mpangaji'}
                </span>
            </div>

            <nav className="sidebar-nav">
                {menu.map((item) => {
                    const IconComponent = item.icon;
                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `sidebar-link ${isActive ? 'active' : ''}`
                            }
                            end={item.path === '/dashboard'}
                        >
                            <IconComponent className="sidebar-icon" />
                            <span className="sidebar-label">{item.label}</span>
                        </NavLink>
                    );
                })}
            </nav>

            <div className="sidebar-footer">
                <p>© 2026 Rentals System</p>
            </div>
        </aside>
    );
}