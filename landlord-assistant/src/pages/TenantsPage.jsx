import { useNavigate } from 'react-router-dom';
import './TenantsPage.css';

export default function TenantsPage() {
  const navigate = useNavigate();

  return (
    <div className="tenants-page">
      {/* Page header */}
      <div className="page-header">
        <div className="header-content">
          <div className="header-left">
            <button onClick={() => navigate('/dashboard')} className="back-btn">
              ← Back
            </button>
            <h1 className="page-title">👤 Tenant Management</h1>
          </div>
          <div className="header-right">
            <button className="add-btn">+ Add Tenant</button>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="page-content">
        <div className="tenants-container">
          {/* Tenants list */}
          <div className="tenants-list">
            <div className="empty-state">
              <div className="empty-icon">👤</div>
              <h3>No Tenants</h3>
              <p>Click "Add Tenant" above to start managing your tenants</p>
            </div>
          </div>

          {/* Tenants statistics */}
          <div className="tenants-stats">
            <div className="stat-card">
              <div className="stat-number">0</div>
              <div className="stat-label">Total Tenants</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">0</div>
              <div className="stat-label">Active Leases</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">0</div>
              <div className="stat-label">Expiring Soon</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 