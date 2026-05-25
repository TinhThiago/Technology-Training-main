import type { Task } from '../../types';

export const webResourcesTasks: Task[] = [
  {
    id: 'wr-task-1',
    title: 'Validate dữ liệu Form bằng JavaScript',
    difficulty: 'Medium',
    description: 'Viết một JavaScript web resource. Đăng ký một hàm vào sự kiện OnChange của cột "Số lượng" trên form "Đơn bán chi tiết". Hàm sẽ dùng Web API để lấy tồn kho của sản phẩm đã chọn và hiển thị thông báo lỗi nếu số lượng bán vượt quá tồn kho.'
  },
  {
    id: 'wr-task-2',
    title: 'Tạo nút In tùy chỉnh',
    difficulty: 'Hard',
    description: 'Sử dụng Ribbon Workbench, thêm một nút "In Phiếu" vào command bar của form "Đơn bán". Tạo một HTML Web Resource để định dạng một phiếu in. Cấu hình nút để khi nhấn sẽ mở HTML web resource này trong một cửa sổ mới, truyền ID của đơn bán vào URL để HTML có thể lấy và hiển thị đúng dữ liệu.'
  }
];
