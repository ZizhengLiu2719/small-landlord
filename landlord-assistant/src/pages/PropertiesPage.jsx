import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProperty, deleteProperty, fetchProperties, updateProperty } from '../api/properties';
import Modal from '../components/Modal';
import PropertyCard from '../components/PropertyCard';
import PropertyForm from '../components/PropertyForm';
import './PropertiesPage.css';

export default function PropertiesPage() {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editProperty, setEditProperty] = useState(null);

  useEffect(() => {
    loadProperties();
  }, []);

  async function loadProperties() {
    setLoading(true);
    try {
      const data = await fetchProperties();
      setProperties(data || []);
    } catch (e) {
      alert('Failed to load properties');
    }
    setLoading(false);
  }

  function handleAddClick() {
    setEditProperty(null);
    setModalOpen(true);
  }

  function handleEdit(property) {
    setEditProperty(property);
    setModalOpen(true);
  }

  async function handleDelete(id) {
    if (window.confirm('Delete this property?')) {
      await deleteProperty(id);
      loadProperties();
    }
  }

  async function handleStatusChange(id, status) {
    await updateProperty(id, { status });
    loadProperties();
  }

  async function handleFormSubmit(form) {
    if (editProperty) {
      await updateProperty(editProperty.id, form);
    } else {
      await addProperty(form);
    }
    setModalOpen(false);
    loadProperties();
  }

  function handleModalClose() {
    setModalOpen(false);
  }

  // 统计
  const total = properties.length;
  const rented = properties.filter(p => p.status === 'rented').length;
  const vacant = properties.filter(p => p.status === 'vacant').length;

  return (
    <div className="properties-page">
      {/* Page header */}
      <div className="page-header">
        <div className="header-content">
          <div className="header-left">
            <button onClick={() => navigate('/dashboard')} className="back-btn">
              ← Back
            </button>
            <h1 className="page-title">🏠 Property Management</h1>
          </div>
          <div className="header-right">
            <button className="add-btn" onClick={handleAddClick}>+ Add Property</button>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="page-content">
        <div className="properties-container">
          {/* Properties list */}
          <div className="properties-list">
            {loading ? (
              <div className="loading">Loading...</div>
            ) : properties.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">🏠</div>
                <h3>No Properties</h3>
                <p>Click "Add Property" above to start managing your properties</p>
              </div>
            ) : (
              properties.map(property => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onStatusChange={handleStatusChange}
                />
              ))
            )}
          </div>

          {/* Properties statistics */}
          <div className="properties-stats">
            <div className="stat-card">
              <div className="stat-number">{total}</div>
              <div className="stat-label">Total Properties</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{rented}</div>
              <div className="stat-label">Rented</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{vacant}</div>
              <div className="stat-label">Vacant</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for add/edit */}
      <Modal open={modalOpen} onClose={handleModalClose}>
        <PropertyForm
          initial={editProperty}
          onSubmit={handleFormSubmit}
          onCancel={handleModalClose}
        />
      </Modal>
    </div>
  );
} 