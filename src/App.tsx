import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Kontak from "./pages/kontak";
import Paket from "./pages/Paket";
import MainLayout from "./layouts/MainLayouts";
import RegisterForm from "./pages/RegisterForm";
import Home from "./pages/Home";
// import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthLayout from "./layouts/AuthLayout";
import LoginForm from "./pages/LoginForm";

function App() {
  return (
    <BrowserRouter>

        <Routes>
          <Route element= {<MainLayout/>}>
              <Route path="/" element={<Home />} />   
              <Route path="/kontak" element={<Kontak />} />
              <Route path = "/Paket" element={<Paket/>}/>
             
              
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
          </Route> 

          <Route element = {<AuthLayout/>}>
                <Route path="/register" element={<RegisterForm/>}></Route>
                <Route path="/login" element={<LoginForm/>}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;