
import type { Task } from '../../types';

export const performanceTasks: Task[] = [
  {
    id: 'perf-task-1',
    title: 'Phân tích đòn bẩy hiệu năng',
    difficulty: 'Medium',
    description: 'Dựa trên 5 đòn bẩy hiệu năng trong tài liệu, hãy liệt kê 3 hành động cụ thể bạn sẽ làm để tối ưu hóa một ứng dụng có hàng ngàn dòng dữ liệu trong Dataverse và có nhiều hình ảnh nặng.'
  },
  {
    id: 'perf-task-2',
    title: 'Sử dụng Monitor Tool',
    difficulty: 'Easy',
    description: 'Mở một ứng dụng Canvas bất kỳ, bật công cụ Monitor và thực hiện một thao tác lọc dữ liệu. Hãy tìm xem lệnh gọi mạng (network call) đó mất bao nhiêu ms và kích thước dữ liệu trả về là bao nhiêu.'
  }
];
