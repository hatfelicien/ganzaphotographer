import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import { Save } from 'lucide-react';
import './TabStyles.css';

function HeroEditor() {
  const [form, setForm] = useState({ title: '', subtitle: '' });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase.from('site_content').select('*').eq('section', 'hero').single();
      if (data) setForm({ title: data.title || '', subtitle: data.subtitle || '' });
      setLoading(false);
    };
    fetch();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    await supabase.from('site_content').upsert({ section: 'hero', title: form.title, subtitle: form.subtitle }, { onConflict: 'section' });
    setSaving(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  if (loading) return <div className="tab-content"><p className="loading-text">Loading...</p></div>;

  return (
    <div className="tab-content">
      <h2>Hero Section</h2>
      <div className="admin-card">
        <h3>Edit Hero Content</h3>
        <form onSubmit={handleSave}>
          <div className="field">
            <label>Main Title</label>
            <input type="text" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="Capturing Life's Beautiful Moments" required />
          </div>
          <div className="field">
            <label>Subtitle</label>
            <input type="text" value={form.subtitle} onChange={e => setForm({ ...form, subtitle: e.target.value })} placeholder="Professional Photography Services..." required />
          </div>
          {success && <p className="success-msg">Saved successfully!</p>}
          <button type="submit" className="admin-btn" disabled={saving}>
            <Save size={16} /> {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default HeroEditor;
