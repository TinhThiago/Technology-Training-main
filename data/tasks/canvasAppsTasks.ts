
import type { Task } from '../../types';

export const canvasAppsTasks: Task[] = [
  {
    id: 'ca-task-1',
    title: 'Xây dựng giao diện App Xuất kho',
    difficulty: 'Medium',
    description: 'Tái tạo lại giao diện người dùng từ mockup "Ứng dụng Xuất kho". Kết nối ứng dụng với các table Dataverse cần thiết (Khách hàng, Đơn bán chi tiết). Implement logic để gallery sản phẩm tự động lọc khi người dùng chọn một khách hàng.'
  },
  {
    id: 'ca-task-2',
    title: 'Hoàn thiện logic App Xuất kho',
    difficulty: 'Hard',
    description: 'Thêm logic cho nút "Xuất kho". Khi nhấn, sử dụng hàm ForAll() và Patch() để tạo các bản ghi mới trong table "Xuất kho" và cập nhật lại số lượng tồn kho trong table "Sản phẩm" cho tất cả các mục đã được chọn.'
  }
];
