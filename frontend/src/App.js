import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import LotDetails from "./pages/LotDetails";
import Favorites from "./pages/Favorites";
import Settings from "./pages/Settings";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages without navbar */}
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />

        {/* App pages that share the navbar layout */}
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="lot/:id" element={<LotDetails />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
