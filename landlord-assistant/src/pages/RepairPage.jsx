import { useNavigate } from 'react-router-dom';
import './RepairPage.css';

export default function RepairPage() {
  const navigate = useNavigate();

  return (
    <div className="repair-page">
      <div className="page-header">
        <div className="header-content">
          <div className="header-left">
            <button onClick={() => navigate('/dashboard')} className="back-btn">
              ← Back
            </button>
            <h1 className="page-title">🛠 Repair Requests</h1>
          </div>
          <div className="header-right">
            <button className="add-btn">+ New Request</button>
          </div>
        </div>
      </div>

      <div className="page-content">
        <div className="repair-container">
          <div className="repair-list">
            <div className="empty-state">
              <div className="empty-icon">🛠</div>
              <h3>No Repair Requests</h3>
              <p>Click "New Request" above to start managing repair requests</p>
            </div>
          </div>

          <div className="repair-stats">
            <div className="stat-card">
              <div className="stat-number">0</div>
              <div className="stat-label">Total Requests</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">0</div>
              <div className="stat-label">In Progress</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">0</div>
              <div className="stat-label">Completed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 