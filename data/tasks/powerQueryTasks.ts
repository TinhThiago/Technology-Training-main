import type { Task } from '../../types';

export const powerQueryTasks: Task[] = [
  {
    id: 'pq-task-1',
    title: 'Làm sạch dữ liệu khách hàng',
    difficulty: 'Easy',
    description: 'Kết nối đến file Excel chứa danh sách khách hàng. Thực hiện các bước: Xóa các cột không cần thiết, đổi tên cột "Họ và tên" thành "FullName", tách cột "FullName" thành "FirstName" và "LastName", và chuyển cột "City" thành chữ hoa.'
  },
  {
    id: 'pq-task-2',
    title: 'Kết hợp dữ liệu bán hàng',
    difficulty: 'Medium',
    description: 'Bạn có hai bảng: "Sales" (chứa ProductID, SaleDate, UnitsSold) và "Products" (chứa ProductID, ProductName, Category). Sử dụng "Merge Queries" để thêm thông tin "ProductName" và "Category" vào bảng "Sales".'
  }
];
