import { useAuth } from '../context/AuthContext';

export default function Profile() {
    const { user } = useAuth();

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>👤 Wasifu Wangu</h1>
                <p className="page-subtitle">Taarifa zako binafsi.</p>
            </div>

            <div className="section-card">
                <div className="profile-info">
                    <div className="profile-avatar">
                        {user?.name?.charAt(0).toUpperCase()}
                    </div>
                    <div className="profile-details">
                        <p><strong>Jina:</strong> {user?.name}</p>
                        <p><strong>Email:</strong> {user?.email}</p>
                        <p><strong>Simu:</strong> {user?.phone || 'Haipo'}</p>
                        <p>
                            <strong>Role:</strong>{' '}
                            <span className={`badge ${user?.role}`}>
                                {user?.role === 'owner' ? '🏠 Mwenye Nyumba' : '🧑‍💼 Mpangaji'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}