
import type { Task } from '../../types';

export const pcfTasks: Task[] = [
  {
    id: 'pcf-task-1',
    title: 'Cài đặt môi trường PCF',
    difficulty: 'Easy',
    description: 'Cài đặt Node.js (LTS), VS Code, và Power Platform CLI (pac). Chạy lệnh `pac` trong terminal để kiểm tra cài đặt thành công.'
  },
  {
    id: 'pcf-task-2',
    title: 'Tạo Hello World Control',
    difficulty: 'Medium',
    description: 'Sử dụng `pac pcf init` để tạo một field control. Trong file index.ts, render một thẻ HTML hiển thị dòng chữ "Hello PCF". Build và test bằng `npm start`.'
  },
  {
    id: 'pcf-task-3',
    title: 'Tạo Dataset Grid đơn giản',
    difficulty: 'Hard',
    description: 'Tạo một dataset control. Đọc dữ liệu từ `context.parameters.dataset`, lặp qua các records và hiển thị chúng dưới dạng một bảng HTML đơn giản. Xử lý sự kiện click vào dòng để select record đó.'
  }
];
