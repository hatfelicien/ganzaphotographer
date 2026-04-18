import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import { Save, Trash2, Plus } from 'lucide-react';
import './TabStyles.css';

function ServicesEditor() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  const fetchServices = async () => {
    const { data } = await supabase.from('services').select('*').order('id');
    setServices(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchServices(); }, []);

  const updateField = (id, field, value) => {
    setServices(services.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    for (const s of services) {
      await supabase.from('services').upsert({ id: s.id, title: s.title, description: s.description, price: s.price });
    }
    setSaving(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  const handleAdd = async () => {
    const { data } = await supabase.from('services').insert({ title: 'New Service', description: '', price: 'From $0' }).select().single();
    if (data) setServices([...services, data]);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this service?')) return;
    await supabase.from('services').delete().eq('id', id);
    setServices(services.filter(s => s.id !== id));
  };

  if (loading) return <div className="tab-content"><p className="loading-text">Loading...</p></div>;

  return (
    <div className="tab-content">
      <h2>Services Manager</h2>
      <form onSubmit={handleSave}>
        {services.map(s => (
          <div key={s.id} className="admin-card service-row">
            <div className="form-row">
              <div className="field">
                <label>Title</label>
                <input type="text" value={s.title} onChange={e => updateField(s.id, 'title', e.target.value)} />
              </div>
              <div className="field field-sm">
                <label>Price</label>
                <input type="text" value={s.price} onChange={e => updateField(s.id, 'price', e.target.value)} />
              </div>
            </div>
            <div className="field">
              <label>Description</label>
              <textarea rows="2" value={s.description} onChange={e => updateField(s.id, 'description', e.target.value)} />
            </div>
            <button type="button" className="delete-btn icon-only" onClick={() => handleDelete(s.id)}>
              <Trash2 size={16} />
            </button>
          </div>
        ))}
        {success && <p className="success-msg">Saved successfully!</p>}
        <div className="btn-row">
          <button type="button" className="admin-btn outline" onClick={handleAdd}><Plus size={16} /> Add Service</button>
          <button type="submit" className="admin-btn" disabled={saving}><Save size={16} /> {saving ? 'Saving...' : 'Save All'}</button>
        </div>
      </form>
    </div>
  );
}

export default ServicesEditor;
