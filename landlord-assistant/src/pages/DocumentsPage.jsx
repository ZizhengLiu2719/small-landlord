import { useNavigate } from 'react-router-dom';
import './DocumentsPage.css';

export default function DocumentsPage() {
  const navigate = useNavigate();

  const documentTypes = [
    { id: 'rent-increase', title: '📈 涨租通知', description: '生成租金上涨通知书' },
    { id: 'eviction', title: '🚪 退房通知', description: '生成租户退房通知书' },
    { id: 'rent-reminder', title: '💰 催租通知', description: '生成租金催缴通知书' },
    { id: 'contract', title: '📋 租赁合同', description: '生成标准租赁合同' },
    { id: 'maintenance', title: '🔧 维修通知', description: '生成维修安排通知书' },
    { id: 'custom', title: '✏️ 自定义文书', description: '生成自定义格式文书' }
  ];

  return (
    <div className="documents-page">
      <div className="page-header">
        <div className="header-content">
          <div className="header-left">
            <button onClick={() => navigate('/dashboard')} className="back-btn">
              ← 返回
            </button>
            <h1 className="page-title">📄 文书导出</h1>
          </div>
          <div className="header-right">
            <button className="add-btn">📚 文书模板库</button>
          </div>
        </div>
      </div>

      <div className="page-content">
        <div className="documents-container">
          <div className="documents-grid">
            {documentTypes.map((docType) => (
              <div key={docType.id} className="document-card">
                <div className="document-icon">{docType.title.split(' ')[0]}</div>
                <h3 className="document-title">{docType.title.split(' ').slice(1).join(' ')}</h3>
                <p className="document-description">{docType.description}</p>
                <button className="generate-btn">AI 生成</button>
              </div>
            ))}
          </div>

          <div className="documents-sidebar">
            <div className="recent-documents">
              <h3>最近生成的文书</h3>
              <div className="empty-state">
                <div className="empty-icon">📄</div>
                <p>暂无生成记录</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 