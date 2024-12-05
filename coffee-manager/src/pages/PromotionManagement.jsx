import React from 'react';

const PromotionManagement = () => {
  const topPromotions = [
    { 
      id: 1, 
      name: 'Giảm 20% Cafe Sáng', 
      usageCount: 1500,
      description: 'Áp dụng cho tất cả các loại cafe từ 6-9h sáng' 
    },
    { 
      id: 2, 
      name: 'Mua 2 Tặng 1', 
      usageCount: 1200,
      description: 'Áp dụng cho bánh ngọt kèm cafe' 
    },
    { 
      id: 3, 
      name: 'Ưu Đãi Sinh Viên', 
      usageCount: 900,
      description: 'Giảm 15% cho sinh viên khi xuất trình thẻ' 
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Top Khuyến Mãi</h1>
      
      <div className="space-y-4">
        {topPromotions.map((promo) => (
          <div 
            key={promo.id} 
            className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold">{promo.name}</h2>
              <p className="text-gray-600">{promo.description}</p>
            </div>
            <div className="text-right">
              <span className="text-blue-600 font-bold">
                Đã sử dụng: {promo.usageCount}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionManagement;