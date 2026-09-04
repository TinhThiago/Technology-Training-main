import type { Quiz } from '../../types';

export const codeAppsQuizzes: Record<string, Quiz> = {
  'ok-code-apps': {
    topic: 'Power Apps Code apps',
    questions: [
      {
        question: 'Cách phát triển nào phù hợp với Code apps?',
        options: ['Chỉ kéo thả trong Canvas designer.', 'Viết ứng dụng web trong IDE và chạy trên Power Platform.', 'Chỉ viết plugin C# phía server.', 'Chỉ tạo báo cáo Power BI.'],
        correctAnswer: 'Viết ứng dụng web trong IDE và chạy trên Power Platform.',
        explanation: 'Code apps có cách tiếp cận code-first, cho phép chủ động xây dựng giao diện và logic bằng framework web.',
      },
      {
        question: 'Thành phần nào quản lý xác thực người dùng khi code app chạy?',
        options: ['File CSS.', 'Git repository.', 'Power Apps host.', 'Ô tìm kiếm của ứng dụng.'],
        correctAnswer: 'Power Apps host.',
        explanation: 'Host chịu trách nhiệm xác thực người dùng và tải ứng dụng.',
      },
      {
        question: 'Sau khi build thành công, lệnh nào xuất bản code app theo quickstart hiện tại?',
        options: ['pa app run', 'pa app init', 'npm install', 'pa app push'],
        correctAnswer: 'pa app push',
        explanation: 'pa app push xuất bản bản đã biên dịch; pa app run phục vụ chạy thử cục bộ.',
      },
      {
        question: 'Khi thêm bảng Dataverse làm data source, cần cung cấp tên nào?',
        options: ['Tên hiển thị đã dịch.', 'Logical name của bảng.', 'Tên người tạo bảng.', 'Tên tab trên trình duyệt.'],
        correctAnswer: 'Logical name của bảng.',
        explanation: 'Tham số --table nhận logical name để xác định bảng Dataverse.',
      },
      {
        question: 'Trong bài thực hành, cần xử lý thế nào khi lưu sản phẩm thất bại?',
        options: ['Luôn báo lưu thành công.', 'Ẩn lỗi và xóa nội dung đã nhập.', 'Thông báo lỗi rõ ràng và giữ dữ liệu để người dùng kiểm tra.', 'Tự bỏ qua mọi kiểm tra quyền.'],
        correctAnswer: 'Thông báo lỗi rõ ràng và giữ dữ liệu để người dùng kiểm tra.',
        explanation: 'Phản hồi đúng trạng thái giúp người dùng biết dữ liệu chưa được lưu và có thể xử lý tiếp.',
      },
    ],
  },
};
