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
              ← 返回
            </button>
            <h1 className="page-title">🛠 报修通道</h1>
          </div>
          <div className="header-right">
            <button className="add-btn">+ 添加报修记录</button>
          </div>
        </div>
      </div>

      <div className="page-content">
        <div className="repair-container">
          <div className="repair-list">
            <div className="empty-state">
              <div className="empty-icon">🛠</div>
              <h3>暂无报修记录</h3>
              <p>点击上方"添加报修记录"按钮开始管理维修请求</p>
            </div>
          </div>

          <div className="repair-stats">
            <div className="stat-card">
              <div className="stat-number">0</div>
              <div className="stat-label">待处理</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">0</div>
              <div className="stat-label">处理中</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">0</div>
              <div className="stat-label">已完成</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 