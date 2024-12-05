import React, { useState } from 'react';

const EmployeeManagement = () => {
  // Trạng thái quản lý danh sách nhân viên
  const [employees, setEmployees] = useState([
    { 
      id: 1, 
      name: 'Nguyễn Văn A', 
      role: 'Nhân viên phục vụ', 
      salary: 5000000, 
      phone: '0123456789', 
      email: 'nva@example.com', 
      hireDate: '2023-01-15', 
      branch: 'Chi nhánh 1' 
    },
    { 
      id: 2, 
      name: 'Trần Thị B', 
      role: 'Quản lý ca', 
      salary: 7000000, 
      phone: '0987654321', 
      email: 'ttb@example.com', 
      hireDate: '2022-11-20', 
      branch: 'Chi nhánh 2' 
    }
  ]);

  // Trạng thái cho form nhập liệu
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    role: '',
    salary: '',
    phone: '',
    email: '',
    hireDate: '',
    branch: ''
  });

  // Trạng thái để xác định chế độ (thêm mới hay chỉnh sửa)
  const [isEditing, setIsEditing] = useState(false);

  // Xử lý thay đổi input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Thêm nhân viên mới
  const handleAddEmployee = () => {
    // Kiểm tra tính hợp lệ của dữ liệu
    if (Object.values(formData).every(value => value.trim() !== '')) {
      const newEmployee = {
        ...formData,
        id: employees.length + 1,
        salary: parseFloat(formData.salary)
      };

      setEmployees([...employees, newEmployee]);
      
      // Reset form
      resetForm();
    } else {
      alert('Vui lòng điền đầy đủ thông tin');
    }
  };

  // Chỉnh sửa nhân viên
  const handleEditEmployee = () => {
    setEmployees(employees.map(emp => 
      emp.id === formData.id ? formData : emp
    ));
    resetForm();
  };

  // Xóa nhân viên
  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  // Chuẩn bị chỉnh sửa nhân viên
  const prepareEditEmployee = (employee) => {
    setFormData(employee);
    setIsEditing(true);
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      id: '',
      name: '',
      role: '',
      salary: '',
      phone: '',
      email: '',
      hireDate: '',
      branch: ''
    });
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Quản Lý Nhân Viên</h1>

      {/* Form nhập liệu */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          name="name"
          placeholder="Tên nhân viên"
          value={formData.name}
          onChange={handleInputChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="role"
          placeholder="Vai trò"
          value={formData.role}
          onChange={handleInputChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="salary"
          placeholder="Lương"
          value={formData.salary}
          onChange={handleInputChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="phone"
          placeholder="Số điện thoại"
          value={formData.phone}
          onChange={handleInputChange}
          className="border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="border p-2 rounded"
        />
        <input
          type="date"
          name="hireDate"
          placeholder="Ngày tuyển dụng"
          value={formData.hireDate}
          onChange={handleInputChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="branch"
          placeholder="Chi nhánh"
          value={formData.branch}
          onChange={handleInputChange}
          className="border p-2 rounded"
        />
        <div className="flex space-x-2">
          {isEditing ? (
            <>
              <button 
                onClick={handleEditEmployee}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Cập Nhật
              </button>
              <button 
                onClick={resetForm}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Hủy
              </button>
            </>
          ) : (
            <button 
              onClick={handleAddEmployee}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Thêm Nhân Viên
            </button>
          )}
        </div>
      </div>

      {/* Danh sách nhân viên */}
      <div className="bg-white shadow-md rounded">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Tên</th>
              <th className="p-3 text-left">Vai Trò</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id} className="border-b">
                <td className="p-3">{emp.id}</td>
                <td className="p-3">{emp.name}</td>
                <td className="p-3">{emp.role}</td>
                <td className="p-3">{emp.email}</td>
                <td className="p-3 space-x-2">
                  <button 
                    onClick={() => prepareEditEmployee(emp)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Sửa
                  </button>
                  <button 
                    onClick={() => handleDeleteEmployee(emp.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeManagement;