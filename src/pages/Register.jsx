import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Register() {
    const navigate = useNavigate();
    const { register } = useAuth();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: '',
        role: 'tenant',
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});

        try {
            const data = await register(formData);
            if (data.status) {
                navigate('/dashboard');
            }
        } catch (error) {
            if (error.response?.data?.errors) {
                setErrors(error.response.data.errors);
            } else {
                setErrors({ general: [error.response?.data?.message || 'Hitilafu imetokea'] });
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Jisajili</h2>
                <p className="subtitle">Unda akaunti yako ya Rentals</p>

                {errors.general && (
                    <div className="error-banner">{errors.general[0]}</div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Jina Kamili</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Juma Owner"
                            required
                        />
                        {errors.name && <span className="error">{errors.name[0]}</span>}
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="owner@test.com"
                            required
                        />
                        {errors.email && <span className="error">{errors.email[0]}</span>}
                    </div>

                    <div className="form-group">
                        <label>Namba ya Simu</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="0712345678"
                        />
                        {errors.phone && <span className="error">{errors.phone[0]}</span>}
                    </div>

                    <div className="form-group">
                        <label>Neno la Siri</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            required
                        />
                        {errors.password && <span className="error">{errors.password[0]}</span>}
                    </div>

                    <div className="form-group">
                        <label>Rudia Neno la Siri</label>
                        <input
                            type="password"
                            name="password_confirmation"
                            value={formData.password_confirmation}
                            onChange={handleChange}
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Wewe ni nani?</label>
                        <div className="role-options">
                            <label className={`role-option ${formData.role === 'owner' ? 'active' : ''}`}>
                                <input
                                    type="radio"
                                    name="role"
                                    value="owner"
                                    checked={formData.role === 'owner'}
                                    onChange={handleChange}
                                />
                                <span>🏠 Mwenye Nyumba</span>
                            </label>
                            <label className={`role-option ${formData.role === 'tenant' ? 'active' : ''}`}>
                                <input
                                    type="radio"
                                    name="role"
                                    value="tenant"
                                    checked={formData.role === 'tenant'}
                                    onChange={handleChange}
                                />
                                <span>🧑‍💼 Mpangaji</span>
                            </label>
                        </div>
                    </div>

                    <button type="submit" disabled={loading} className="btn-primary">
                        {loading ? 'Inasajili...' : 'Jisajili'}
                    </button>
                </form>

                <p className="auth-footer">
                    Una akaunti tayari? <Link to="/login">Ingia hapa</Link>
                </p>
            </div>
        </div>
    );
}