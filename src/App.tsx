import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Login } from "./pages/auth/Login";
import { Dashboard } from "./pages/Dashboard";
import { Profile } from "./pages/Profile";
import { ShippingComps } from "./pages/ShippingComps";
import { ShippingCompsCreate } from "./pages/ShippingComps/Create";
import { ShippingCompsEdit } from "./pages/ShippingComps/Edit";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          {/* Public Page */}
          <Route path="/login" element={<Login />} />
          <Route path="/user/:id" element={<Profile />} />

          {/* Auth Page */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/shipping" element={<ShippingComps />} />
          <Route path="/shipping/create" element={<ShippingCompsCreate />} />
          <Route path="/shipping/:id" element={<ShippingCompsEdit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
