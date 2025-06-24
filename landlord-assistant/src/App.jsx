import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx'; // 先放个空白页或 console.log
import DocumentsPage from './pages/DocumentsPage.jsx';
import LoginPage from './pages/Login.jsx';
import PropertiesPage from './pages/PropertiesPage.jsx';
import RemindersPage from './pages/RemindersPage.jsx';
import RentPage from './pages/RentPage.jsx';
import RepairPage from './pages/RepairPage.jsx';
import TenantsPage from './pages/TenantsPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/tenants" element={<TenantsPage />} />
        <Route path="/rent" element={<RentPage />} />
        <Route path="/repair" element={<RepairPage />} />
        <Route path="/documents" element={<DocumentsPage />} />
        <Route path="/reminders" element={<RemindersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
