import type { Task } from '../../types';

export const powerBiTasks: Task[] = [
  {
    id: 'pbi-task-1',
    title: 'Xây dựng Dashboard bán hàng',
    difficulty: 'Medium',
    description: 'Tạo một báo cáo Power BI mới. Xây dựng một trang dashboard bao gồm: Slicer theo Tỉnh thành, Biểu đồ cột hiển thị doanh thu theo tháng, và Biểu đồ tròn hiển thị tỷ trọng doanh thu theo Nhóm sản phẩm.'
  },
  {
    id: 'pbi-task-2',
    title: 'Báo cáo chi tiết với Drillthrough',
    difficulty: 'Hard',
    description: 'Tạo một trang báo cáo thứ hai hiển thị chi tiết các đơn hàng trong một bảng. Thiết lập tính năng Drillthrough: từ trang dashboard, người dùng có thể chuột phải vào một Nhóm sản phẩm trên biểu đồ tròn và chọn "Drillthrough" để xem tất cả các đơn hàng chi tiết của nhóm đó.'
  }
];
