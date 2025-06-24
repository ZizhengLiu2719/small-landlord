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
              ← 返回
            </button>
            <h1 className="page-title">💰 收租提醒</h1>
          </div>
          <div className="header-right">
            <button className="add-btn">+ 添加租金记录</button>
          </div>
        </div>
      </div>

      <div className="page-content">
        <div className="rent-container">
          <div className="rent-list">
            <div className="empty-state">
              <div className="empty-icon">💰</div>
              <h3>暂无租金记录</h3>
              <p>点击上方"添加租金记录"按钮开始管理租金</p>
            </div>
          </div>

          <div className="rent-stats">
            <div className="stat-card">
              <div className="stat-number">$0</div>
              <div className="stat-label">本月应收</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">$0</div>
              <div className="stat-label">已收租金</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">0</div>
              <div className="stat-label">逾期未付</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 