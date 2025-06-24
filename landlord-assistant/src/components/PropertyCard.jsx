import React, { useState } from 'react';
import './PropertyCard.css';

export default function PropertyCard({ property, onEdit, onDelete, onStatusChange }) {
  const [imgIdx, setImgIdx] = useState(0);
  const photos = property.photos || [];
  const docs = property.contract_docs || [];
  const repairs = (property.notes && property.notes.repairs) || [];
  const tenants = (property.notes && property.notes.tenants) || [];

  return (
    <div className="property-card">
      {/* 图片轮播 */}
      {photos.length > 0 && (
        <div className="property-photo-carousel">
          <img src={photos[imgIdx]} alt="property" className="property-photo" />
          {photos.length > 1 && (
            <div className="carousel-controls">
              <button onClick={() => setImgIdx((imgIdx - 1 + photos.length) % photos.length)}>&lt;</button>
              <span>{imgIdx + 1}/{photos.length}</span>
              <button onClick={() => setImgIdx((imgIdx + 1) % photos.length)}>&gt;</button>
            </div>
          )}
        </div>
      )}
      <div className="property-main">
        <div className="property-header">
          <h3>{property.address}</h3>
          <span className={`status-badge status-${property.status}`}>{property.status}</span>
        </div>
        <div className="property-info">
          <div>Area: {property.area} ㎡</div>
          <div>Rent: ${property.rent}</div>
          <div>Contract End: {property.contract_end_date || '-'}</div>
        </div>
        <div className="property-actions">
          <button onClick={() => onEdit(property)}>Edit</button>
          <button onClick={() => onDelete(property.id)}>Delete</button>
          <select value={property.status} onChange={e => onStatusChange(property.id, e.target.value)}>
            <option value="vacant">Vacant</option>
            <option value="rented">Rented</option>
            <option value="listing">Listing</option>
          </select>
        </div>
        {/* 合同文档下载 */}
        {docs.length > 0 && (
          <div className="property-docs">
            <span>Contracts: </span>
            {docs.map((url, i) => (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer">Doc {i+1}</a>
            ))}
          </div>
        )}
        {/* 维修记录 */}
        {repairs.length > 0 && (
          <div className="property-repairs">
            <span>Repairs:</span>
            <ul>{repairs.map((r, i) => <li key={i}>{r}</li>)}</ul>
          </div>
        )}
        {/* 历史租户 */}
        {tenants.length > 0 && (
          <div className="property-tenants">
            <span>Historical Tenants:</span>
            <ul>{tenants.map((t, i) => <li key={i}>{t}</li>)}</ul>
          </div>
        )}
      </div>
      {property.description && <div className="property-desc">{property.description}</div>}
    </div>
  );
} 