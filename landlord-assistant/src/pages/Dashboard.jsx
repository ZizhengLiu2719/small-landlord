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
    // 获取当前用户信息
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };
    getUser();
  }, []);

  const modules = [
    { id: 'properties', title: '🏠 房源管理', description: '管理您的房产信息', path: '/properties' },
    { id: 'tenants', title: '👤 租户管理', description: '租户信息与合同管理', path: '/tenants' },
    { id: 'rent', title: '💰 收租提醒', description: '租金收取与逾期提醒', path: '/rent' },
    { id: 'repair', title: '🛠 报修通道', description: '维修请求处理', path: '/repair' },
    { id: 'documents', title: '📄 文书导出', description: 'AI 生成各类文书', path: '/documents' },
    { id: 'reminders', title: '⏰ 智能提醒中心', description: '重要事项提醒', path: '/reminders' }
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  if (loading) {
    return <div className="loading">加载中...</div>;
  }

  return (
    <div className="dashboard">
      {/* 顶部欢迎栏 */}
      <div className="header">
        <div className="header-content">
          <div className="header-left">
            <h1 className="logo">SmartLandlord</h1>
          </div>
          <div className="header-right">
            <span className="welcome-text">
              👋 欢迎回来，{user?.email?.split('@')[0] || '用户'}
            </span>
            <button onClick={handleLogout} className="logout-btn">
              退出登录
            </button>
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
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
  