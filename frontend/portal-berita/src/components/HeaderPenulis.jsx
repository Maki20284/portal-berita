export default function Header({ nama }) {
  return (
    <header className="border-b p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Dashboard Penulis</h1>
      <p className="text-gray-500">Selamat Datang, {nama}!</p>
    </header>
  );
}
