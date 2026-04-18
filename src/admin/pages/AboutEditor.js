import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import { Save } from 'lucide-react';
import './TabStyles.css';

function AboutEditor() {
  const [form, setForm] = useState({ name: '', tagline: '', bio1: '', bio2: '', clients: '', events: '', awards: '' });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase.from('site_content').select('*').eq('section', 'about').single();
      if (data?.content) setForm(data.content);
      setLoading(false);
    };
    fetch();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    await supabase.from('site_content').upsert({ section: 'about', content: form }, { onConflict: 'section' });
    setSaving(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  if (loading) return <div className="tab-content"><p className="loading-text">Loading...</p></div>;

  return (
    <div className="tab-content">
      <h2>About Section</h2>
      <div className="admin-card">
        <h3>Edit About Content</h3>
        <form onSubmit={handleSave}>
          <div className="form-row">
            <div className="field">
              <label>Photographer Name</label>
              <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Hi, I'm Alex Johnson" />
            </div>
            <div className="field">
              <label>Tagline</label>
              <input type="text" value={form.tagline} onChange={e => setForm({ ...form, tagline: e.target.value })} placeholder="Professional Photographer with 10+ Years" />
            </div>
          </div>
          <div className="field">
            <label>Bio Paragraph 1</label>
            <textarea rows="3" value={form.bio1} onChange={e => setForm({ ...form, bio1: e.target.value })} placeholder="I specialize in capturing life's most precious moments..." />
          </div>
          <div className="field">
            <label>Bio Paragraph 2</label>
            <textarea rows="3" value={form.bio2} onChange={e => setForm({ ...form, bio2: e.target.value })} placeholder="My approach is simple: tell your story authentically..." />
          </div>
          <h4 style={{ margin: '16px 0 12px', color: '#374151' }}>Stats</h4>
          <div className="form-row three-col">
            <div className="field">
              <label>Happy Clients</label>
              <input type="text" value={form.clients} onChange={e => setForm({ ...form, clients: e.target.value })} placeholder="500+" />
            </div>
            <div className="field">
              <label>Events Covered</label>
              <input type="text" value={form.events} onChange={e => setForm({ ...form, events: e.target.value })} placeholder="1000+" />
            </div>
            <div className="field">
              <label>Awards Won</label>
              <input type="text" value={form.awards} onChange={e => setForm({ ...form, awards: e.target.value })} placeholder="15+" />
            </div>
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

export default AboutEditor;
