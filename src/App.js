import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { supabase } from './supabaseClient';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Login from './admin/pages/Login';
import Dashboard from './admin/pages/Dashboard';

import './App.css';

function PublicSite() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

function AdminRoute({ session }) {
  if (session === undefined) return null; // still loading
  return session ? <Dashboard /> : <Login />;
}

function App() {
  const [session, setSession] = useState(undefined);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => setSession(session));
    return () => subscription.unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicSite />} />
        <Route path="/admin" element={<AdminRoute session={session} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
