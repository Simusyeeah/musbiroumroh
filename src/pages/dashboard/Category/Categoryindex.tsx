import { Link } from "react-router-dom";

export default function CategoryIndex() {
  const paketList = [
    "Umroh Reguler",
    "Umroh Plus Turki",
    "Umroh Ramadhan",
    "Umroh VIP"
  ];

  return (
    <div className="p-6">
      {/* 🔥 GANTI JUDUL */}
      <h1 className="text-3xl font-bold mb-2">Paket</h1>

      <h2 className="text-gray-600 mb-6">
        Daftar Paket Biromus
      </h2>

      {/* tombol tambah */}
      <Link
        to="/dashboard/category/create" // 🔥 tetap category (biar sidebar aman)
        className="inline-block mb-6 px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        + Tambah Paket
      </Link>

      {/* list paket */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {paketList.map((item, index) => (
          <div
            key={index}
            className="border-2 border-red-600 rounded-xl p-6 text-center shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-red-600">
              {item}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}