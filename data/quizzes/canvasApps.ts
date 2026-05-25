import type { Quiz } from '../../types';

export const canvasAppsQuizzes: Record<string, Quiz> = {
  'ca-intro': {
    topic: 'Tìm hiểu về Canvas App',
    questions: [
      {
        question: 'Ngôn ngữ công thức được sử dụng trong Canvas Apps để định nghĩa logic và hành vi là gì?',
        options: ['JavaScript', 'C#', 'Power Fx', 'Python'],
        correctAnswer: 'Power Fx',
        explanation: 'Power Fx là ngôn ngữ công thức low-code dựa trên Microsoft Excel, được sử dụng rộng rãi trong Canvas Apps.'
      },
      {
        question: 'Thành phần nào cho phép Canvas App kết nối và tương tác với các nguồn dữ liệu như SharePoint, SQL Server, hoặc các dịch vụ bên ngoài?',
        options: ['Controls (Điều khiển)', 'Screens (Màn hình)', 'Variables (Biến)', 'Connectors (Trình kết nối)'],
        correctAnswer: 'Connectors (Trình kết nối)',
        explanation: 'Connectors là cầu nối cho phép ứng dụng của bạn giao tiếp và làm việc với hàng trăm dịch vụ và nguồn dữ liệu khác nhau.'
      }
    ]
  },
  'ca-export-app': {
    topic: 'Tạo App Xuất kho tổng hợp',
    questions: [
      {
        question: 'Hàm Power Fx nào thường được sử dụng để ghi một bản ghi mới hoặc cập nhật một bản ghi đã có trong nguồn dữ liệu?',
        options: ['Navigate()', 'Filter()', 'Patch()', 'Collect()'],
        correctAnswer: 'Patch()',
        explanation: 'Hàm Patch() rất linh hoạt, cho phép bạn tạo mới hoặc sửa đổi một hoặc nhiều bản ghi trong nguồn dữ liệu một cách hiệu quả.'
      },
      {
        question: 'Để lặp qua tất cả các mục trong một Gallery và thực hiện một hành động cho mỗi mục (ví dụ: ghi dữ liệu), bạn nên sử dụng hàm nào?',
        options: ['If()', 'ForAll()', 'Switch()', 'UpdateContext()'],
        correctAnswer: 'ForAll()',
        explanation: 'Hàm ForAll() cho phép bạn lặp qua một bảng (ví dụ như thuộc tính .AllItems của Gallery) và thực thi một công thức cho mỗi hàng.'
      }
    ]
  },
  'ca-chatbot': {
    topic: 'Tạo App "Chat bot"',
    questions: [
      {
        question: 'Để kết nối Canvas App với một dịch vụ AI bên ngoài (như GPT), phương pháp phổ biến và an toàn nhất là gì?',
        options: ['Gọi API trực tiếp từ Canvas App bằng một connector tùy chỉnh.', 'Nhúng mã JavaScript phức tạp vào ứng dụng.', 'Sử dụng Power Automate flow làm trung gian để gọi API.', 'Lưu trữ khóa API trực tiếp trong biến của Canvas App.'],
        correctAnswer: 'Sử dụng Power Automate flow làm trung gian để gọi API.',
        explanation: 'Sử dụng Power Automate làm proxy giúp quản lý việc gọi API an toàn hơn (không lộ khóa API ở client) và cho phép xử lý logic phức tạp hơn ở phía sau.'
      },
      {
        question: 'Action nào trong Power Automate được dùng để gửi dữ liệu trả về cho Canvas App đã gọi nó?',
        options: ['HTTP Request', 'Send an email', 'Respond to a PowerApp or flow', 'Get items'],
        correctAnswer: 'Respond to a PowerApp or flow',
        explanation: 'Action này cho phép flow gửi lại các giá trị đầu ra (output) cho ứng dụng Power Apps, hoàn thành chu trình yêu cầu-phản hồi.'
      }
    ]
  },
  'ca-common-functions': {
    topic: 'Các hàm Power Fx thông dụng',
    questions: [
      {
        question: 'Hàm nào được sử dụng để thêm một bản ghi mới vào một collection mà không xóa các bản ghi hiện có?',
        options: ['ClearCollect()', 'Clear()', 'Patch()', 'Collect()'],
        correctAnswer: 'Collect()',
        explanation: 'Hàm Collect() được thiết kế để thêm các mục vào một collection. ClearCollect() sẽ xóa collection trước khi thêm các mục mới.'
      },
      {
        question: 'Sự khác biệt chính giữa biến được tạo bằng Set() và biến được tạo bằng UpdateContext() là gì?',
        options: ['Set() chỉ dùng cho số, UpdateContext() dùng cho văn bản.', 'Biến Set() là toàn cục (global), trong khi biến UpdateContext() là cục bộ cho màn hình hiện tại (local).', 'Set() nhanh hơn UpdateContext().', 'Không có sự khác biệt nào.'],
        correctAnswer: 'Biến Set() là toàn cục (global), trong khi biến UpdateContext() là cục bộ cho màn hình hiện tại (local).',
        explanation: 'Biến toàn cục (Set) có thể được sử dụng trên tất cả các màn hình, trong khi biến ngữ cảnh (UpdateContext) chỉ tồn tại trên màn hình nơi nó được tạo.'
      }
    ]
  },
  'ca-performance': {
    topic: 'Tối ưu hóa hiệu năng',
    questions: [
      {
        question: 'Delegation (Ủy thác) trong Power Apps có nghĩa là gì?',
        options: ['Giao nhiệm vụ cho một người dùng khác.', 'Yêu cầu nguồn dữ liệu thực hiện việc xử lý dữ liệu.', 'Tải tất cả dữ liệu về ứng dụng để xử lý cục bộ.', 'Tăng giới hạn số bản ghi từ 500 lên 2000.'],
        correctAnswer: 'Yêu cầu nguồn dữ liệu thực hiện việc xử lý dữ liệu.',
        explanation: 'Ủy thác là chìa khóa cho hiệu suất. Nó cho phép các nguồn dữ liệu như Dataverse hoặc SQL Server thực hiện công việc nặng nhọc, giảm lượng dữ liệu cần truyền qua mạng.'
      },
      {
        question: 'Hàm nào có thể giúp tăng tốc thời gian tải ứng dụng bằng cách chạy nhiều công thức cùng một lúc trong App.OnStart?',
        options: ['ForAll()', 'Concurrent()', 'If()', 'Patch()'],
        correctAnswer: 'Concurrent()',
        explanation: 'Hàm Concurrent() thực thi các công thức bên trong nó một cách đồng thời, không cần chờ công thức trước hoàn thành, giúp giảm đáng kể thời gian tải ban đầu.'
      }
    ]
  },
  'ca-tips-tricks': {
    topic: 'Mẹo và thủ thuật',
    questions: [
      {
        question: 'Phương pháp tốt nhất để tạo các yếu tố giao diện người dùng có thể tái sử dụng trên nhiều màn hình hoặc ứng dụng là gì?',
        options: ['Sao chép và dán các control.', 'Sử dụng Components và Component Libraries.', 'Tạo một màn hình mẫu và sao chép nó.', 'Viết một công thức dài trong App.OnStart.'],
        correctAnswer: 'Sử dụng Components và Component Libraries.',
        explanation: 'Components cho phép bạn đóng gói một nhóm các control thành một đơn vị có thể tái sử dụng, giúp quản lý và cập nhật giao diện một cách nhất quán và hiệu quả.'
      },
      {
        question: 'Hàm nào được sử dụng để xử lý các lỗi tiềm ẩn trong một công thức và cung cấp một giá trị thay thế hoặc hành động thay thế?',
        options: ['IsBlank()', 'Validate()', 'IfError()', 'Error()'],
        correctAnswer: 'IfError()',
        explanation: 'IfError() cho phép bạn bẫy các lỗi có thể xảy ra. Nếu công thức đầu tiên gây ra lỗi, nó sẽ thực thi công thức thay thế, giúp tạo ra trải nghiệm người dùng mượt mà hơn.'
      }
    ]
  },
};
