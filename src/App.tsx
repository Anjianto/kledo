import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AdminLayout } from "./components/Layout/Admin";

import { Login } from "./pages/auth/Login";
import { Dashboard } from "./pages/Dashboard";
import { Profile } from "./pages/Profile";
import { Public } from "./pages/Public";
import { ShippingComps } from "./pages/ShippingComps";
import { ShippingCompsModify } from "./pages/ShippingComps/Modify";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          {/* Public Page */}
          <Route element={<Public />}>
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          {/* Auth Page */}
          <Route path="/" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="shippings">
              <Route path="create" element={<ShippingCompsModify />} />
              <Route path=":id" element={<ShippingCompsModify />} />
              <Route index element={<ShippingComps />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
