import { useNavigate } from 'react-router-dom';
import './PropertiesPage.css';

export default function PropertiesPage() {
  const navigate = useNavigate();

  return (
    <div className="properties-page">
      {/* Page header */}
      <div className="page-header">
        <div className="header-content">
          <div className="header-left">
            <button onClick={() => navigate('/dashboard')} className="back-btn">
              ← Back
            </button>
            <h1 className="page-title">🏠 Property Management</h1>
          </div>
          <div className="header-right">
            <button className="add-btn">+ Add Property</button>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="page-content">
        <div className="properties-container">
          {/* Properties list */}
          <div className="properties-list">
            <div className="empty-state">
              <div className="empty-icon">🏠</div>
              <h3>No Properties</h3>
              <p>Click "Add Property" above to start managing your properties</p>
            </div>
          </div>

          {/* Properties statistics */}
          <div className="properties-stats">
            <div className="stat-card">
              <div className="stat-number">0</div>
              <div className="stat-label">Total Properties</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">0</div>
              <div className="stat-label">Rented</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">0</div>
              <div className="stat-label">Vacant</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 