import { useNavigate } from 'react-router-dom';
import './RemindersPage.css';

export default function RemindersPage() {
  const navigate = useNavigate();

  const reminderTypes = [
    { id: 'rent-due', title: '💰 租金到期', count: 0, color: '#ef4444' },
    { id: 'contract-expiry', title: '📋 合同到期', count: 0, color: '#f59e0b' },
    { id: 'maintenance', title: '🔧 维修提醒', count: 0, color: '#3b82f6' },
    { id: 'inspection', title: '🔍 房屋检查', count: 0, color: '#10b981' }
  ];

  return (
    <div className="reminders-page">
      <div className="page-header">
        <div className="header-content">
          <div className="header-left">
            <button onClick={() => navigate('/dashboard')} className="back-btn">
              ← 返回
            </button>
            <h1 className="page-title">⏰ 智能提醒中心</h1>
          </div>
          <div className="header-right">
            <button className="add-btn">+ 添加提醒</button>
          </div>
        </div>
      </div>

      <div className="page-content">
        <div className="reminders-container">
          <div className="reminders-main">
            {/* 提醒类型概览 */}
            <div className="reminder-overview">
              <h2>提醒概览</h2>
              <div className="reminder-cards">
                {reminderTypes.map((type) => (
                  <div key={type.id} className="reminder-card">
                    <div className="reminder-icon" style={{ color: type.color }}>
                      {type.title.split(' ')[0]}
                    </div>
                    <div className="reminder-info">
                      <h3>{type.title.split(' ').slice(1).join(' ')}</h3>
                      <div className="reminder-count">{type.count} 项</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 提醒列表 */}
            <div className="reminders-list">
              <h2>最近提醒</h2>
              <div className="empty-state">
                <div className="empty-icon">⏰</div>
                <h3>暂无提醒</h3>
                <p>所有事项都已按时处理完成</p>
              </div>
            </div>
          </div>

          <div className="reminders-sidebar">
            <div className="upcoming-reminders">
              <h3>即将到期</h3>
              <div className="empty-state">
                <div className="empty-icon">📅</div>
                <p>暂无即将到期的提醒</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 