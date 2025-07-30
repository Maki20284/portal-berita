import { Routes, Route, Navigate} from 'react-router-dom';
import Login from './pages/auth/LoginForm';
import Register from './pages/auth/Register';
import Beranda from './pages/Beranda';
import AdminDashboard from './pages/dashboards/Admin';
import EditorDashboard from './pages/dashboards/Editor';
import PenulisDashboard from './pages/dashboards/Penulis';
import PembacaDashboard from './pages/dashboards/Pembaca';
import TambahBerita from './pages/penulis/TambahBerita';
import { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  console.log("Authenticated:", isAuthenticated);

  useEffect(() => {
    const handleStorage = () => {
      setIsAuthenticated(!!localStorage.getItem('token'));
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <Routes>

      <Route 
        path="/dashboard/penulis/tambah-berita" 
        element={<TambahBerita />
        } 
      />

      <Route
        path="/"
        element={
          isAuthenticated ? (
            (() => {
              const role = localStorage.getItem('role');
              switch (role) {
                case 'admin':
                  return <Navigate to="/dashboard/admin" />;
                case 'editor':
                  return <Navigate to="/dashboard/editor" />;
                case 'penulis':
                  return <Navigate to="/dashboard/penulis" />;
                case 'pembaca':
                default:
                  return <Navigate to="/beranda" />;
              }
            })()
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route
        path="/login"
        element={
          <Login onLogin={() => {setIsAuthenticated(true); // trigger re-render
}} />
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
