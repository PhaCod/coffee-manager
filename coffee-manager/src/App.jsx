import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import EmployeeManagement from './pages/EmployeeManagement';
import RevenueManagement from './pages/RevenueManagement';
import PromotionManagement from './pages/PromotionManagement';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/employee" element={<EmployeeManagement />} />
          <Route path="/revenue" element={<RevenueManagement />} />
          <Route path="/promotion" element={<PromotionManagement />} />
          {/* Đặt route mặc định nếu muốn */}
          <Route path="/" element={<EmployeeManagement />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;