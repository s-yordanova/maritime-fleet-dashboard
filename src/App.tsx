import { BrowserRouter, Routes, Route } from "react-router-dom";
import FleetDashboardPage from "./pages/FleetDashboardPage";
import { CrewProfilePage } from "./pages/CrewProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FleetDashboardPage />} />
        <Route path="/crew-profile" element={<CrewProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
