import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardLayout from './layouts/DashboardLayout';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

// Owner pages
import MyProperties from './pages/owner/MyProperties';
import AddProperty from './pages/owner/AddProperty';
import RentalRequests from './pages/owner/RentalRequests';
import Leases from './pages/owner/Leases';
import PaymentsReceived from './pages/owner/PaymentsReceived';

// Tenant pages
import BrowseProperties from './pages/tenant/BrowseProperties';
import MyRequests from './pages/tenant/MyRequests';
import MyLease from './pages/tenant/MyLease';
import MyPayments from './pages/tenant/MyPayments';
import Maintenance from './pages/tenant/Maintenance';

import './App.css';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    {/* Public */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    {/* Protected + Layout */}
                    <Route
                        element={
                            <ProtectedRoute>
                                <DashboardLayout />
                            </ProtectedRoute>
                        }
                    >
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/profile" element={<Profile />} />

                        {/* Owner Only */}
                        <Route
                            path="/owner/properties"
                            element={
                                <ProtectedRoute allowedRoles={['owner']}>
                                    <MyProperties />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/owner/properties/add"
                            element={
                                <ProtectedRoute allowedRoles={['owner']}>
                                    <AddProperty />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/owner/rental-requests"
                            element={
                                <ProtectedRoute allowedRoles={['owner']}>
                                    <RentalRequests />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/owner/leases"
                            element={
                                <ProtectedRoute allowedRoles={['owner']}>
                                    <Leases />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/owner/payments"
                            element={
                                <ProtectedRoute allowedRoles={['owner']}>
                                    <PaymentsReceived />
                                </ProtectedRoute>
                            }
                        />

                        {/* Tenant Only */}
                        <Route
                            path="/tenant/properties"
                            element={
                                <ProtectedRoute allowedRoles={['tenant']}>
                                    <BrowseProperties />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/tenant/rental-requests"
                            element={
                                <ProtectedRoute allowedRoles={['tenant']}>
                                    <MyRequests />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/tenant/lease"
                            element={
                                <ProtectedRoute allowedRoles={['tenant']}>
                                    <MyLease />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/tenant/payments"
                            element={
                                <ProtectedRoute allowedRoles={['tenant']}>
                                    <MyPayments />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/tenant/maintenance"
                            element={
                                <ProtectedRoute allowedRoles={['tenant']}>
                                    <Maintenance />
                                </ProtectedRoute>
                            }
                        />
                    </Route>

                    <Route path="/" element={<Navigate to="/dashboard" replace />} />
                    <Route path="*" element={<Navigate to="/dashboard" replace />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;