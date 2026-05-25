import type { Quiz } from '../../types';

export const powerAutomateQuizzes: Record<string, Quiz> = {
  'pa-intro': {
    topic: 'Giới thiệu về Power Automate',
    questions: [
      {
        question: 'Loại flow nào được kích hoạt thủ công từ một nút bấm trong Power Apps?',
        options: ['Automated cloud flow', 'Scheduled cloud flow', 'Instant cloud flow', 'Desktop flow'],
        correctAnswer: 'Instant cloud flow',
        explanation: 'Instant cloud flows (Flow tức thì) được thiết kế để chạy theo yêu cầu, ví dụ như khi người dùng nhấn một nút.'
      },
      {
        question: 'Thành phần nào trong một flow định nghĩa sự kiện bắt đầu của nó?',
        options: ['Action', 'Connector', 'Trigger', 'Condition'],
        correctAnswer: 'Trigger',
        explanation: 'Mỗi flow bắt đầu với một và chỉ một Trigger (Trình kích hoạt), đó là sự kiện khởi động toàn bộ luồng công việc.'
      }
    ]
  },
  'pa-triggers': {
    topic: 'Sử dụng Triggers (Automated Flows)',
    questions: [
      {
        question: 'Loại Power Automate flow nào sẽ tự động kích hoạt khi một sự kiện xảy ra trong một hệ thống khác (ví dụ: một hàng mới được tạo trong Dataverse)?',
        options: ['Scheduled cloud flow', 'Instant cloud flow', 'Automated cloud flow', 'Business process flow'],
        correctAnswer: 'Automated cloud flow',
        explanation: 'Automated cloud flow được thiết kế để "lắng nghe" các sự kiện và tự động chạy khi sự kiện đó xảy ra.'
      },
      {
        question: 'Trong trigger "When a row is added, modified or deleted", thuộc tính nào xác định hành động cụ thể (tạo, sửa, hay xóa) sẽ kích hoạt flow?',
        options: ['Table name', 'Scope', 'Change type', 'Row ID'],
        correctAnswer: 'Change type',
        explanation: 'Change type cho phép bạn chỉ định chính xác flow nên chạy khi một hàng được "Added", "Modified", "Added or Modified", hay "Deleted".'
      }
    ]
  },
  'pa-scheduled': {
    topic: 'Tạo Flow theo lịch (Scheduled Flows)',
    questions: [
      {
        question: 'Trigger nào được sử dụng để bắt đầu một flow theo một lịch trình cố định (ví dụ: mỗi ngày lúc 9 giờ sáng)?',
        options: ['When an item is created', 'Manually trigger a flow', 'Recurrence', 'When a HTTP request is received'],
        correctAnswer: 'Recurrence',
        explanation: 'Trigger Recurrence (Lặp lại) là trái tim của Scheduled Cloud Flows, cho phép bạn thiết lập tần suất và thời gian chạy chính xác.'
      },
      {
        question: 'Trong kịch bản gửi báo cáo doanh số hàng ngày, action nào thường được dùng để tính tổng doanh thu từ một danh sách các đơn hàng?',
        options: ['HTTP Request', 'Compose', 'Initialize variable và Increment variable', 'Send an email'],
        correctAnswer: 'Initialize variable và Increment variable',
        explanation: 'Bạn thường tạo một biến để lưu tổng, sau đó lặp qua danh sách đơn hàng và cộng dồn giá trị vào biến đó bằng action "Increment variable".'
      }
    ]
  },
  'pa-expressions': {
    topic: 'Làm chủ Biểu thức (Expressions)',
    questions: [
      {
        question: 'Hàm biểu thức nào được sử dụng để nối chuỗi "Mr. " và tên "John" lại với nhau?',
        options: ['add()', 'concat()', 'join()', 'string()'],
        correctAnswer: 'concat()',
        explanation: "Hàm `concat()` được sử dụng để nối hai hoặc nhiều chuỗi văn bản lại với nhau. Ví dụ: `concat('Mr. ', 'John')`."
      },
      {
        question: "Hàm `formatDateTime(utcNow(), 'dd-MM-yyyy')` sẽ trả về kết quả có dạng như thế nào?",
        options: ['2025-04-01', '01-04-2025', 'April 1, 2025', '04-01-2025'],
        correctAnswer: '01-04-2025',
        explanation: "Chuỗi định dạng 'dd-MM-yyyy' chỉ định rằng ngày, tháng và năm phải được hiển thị theo thứ tự đó, với hai chữ số cho ngày và tháng."
      }
    ]
  },
  'pa-error-handling': {
    topic: 'Xử lý lỗi nâng cao',
    questions: [
      {
        question: "Để cấu hình một action chỉ chạy khi action trước đó thất bại, bạn sẽ sử dụng cài đặt nào?",
        options: ['Add a comment', 'Configure run after', 'Action Settings', 'Initialize variable'],
        correctAnswer: 'Configure run after',
        explanation: "'Configure run after' cho phép bạn xác định điều kiện để một action chạy, bao gồm cả việc chạy khi action trước đó 'has failed'."
      },
      {
        question: 'Control nào giúp nhóm một loạt các hành động lại với nhau để bạn có thể bắt lỗi cho cả khối?',
        options: ['Condition', 'Switch', 'Apply to each', 'Scope'],
        correctAnswer: 'Scope',
        explanation: "Control 'Scope' hoạt động như một container, cho phép bạn áp dụng 'Configure run after' cho toàn bộ nhóm hành động bên trong, rất lý tưởng để tạo khối 'Try' và 'Catch'."
      }
    ]
  },
  'pa-best-practices': {
    topic: 'Mẹo và Tối ưu hóa hiệu năng',
    questions: [
      {
        question: 'Phương pháp nào là hiệu quả nhất để chỉ lấy các mục từ SharePoint có cột "Trạng thái" là "Hoàn thành"?',
        options: ['Lấy tất cả các mục rồi dùng action "Filter array".', 'Sử dụng OData Filter Query trong action "Get items".', 'Dùng vòng lặp "Apply to each" và một "Condition".', 'Sử dụng action "Select".'],
        correctAnswer: 'Sử dụng OData Filter Query trong action "Get items".',
        explanation: 'Lọc tại nguồn bằng OData Filter Query là cách hiệu quả nhất vì nó giảm lượng dữ liệu truyền qua mạng và giảm tải xử lý cho flow của bạn.'
      },
      {
        question: 'Cài đặt nào trên vòng lặp "Apply to each" có thể tăng tốc đáng kể việc xử lý một mảng lớn?',
        options: ['Timeout', 'Chunking', 'Concurrency Control', 'Retry Policy'],
        correctAnswer: 'Concurrency Control',
        explanation: 'Bật "Concurrency Control" cho phép flow xử lý nhiều mục trong mảng một cách song song, giúp giảm đáng kể tổng thời gian thực thi.'
      }
    ]
  },
};
