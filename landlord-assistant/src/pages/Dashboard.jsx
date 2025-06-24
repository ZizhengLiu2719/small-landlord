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
    { id: 'properties', title: '🏠 Property Management', description: 'Manage your property information', path: '/properties' },
    { id: 'tenants', title: '👤 Tenant Management', description: 'Tenant information and contract management', path: '/tenants' },
    { id: 'rent', title: '💰 Rent Collection', description: 'Rent collection and overdue reminders', path: '/rent' },
    { id: 'repair', title: '🛠 Repair Requests', description: 'Handle maintenance requests', path: '/repair' },
    { id: 'documents', title: '📄 Document Generation', description: 'AI-powered document creation', path: '/documents' },
    { id: 'reminders', title: '⏰ Smart Reminders', description: 'Important notifications and reminders', path: '/reminders' }
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
      {/* Top welcome bar */}
      <div className="header">
        <div className="header-content">
          <div className="header-left">
            <h1 className="logo">SmartLandlord</h1>
          </div>
          <div className="header-right">
            <span className="welcome-text">
              👋 Welcome back, {user?.email?.split('@')[0] || 'User'}
            </span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="main-content">
        <div className="modules-grid">
          {modules.map((module) => (
            <div
              key={module.id}
              onClick={() => navigate(module.path)}
              className="module-card"
            >
              <div className="module-content">
                <div className="module-icon">{module.title.split(' ')[0]}</div>
                <h3 className="module-title">
                  {module.title.split(' ').slice(1).join(' ')}
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
  