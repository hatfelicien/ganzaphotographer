import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import { Trash2, Upload } from 'lucide-react';
import './TabStyles.css';

const CATEGORIES = ['wedding', 'portrait', 'family', 'event'];

function GalleryManager() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({ title: '', category: 'wedding' });
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const fetchImages = async () => {
    setLoading(true);
    const { data } = await supabase.from('gallery').select('*').order('created_at', { ascending: false });
    setImages(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchImages(); }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return setError('Please select an image.');
    setUploading(true);
    setError('');

    const ext = file.name.split('.').pop();
    const fileName = `${Date.now()}.${ext}`;

    const { error: uploadError } = await supabase.storage.from('gallery').upload(fileName, file);
    if (uploadError) { setError(uploadError.message); setUploading(false); return; }

    const { data: { publicUrl } } = supabase.storage.from('gallery').getPublicUrl(fileName);

    const { error: dbError } = await supabase.from('gallery').insert({
      title: form.title,
      category: form.category,
      image_url: publicUrl,
      file_name: fileName,
    });

    if (dbError) setError(dbError.message);
    else { setForm({ title: '', category: 'wedding' }); setFile(null); e.target.reset(); fetchImages(); }
    setUploading(false);
  };

  const handleDelete = async (id, fileName) => {
    if (!window.confirm('Delete this image?')) return;
    await supabase.storage.from('gallery').remove([fileName]);
    await supabase.from('gallery').delete().eq('id', id);
    fetchImages();
  };

  return (
    <div className="tab-content">
      <h2>Gallery Manager</h2>

      <div className="admin-card">
        <h3>Upload New Image</h3>
        <form onSubmit={handleUpload} className="upload-form">
          <div className="form-row">
            <div className="field">
              <label>Title</label>
              <input type="text" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="Image title" required />
            </div>
            <div className="field">
              <label>Category</label>
              <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
                {CATEGORIES.map(c => <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>)}
              </select>
            </div>
          </div>
          <div className="field">
            <label>Image File</label>
            <input type="file" accept="image/*" onChange={e => setFile(e.target.files[0])} required />
          </div>
          {error && <p className="error-msg">{error}</p>}
          <button type="submit" className="admin-btn" disabled={uploading}>
            <Upload size={16} /> {uploading ? 'Uploading...' : 'Upload Image'}
          </button>
        </form>
      </div>

      <div className="admin-card">
        <h3>All Images ({images.length})</h3>
        {loading ? <p className="loading-text">Loading...</p> : (
          <div className="image-grid">
            {images.map(img => (
              <div key={img.id} className="image-card">
                <img src={img.image_url} alt={img.title} />
                <div className="image-info">
                  <span className="image-title">{img.title}</span>
                  <span className="image-category">{img.category}</span>
                </div>
                <button className="delete-btn" onClick={() => handleDelete(img.id, img.file_name)}>
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default GalleryManager;
