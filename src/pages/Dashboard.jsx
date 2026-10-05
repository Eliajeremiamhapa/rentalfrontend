import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
    LuHouse,
    LuMail,
    LuUsers,
    LuDollarSign,
    LuFileText,
    LuCreditCard,
    LuWrench,
    LuCirclePlus,
    LuSearch,
    LuInbox,
    LuHand,
} from 'react-icons/lu';

export default function Dashboard() {
    const { user } = useAuth();
    const navigate = useNavigate();

    const ownerStats = [
        { label: 'Nyumba Zangu', value: '0', icon: LuHouse, color: 'blue' },
        { label: 'Maombi Mapya', value: '0', icon: LuMail, color: 'orange' },
        { label: 'Wapangaji', value: '0', icon: LuUsers, color: 'green' },
        { label: 'Mapato ya Mwezi', value: 'TZS 0', icon: LuDollarSign, color: 'purple' },
    ];

    const tenantStats = [
        { label: 'Maombi Yangu', value: '0', icon: LuMail, color: 'orange' },
        { label: 'Mikataba', value: '0', icon: LuFileText, color: 'blue' },
        { label: 'Malipo', value: '0', icon: LuCreditCard, color: 'green' },
        { label: 'Matengenezo', value: '0', icon: LuWrench, color: 'purple' },
    ];

    const stats = user?.role === 'owner' ? ownerStats : tenantStats;

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Karibu, {user?.name}! <LuHand className="wave-icon" /></h1>
                <p className="page-subtitle">
                    {user?.role === 'owner'
                        ? 'Simamia nyumba zako na wapangaji kwa urahisi.'
                        : 'Tafuta nyumba, lipa kodi, na wasiliana na mwenye nyumba.'}
                </p>
            </div>

            {/* Stats Cards */}
            <div className="stats-grid">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div key={index} className={`stat-card ${stat.color}`}>
                            <div className="stat-icon">
                                <Icon />
                            </div>
                            <div className="stat-content">
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Quick Actions */}
            <div className="section-card">
                <h2>Vitendo vya Haraka</h2>
                <div className="quick-actions">
                    {user?.role === 'owner' ? (
                        <>
                            <button
                                className="action-btn"
                                onClick={() => navigate('/owner/properties/add')}
                            >
                                <LuCirclePlus className="action-btn-icon" />
                                Ongeza Nyumba
                            </button>
                            <button
                                className="action-btn"
                                onClick={() => navigate('/owner/rental-requests')}
                            >
                                <LuMail className="action-btn-icon" />
                                Angalia Maombi
                            </button>
                            <button
                                className="action-btn"
                                onClick={() => navigate('/owner/payments')}
                            >
                                <LuDollarSign className="action-btn-icon" />
                                Fuatilia Malipo
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                className="action-btn"
                                onClick={() => navigate('/tenant/properties')}
                            >
                                <LuSearch className="action-btn-icon" />
                                Tafuta Nyumba
                            </button>
                            <button
                                className="action-btn"
                                onClick={() => navigate('/tenant/rental-requests')}
                            >
                                <LuMail className="action-btn-icon" />
                                Omba Kukodisha
                            </button>
                            <button
                                className="action-btn"
                                onClick={() => navigate('/tenant/payments')}
                            >
                                <LuCreditCard className="action-btn-icon" />
                                Lipa Kodi
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* Recent Activity */}
            <div className="section-card">
                <h2>Shughuli za Hivi Karibuni</h2>
                <div className="empty-state">
                    <LuInbox className="empty-state-icon" />
                    <p>Hakuna shughuli bado.</p>
                    <span>data zitaonekana hapa.</span>
                </div>
            </div>
        </div>
    );
}