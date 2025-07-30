import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.role);
      localStorage.setItem('nama', res.data.nama);
      
      switch (res.data.role) {
      case 'admin':
        navigate('/dashboard/admin');
        break;
      case 'editor':
        navigate('/dashboard/editor');
        break;
      case 'penulis':
        navigate('/dashboard/penulis');
        break;
      case 'pembaca':
      default:
        navigate('/beranda');
        break;
    }

    if (onLogin) {
      onLogin();
    }

    console.log("Login berhasil. Role:", res.data.role);

    } catch (err) {
      console.error('LOGIN ERROR', err);
      console.error('SERVER RESPONSE', err.response?.data);
      alert(err.response?.data?.message || 'Gagal login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Portal Berita Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Belum punya akun?{' '}
          <Link to="/register" className="text-blue-500 hover:underline">
            Daftar di sini
          </Link>
        </p>
      </div>
    </div>
  );
}
