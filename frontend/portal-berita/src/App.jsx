import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/LoginForm';
import Register from './pages/auth/Register';
import Beranda from './pages/Beranda';
import AdminDashboard from './pages/dashboards/Admin';
import EditorDashboard from './pages/dashboards/Editor';
import PenulisDashboard from './pages/dashboards/Penulis';
import PembacaDashboard from './pages/dashboards/Pembaca';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? <Navigate to="/beranda" /> : <Navigate to="/login" />
        }
      />
      <Route
        path="/login"
        element={
          isAuthenticated ? <Navigate to="/beranda" /> : <Login />
        }
      />
      <Route path="/register" element={<Register />} />
      <Route
        path="/beranda"
        element={
          isAuthenticated ? <Beranda /> : <Navigate to="/login" />
        }
      />

      <Route
        path="/dashboard/admin"
        element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/login" />}
      />
      <Route
        path="/dashboard/editor"
        element={isAuthenticated ? <EditorDashboard /> : <Navigate to="/login" />}
      />
      <Route
        path="/dashboard/penulis"
        element={isAuthenticated ? <PenulisDashboard /> : <Navigate to="/login" />}
      />
      <Route
        path="/dashboard/pembaca"
        element={isAuthenticated ? <PembacaDashboard /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default App;
