
import type { Quiz } from '../../types';

export const otherKnowledgeQuizzes: Record<string, Quiz> = {
  'ok-performance': {
    topic: 'Tối ưu hiệu năng ứng dụng lớn',
    questions: [
      {
        question: 'Nguyên tắc nào là quan trọng nhất khi bắt đầu tối ưu hóa một ứng dụng?',
        options: [
          'Thêm thật nhiều component.',
          'Đo lường các chỉ số cơ bản (baselines) trước khi thay đổi.',
          'Chạy tất cả các công thức trong App.OnStart.',
          'Sử dụng thật nhiều biến toàn cục (Global Variables).'
        ],
        correctAnswer: 'Đo lường các chỉ số cơ bản (baselines) trước khi thay đổi.',
        explanation: 'Bạn không thể cải thiện thứ mà bạn không đo lường được. Việc thiết lập baseline giúp bạn xác định liệu nỗ lực tối ưu có thực sự mang lại kết quả hay không.'
      },
      {
        question: 'Tại sao việc chia nhỏ một "God App" (100+ màn hình) thành các ứng dụng nhỏ hơn lại giúp tăng hiệu năng?',
        options: [
          'Vì người dùng thích mở nhiều tab trình duyệt.',
          'Giúp giảm tải bộ nhớ render và kích thước file app tải về thiết bị.',
          'Để tốn nhiều giấy phép (license) hơn.',
          'Vì Power Apps không cho phép tạo quá 10 màn hình.'
        ],
        correctAnswer: 'Giúp giảm tải bộ nhớ render và kích thước file app tải về thiết bị.',
        explanation: 'Mỗi control và công thức trong một app đều chiếm tài nguyên. Chia nhỏ app giúp mỗi ứng dụng tập trung hơn, nhẹ hơn và nhanh hơn.'
      },
      {
        question: 'Trong 5 đòn bẩy hiệu năng, "Data Access" tập trung vào vấn đề gì?',
        options: [
          'Làm cho icon đẹp hơn.',
          'Cách truy vấn và lấy dữ liệu từ nguồn hiệu quả (ví dụ dùng Delegation).',
          'Tốc độ gõ phím của người dùng.',
          'Số lượng màn hình trong ứng dụng.'
        ],
        correctAnswer: 'Cách truy vấn và lấy dữ liệu từ nguồn hiệu quả (ví dụ dùng Delegation).',
        explanation: 'Data Access là nền tảng. Nếu bạn tải quá nhiều dữ liệu hoặc không lọc tại nguồn, ứng dụng sẽ luôn chậm bất kể giao diện có tối ưu thế nào.'
      }
    ]
  },
  'ok-fabric-db': {
    topic: 'Lựa chọn Database trong Fabric',
    questions: [
      {
        question: 'Công cụ nào trong Fabric là tối ưu nhất cho bài toán phân tích logs và dữ liệu IoT thời gian thực?',
        options: ['Warehouse', 'SQL Database', 'Eventhouse', 'Lakehouse'],
        correctAnswer: 'Eventhouse',
        explanation: 'Eventhouse sử dụng Kusto Engine (KQL) được thiết kế chuyên biệt cho tốc độ truy vấn cực nhanh trên dữ liệu streaming và logs.'
      },
      {
        question: 'Nếu bạn đang xây dựng backend cho một ứng dụng giao dịch nghiệp vụ (OLTP) cần sự ổn định và cấu trúc rõ ràng, bạn nên chọn gì?',
        options: ['Cosmos DB', 'SQL Database', 'Datamart', 'Semantic Model'],
        correctAnswer: 'SQL Database',
        explanation: 'SQL Database là nền tảng vững chắc cho các ứng dụng giao dịch (OLTP) với khả năng hỗ trợ transaction và tính toàn vẹn dữ liệu cao.'
      }
    ]
  },
  'ok-git': {
    topic: 'Quản lý phiên bản với Git',
    questions: [
      {
        question: 'Lệnh nào dùng để đẩy các commit từ máy cục bộ lên repository từ xa (remote)?',
        options: ['git pull', 'git fetch', 'git push', 'git commit'],
        correctAnswer: 'git push',
        explanation: 'git push được sử dụng để tải các nội dung commit cục bộ lên một repository từ xa.'
      }
    ]
  },
  'ok-agile': {
    topic: 'Agile và Scrum cơ bản',
    questions: [
      {
        question: 'Ai là người chịu trách nhiệm tối đa hóa giá trị của sản phẩm và quản lý Product Backlog trong Scrum?',
        options: ['Scrum Master', 'Development Team', 'Product Owner', 'Project Manager'],
        correctAnswer: 'Product Owner',
        explanation: 'Product Owner là người định nghĩa các tính năng, ưu tiên backlog và đảm bảo team đang xây dựng đúng thứ mang lại giá trị cao nhất.'
      }
    ]
  }
};
