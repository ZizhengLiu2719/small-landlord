// src/pages/Dashboard.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import './Dashboard.css';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Get current user information
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };
    getUser();
  }, []);

  const modules = [
    { id: 'properties', title: 'Property Management', description: 'Manage your property portfolio with detailed information and status tracking', path: '/properties', icon: '🏠' },
    { id: 'tenants', title: 'Tenant Management', description: 'Handle tenant information, contracts, and lease agreements efficiently', path: '/tenants', icon: '👤' },
    { id: 'rent', title: 'Rent Collection', description: 'Track rent payments, manage overdue accounts, and generate financial reports', path: '/rent', icon: '💰' },
    { id: 'repair', title: 'Repair Requests', description: 'Process maintenance requests and coordinate repairs with tenants', path: '/repair', icon: '🛠' },
    { id: 'documents', title: 'Document Generation', description: 'Create professional legal documents and contracts with AI assistance', path: '/documents', icon: '📄' },
    { id: 'reminders', title: 'Smart Reminders', description: 'Stay on top of important dates, payments, and property maintenance', path: '/reminders', icon: '⏰' }
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="dashboard">
      {/* Top navigation bar */}
      <div className="header">
        <div className="header-content">
          <div className="header-left">
            <h1 className="logo">SmartLandlord</h1>
          </div>
          <div className="header-right">
            <span className="welcome-text">
              Welcome back, {user?.email?.split('@')[0] || 'User'}
            </span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="main-content">
        <h2>Property Management Dashboard</h2>
        <p>Streamline your rental property operations with our comprehensive management tools. Everything you need to manage your properties efficiently in one place.</p>
        
        <div className="modules-grid">
          {modules.map((module) => (
            <div
              key={module.id}
              onClick={() => navigate(module.path)}
              className="module-card"
            >
              <div className="module-content">
                <div className="module-icon">{module.icon}</div>
                <h3 className="module-title">
                  {module.title}
                </h3>
                <p className="module-description">
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
  