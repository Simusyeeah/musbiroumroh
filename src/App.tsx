import { BrowserRouter, Routes, Route } from "react-router-dom";

import Kontak from "./pages/kontak";
import Paket from "./pages/Paket";
import Home from "./pages/Home";

import MainLayout from "./layouts/MainLayouts";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";

import ProtectedRoute from "./components/ProtectedRoute";

// Dashboard Pages
import DashboardIndex from "./pages/dashboard/dashboardindex";
import CategoryIndex from "./pages/dashboard/Category/Categoryindex";
import CategoryCreate from "./pages/dashboard/Category/CategoryCreate";
import PembicaraIndex from "./pages/dashboard/pembicara/PembicaraIndex";
import PembicaraCreate from "./pages/dashboard/pembicara/PembicaraCreate";
import EventIndex from "./pages/dashboard/event/EventIndex";
import EventCreate from "./pages/dashboard/event/EventCreate";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🌐 PUBLIC ROUTES */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/paket" element={<Paket />} />
        </Route>

        {/* 🔐 AUTH ROUTES */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Route>

        {/* 📊 DASHBOARD (PROTECTED) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardIndex />} />

          {/* Category */}
          <Route path="category" element={<CategoryIndex />} />
          <Route path="category/create" element={<CategoryCreate />} />

          {/* Pembicara */}
          <Route path="pembicara" element={<PembicaraIndex />} />
          <Route path="pembicara/create" element={<PembicaraCreate />} />

          {/* Event */}
          <Route path="event" element={<EventIndex />} />
          <Route path="event/create" element={<EventCreate />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;