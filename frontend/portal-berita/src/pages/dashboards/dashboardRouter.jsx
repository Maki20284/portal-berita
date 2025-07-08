import React from 'react';
import { Navigate } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import EditorDashboard from './EditorDashboard';
import PenulisDashboard from './PenulisDashboard';
import PembacaDashboard from './PembacaDashboard';

export default function DashboardRouter() {
  const role = localStorage.getItem('role');

  if (!role) return <Navigate to="/login" />;

  switch (role) {
    case 'admin':
      return <AdminDashboard />;
    case 'editor':
      return <EditorDashboard />;
    case 'penulis':
      return <PenulisDashboard />;
    case 'pembaca':
      return <PembacaDashboard />;
    default:
      return <Navigate to="/login" />;
  }
}
