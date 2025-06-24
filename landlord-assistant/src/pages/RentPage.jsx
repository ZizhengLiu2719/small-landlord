import { useNavigate } from 'react-router-dom';
import './RentPage.css';

export default function RentPage() {
  const navigate = useNavigate();

  return (
    <div className="rent-page">
      <div className="page-header">
        <div className="header-content">
          <div className="header-left">
            <button onClick={() => navigate('/dashboard')} className="back-btn">
              ← Back
            </button>
            <h1 className="page-title">💰 Rent Collection</h1>
          </div>
          <div className="header-right">
            <button className="add-btn">+ Record Payment</button>
          </div>
        </div>
      </div>

      <div className="page-content">
        <div className="rent-container">
          <div className="rent-list">
            <div className="empty-state">
              <div className="empty-icon">💰</div>
              <h3>No Rent Records</h3>
              <p>Click "Record Payment" above to start tracking rent payments</p>
            </div>
          </div>

          <div className="rent-stats">
            <div className="stat-card">
              <div className="stat-number">$0</div>
              <div className="stat-label">Total Collected</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">$0</div>
              <div className="stat-label">Overdue</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">0</div>
              <div className="stat-label">Pending</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 