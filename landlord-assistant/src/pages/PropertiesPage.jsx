import { useNavigate } from 'react-router-dom';
import './PropertiesPage.css';

export default function PropertiesPage() {
  const navigate = useNavigate();

  return (
    <div className="properties-page">
      {/* 页面头部 */}
      <div className="page-header">
        <div className="header-content">
          <div className="header-left">
            <button onClick={() => navigate('/dashboard')} className="back-btn">
              ← 返回
            </button>
            <h1 className="page-title">🏠 房源管理</h1>
          </div>
          <div className="header-right">
            <button className="add-btn">+ 添加房源</button>
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="page-content">
        <div className="properties-container">
          {/* 房源列表 */}
          <div className="properties-list">
            <div className="empty-state">
              <div className="empty-icon">🏠</div>
              <h3>暂无房源</h3>
              <p>点击上方"添加房源"按钮开始管理您的房产</p>
            </div>
          </div>

          {/* 房源统计 */}
          <div className="properties-stats">
            <div className="stat-card">
              <div className="stat-number">0</div>
              <div className="stat-label">总房源</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">0</div>
              <div className="stat-label">已出租</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">0</div>
              <div className="stat-label">空置中</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 