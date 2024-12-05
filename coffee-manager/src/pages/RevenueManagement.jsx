import React from 'react';

const RevenueManagement = () => {
  const branches = [
    { id: 1, name: 'Chi nhánh Trung Tâm', revenue: 150000000 },
    { id: 2, name: 'Chi nhánh Quận 1', revenue: 120000000 },
    { id: 3, name: 'Chi nhánh Quận 3', revenue: 100000000 }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Doanh Thu Theo Chi Nhánh</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {branches.map((branch) => (
          <div 
            key={branch.id} 
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-4">{branch.name}</h2>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Tổng Doanh Thu:</span>
              <span className="text-green-600 font-bold">
                {branch.revenue.toLocaleString()} VND
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueManagement;