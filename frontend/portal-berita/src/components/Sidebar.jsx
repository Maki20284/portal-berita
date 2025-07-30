import { FaHome, FaUser, FaFileAlt, FaCog, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BASE_URL = 'http://localhost:5000';  // Sesuaikan port backendmu

export default function Sidebar({ onLogout, nama, email, foto, children }) {
  // Handle foto kosong
  const fotoUrl = foto
    ? `${BASE_URL}${foto}`
    : '/user-placeholder.png';

  return (
    <div className="w-64 bg-white shadow h-screen p-4 flex flex-col">
      <div className="text-center mb-4">
        <img
          src={fotoUrl}
          alt="profile"
          className="w-24 h-24 rounded-full mx-auto object-cover border"
        />
        <h2 className="font-bold mt-2">{nama || 'Nama Pengguna'}</h2>
        <p className="text-gray-500 text-sm">{email || 'email@example.com'}</p>
      </div>

      {children}

      <nav className="flex-1 mt-6">
        <ul className="space-y-3">
          <li>
            <Link to="/" className="flex items-center space-x-2 hover:text-blue-500">
              <FaHome /> <span>Beranda</span>
            </Link>
          </li>
          <li className="flex items-center space-x-2 hover:text-blue-500 cursor-pointer">
            <FaUser /> <span>Akun</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-blue-500 cursor-pointer">
            <FaFileAlt /> <span>BeritaKu</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-blue-500 cursor-pointer">
            <FaCog /> <span>Pengaturan</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-blue-500 cursor-pointer">
            <FaQuestionCircle /> <span>FAQ</span>
          </li>
        </ul>
      </nav>

      <button
        onClick={onLogout}
        className="flex items-center space-x-2 text-red-500 mt-4 hover:text-red-600"
      >
        <FaSignOutAlt /> <span>Keluar</span>
      </button>
    </div>
  );
}
