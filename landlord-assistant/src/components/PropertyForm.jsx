import React, { useState } from 'react';
import { uploadFile } from '../api/storage';

const defaultState = {
  address: '',
  area: '',
  rent: '',
  status: 'vacant',
  contract_end_date: '',
  description: '',
  photos: [],
  contract_docs: [],
  notes: { repairs: [], tenants: [] },
};

export default function PropertyForm({ initial, onSubmit, onCancel }) {
  const [form, setForm] = useState(initial || defaultState);
  const [loading, setLoading] = useState(false);
  const [photoFiles, setPhotoFiles] = useState([]);
  const [docFiles, setDocFiles] = useState([]);
  const [repairInput, setRepairInput] = useState('');
  const [tenantInput, setTenantInput] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  function handlePhotoChange(e) {
    setPhotoFiles([...e.target.files]);
  }
  function handleDocChange(e) {
    setDocFiles([...e.target.files]);
  }

  function handleAddRepair() {
    if (repairInput.trim()) {
      setForm(f => ({ ...f, notes: { ...f.notes, repairs: [...(f.notes.repairs || []), repairInput] } }));
      setRepairInput('');
    }
  }
  function handleRemoveRepair(idx) {
    setForm(f => ({ ...f, notes: { ...f.notes, repairs: f.notes.repairs.filter((_, i) => i !== idx) } }));
  }
  function handleAddTenant() {
    if (tenantInput.trim()) {
      setForm(f => ({ ...f, notes: { ...f.notes, tenants: [...(f.notes.tenants || []), tenantInput] } }));
      setTenantInput('');
    }
  }
  function handleRemoveTenant(idx) {
    setForm(f => ({ ...f, notes: { ...f.notes, tenants: f.notes.tenants.filter((_, i) => i !== idx) } }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    let photoUrls = form.photos || [];
    let docUrls = form.contract_docs || [];
    // 上传图片
    if (photoFiles.length) {
      const uploaded = await Promise.all(photoFiles.map(f => uploadFile(f, 'property-photos')));
      photoUrls = [...photoUrls, ...uploaded];
    }
    // 上传合同
    if (docFiles.length) {
      const uploaded = await Promise.all(docFiles.map(f => uploadFile(f, 'property-contracts')));
      docUrls = [...docUrls, ...uploaded];
    }
    try {
      // ...上传逻辑
      await onSubmit({ ...form, photos: photoUrls, contract_docs: docUrls });
    } catch (err) {
      alert('Failed to save: ' + (err.message || JSON.stringify(err)));
    }  
     setLoading(false);
  }

  return (
    <form className="property-form" onSubmit={handleSubmit}>
      <label>
        Address
        <input name="address" value={form.address} onChange={handleChange} required />
      </label>
      <label>
        Area (㎡)
        <input name="area" type="number" value={form.area} onChange={handleChange} required />
      </label>
      <label>
        Rent ($)
        <input name="rent" type="number" value={form.rent} onChange={handleChange} required />
      </label>
      <label>
        Status
        <select name="status" value={form.status} onChange={handleChange}>
          <option value="vacant">Vacant</option>
          <option value="rented">Rented</option>
          <option value="listing">Listing</option>
        </select>
      </label>
      <label>
        Contract End Date
        <input name="contract_end_date" type="date" value={form.contract_end_date} onChange={handleChange} />
      </label>
      <label>
        Description
        <textarea name="description" value={form.description} onChange={handleChange} />
      </label>
      <label>
        Photos
        <input type="file" accept="image/*" multiple onChange={handlePhotoChange} />
        <div className="photo-preview-row">
          {(form.photos || []).map((url, i) => (
            <img key={i} src={url} alt="property" className="photo-thumb" />
          ))}
        </div>
      </label>
      <label>
        Contract Documents
        <input type="file" accept="application/pdf,.doc,.docx" multiple onChange={handleDocChange} />
        <ul className="doc-list">
          {(form.contract_docs || []).map((url, i) => (
            <li key={i}><a href={url} target="_blank" rel="noopener noreferrer">Document {i+1}</a></li>
          ))}
        </ul>
      </label>
      <label>
        Repairs
        <div className="note-row">
          <input value={repairInput} onChange={e => setRepairInput(e.target.value)} placeholder="Add repair record..." />
          <button type="button" onClick={handleAddRepair}>Add</button>
        </div>
        <ul className="note-list">
          {(form.notes.repairs || []).map((r, i) => (
            <li key={i}>{r} <button type="button" onClick={() => handleRemoveRepair(i)}>×</button></li>
          ))}
        </ul>
      </label>
      <label>
        Historical Tenants
        <div className="note-row">
          <input value={tenantInput} onChange={e => setTenantInput(e.target.value)} placeholder="Add tenant info..." />
          <button type="button" onClick={handleAddTenant}>Add</button>
        </div>
        <ul className="note-list">
          {(form.notes.tenants || []).map((t, i) => (
            <li key={i}>{t} <button type="button" onClick={() => handleRemoveTenant(i)}>×</button></li>
          ))}
        </ul>
      </label>
      <div className="form-actions">
        <button type="submit" disabled={loading}>{loading ? 'Saving...' : 'Save'}</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
} 