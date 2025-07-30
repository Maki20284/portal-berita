export default function BeritaList({ berita }) {
  return (
    <div className="my-6">
      <h2 className="text-xl font-bold mb-4">BeritaKu</h2>
      <div className="space-y-4">
        {berita.map((item, idx) => (
          <div key={idx} className="flex bg-white rounded shadow overflow-hidden">
            <img src={item.image} alt="" className="w-48 h-32 object-cover" />
            <div className="p-4 flex flex-col justify-between">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-blue-500">{item.category} • {item.timeAgo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
