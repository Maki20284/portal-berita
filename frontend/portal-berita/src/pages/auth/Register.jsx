import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('pembaca');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', {
        nama,
        email,
        password,
        role,
      });
      alert('Registrasi berhasil!');
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || 'Gagal registrasi');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-teal-500">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Portal Berita Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Nama"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="penulis">Penulis</option>
            <option value="pembaca">Pembaca</option>
          </select>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition"
          >
            Daftar
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Sudah punya akun?{' '}
          <Link to="/login" className="text-green-500 hover:underline">
            Login di sini
          </Link>
        </p>
      </div>
    </div>
  );
}
