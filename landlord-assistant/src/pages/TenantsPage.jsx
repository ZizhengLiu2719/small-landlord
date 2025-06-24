import { useNavigate } from 'react-router-dom';
import './TenantsPage.css';

export default function TenantsPage() {
  const navigate = useNavigate();

  return (
    <div className="tenants-page">
      {/* 页面头部 */}
      <div className="page-header">
        <div className="header-content">
          <div className="header-left">
            <button onClick={() => navigate('/dashboard')} className="back-btn">
              ← 返回
            </button>
            <h1 className="page-title">👤 租户管理</h1>
          </div>
          <div className="header-right">
            <button className="add-btn">+ 添加租户</button>
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="page-content">
        <div className="tenants-container">
          {/* 租户列表 */}
          <div className="tenants-list">
            <div className="empty-state">
              <div className="empty-icon">👤</div>
              <h3>暂无租户</h3>
              <p>点击上方"添加租户"按钮开始管理租户信息</p>
            </div>
          </div>

          {/* 租户统计 */}
          <div className="tenants-stats">
            <div className="stat-card">
              <div className="stat-number">0</div>
              <div className="stat-label">总租户</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">0</div>
              <div className="stat-label">活跃租户</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">0</div>
              <div className="stat-label">合同到期</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 