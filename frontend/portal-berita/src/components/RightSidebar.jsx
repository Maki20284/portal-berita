export default function RightSidebar() {
  return (
    <aside className="w-full md:w-72 bg-white p-4 shadow">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Cari artikel, feedback, komentar"
          className="w-full border px-3 py-2 rounded focus:ring focus:ring-blue-300"
        />
      </div>

      <div className="mb-6">
        <h3 className="font-bold mb-2">Top Komentar</h3>
        <ul className="space-y-2">
          {[1, 2, 3, 4].map((n) => (
            <li key={n} className="flex items-center space-x-2 text-sm">
              <img src="/user.jpg" alt="" className="w-8 h-8 rounded-full" />
              <div>
                <p className="font-semibold">Sarah Wyper</p>
                <p className="text-gray-500">7 jam lalu</p>
                <p className="truncate">Lorem ipsum dolor sit amet...</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-bold mb-2">Status</h3>
        <div className="border rounded p-2">
          <img src="/artikel.jpg" alt="" className="w-full h-32 object-cover rounded" />
          <p className="font-semibold mt-2">Lorem ipsum dolor sit amet</p>
          <span className="text-green-500 text-sm">Diterima</span>
        </div>
      </div>
    </aside>
  );
}
