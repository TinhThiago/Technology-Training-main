import type { Task } from '../../types';

export const powerAutomateTasks: Task[] = [
  {
    id: 'pa-task-1',
    title: 'Flow tự động cập nhật tồn kho',
    difficulty: 'Easy',
    description: 'Tạo một Automated cloud flow. Trigger của flow là "When a row is added" trong table "Chi tiết xuất kho". Flow sẽ lấy thông tin sản phẩm và số lượng, sau đó dùng action "Update a row" để cập nhật (trừ đi) số lượng tồn kho trong table "Sản phẩm".'
  },
  {
    id: 'pa-task-2',
    title: 'Flow báo cáo doanh số hàng ngày',
    difficulty: 'Medium',
    description: 'Tạo một Scheduled cloud flow chạy vào 8 giờ sáng mỗi ngày. Flow sẽ lấy tất cả các bản ghi "Đơn bán chi tiết" của ngày hôm trước, tính tổng cột "Thành tiền", và gửi một email báo cáo doanh số với định dạng đẹp mắt.'
  }
];
