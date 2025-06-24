import { useNavigate } from 'react-router-dom';
import './DocumentsPage.css';

export default function DocumentsPage() {
  const navigate = useNavigate();

  const documentTypes = [
    { id: 'rent-increase', title: '📈 Rent Increase Notice', description: 'Generate rent increase notification' },
    { id: 'eviction', title: '🚪 Eviction Notice', description: 'Generate tenant eviction notice' },
    { id: 'rent-reminder', title: '💰 Rent Reminder', description: 'Generate rent payment reminder' },
    { id: 'contract', title: '📋 Lease Agreement', description: 'Generate standard lease agreement' },
    { id: 'maintenance', title: '🔧 Maintenance Notice', description: 'Generate maintenance schedule notice' },
    { id: 'custom', title: '✏️ Custom Document', description: 'Generate custom format documents' }
  ];

  return (
    <div className="documents-page">
      <div className="page-header">
        <div className="header-content">
          <div className="header-left">
            <button onClick={() => navigate('/dashboard')} className="back-btn">
              ← Back
            </button>
            <h1 className="page-title">📄 Document Generation</h1>
          </div>
          <div className="header-right">
            <button className="add-btn">📚 Template Library</button>
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
                <button className="generate-btn">AI Generate</button>
              </div>
            ))}
          </div>

          <div className="documents-sidebar">
            <div className="recent-documents">
              <h3>Recently Generated Documents</h3>
              <div className="empty-state">
                <div className="empty-icon">📄</div>
                <p>No documents generated yet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 