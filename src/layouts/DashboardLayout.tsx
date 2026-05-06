import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function DashboardLayout() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate(); // 👈 tambah ini

  const handleLogout = () => {
    console.log("Logout clicked"); // opsional debug
    logout();
    navigate("/login"); // 👈 INI YANG PENTING
  };

  return (
    <div className="flex w-full min-h-screen">
      {/* kiri */}
      <div className="bg-green-200 w-64 flex flex-col justify-between p-4 relative z-10">
        
        <div>
          <h1 className="font-bold text-2xl text-center text-green-950">
            Biromus
          </h1>
        </div>

        <div>
          <ul className="flex flex-col gap-6 w-full">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/dashboard/category">Category</Link>
            </li>
            <li>
              <Link to="/dashboard/pembicara">Pembicara</Link>
            </li>
            <li>
              <Link to="/dashboard/event">Event</Link>
            </li>
          </ul>
        </div>

        <div>
          <button
            type="button"
            onClick={handleLogout}
            className="w-full p-4 bg-red-800 text-white font-semibold rounded-2xl cursor-pointer hover:bg-red-900"
          >
            Logout
          </button>
        </div>

      </div>

      {/* kanan */}
      <div className="bg-blue-200 p-4 w-full">
        <Outlet />
      </div>
    </div>
  );
}