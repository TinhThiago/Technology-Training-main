import type { Quiz } from '../../types';

export const modelDrivenAppsQuizzes: Record<string, Quiz> = {
  'mda-intro': {
    topic: 'Giới thiệu về Model-driven Apps',
    questions: [
      {
        question: 'Nền tảng dữ liệu cốt lõi được sử dụng để xây dựng Model-driven Apps là gì?',
        options: ['SharePoint Lists', 'SQL Server', 'Microsoft Dataverse', 'Excel Online'],
        correctAnswer: 'Microsoft Dataverse',
        explanation: 'Dataverse là nền tảng dữ liệu an toàn, có thể mở rộng và là trái tim của Model-driven Apps, nơi bạn định nghĩa các bảng, cột và mối quan hệ.'
      },
      {
        question: 'Đặc điểm chính của Model-driven Apps so với Canvas Apps là gì?',
        options: ['Cho phép tùy chỉnh giao diện ở cấp độ pixel.', 'Giao diện người dùng được tự động tạo ra từ mô hình dữ liệu.', 'Chỉ có thể kết nối với một nguồn dữ liệu duy nhất.', 'Được thiết kế chủ yếu cho các ứng dụng di động đơn giản.'],
        correctAnswer: 'Giao diện người dùng được tự động tạo ra từ mô hình dữ liệu.',
        explanation: 'Model-driven Apps tự động sinh ra giao diện dựa trên cấu trúc dữ liệu trong Dataverse, giúp phát triển nhanh các ứng dụng nghiệp vụ phức tạp.'
      },
      {
        question: 'Mục tiêu chính khi chọn xây dựng một Model-driven App là gì?',
        options: ['Tạo một ứng dụng có giao diện độc đáo, tùy chỉnh cao.', 'Xây dựng nhanh một ứng dụng quản lý quy trình nghiệp vụ phức tạp, tập trung vào dữ liệu.', 'Tạo một ứng dụng đơn giản, tập trung vào một tác vụ duy nhất cho di động.', 'Tích hợp với nhiều nguồn dữ liệu không phải của Microsoft.'],
        correctAnswer: 'Xây dựng nhanh một ứng dụng quản lý quy trình nghiệp vụ phức tạp, tập trung vào dữ liệu.',
        explanation: 'Thế mạnh của Model-driven Apps là khả năng nhanh chóng tạo ra các ứng dụng mạnh mẽ cho các quy trình nghiệp vụ phức tạp bằng cách tập trung vào mô hình dữ liệu thay vì thiết kế giao diện.'
      }
    ]
  },
  'mda-data-model': {
    topic: 'Tạo Solution, Table, Form, View',
    questions: [
      {
        question: 'Loại solution nào nên được sử dụng để triển khai ứng dụng đến môi trường TEST hoặc PRODUCTION?',
        options: ['Unmanaged Solution', 'Managed Solution', 'Default Solution', 'Custom Solution'],
        correctAnswer: 'Managed Solution',
        explanation: 'Managed Solutions được dùng để triển khai, đảm bảo các tùy chỉnh không bị thay đổi trực tiếp trên môi trường đích và cho phép quản lý phiên bản cũng như gỡ bỏ một cách sạch sẽ.'
      },
      {
        question: 'Loại Form nào được sử dụng để hiển thị thông tin tóm tắt của một bản ghi liên quan (lookup) ngay trên một form khác?',
        options: ['Main Form', 'Quick Create Form', 'Card Form', 'Quick View Form'],
        correctAnswer: 'Quick View Form',
        explanation: 'Quick View Form cho phép bạn hiển thị dữ liệu chỉ đọc từ một bảng khác có liên quan thông qua một trường lookup, làm phong phú thêm thông tin ngữ cảnh cho người dùng.'
      },
      {
        question: 'Khi nào bạn nên chọn quyền sở hữu (ownership) là "User or Team" cho một bảng?',
        options: ['Khi dữ liệu là dữ liệu tham chiếu chung cho toàn công ty, như danh sách quốc gia.', 'Khi bạn cần các quyền bảo mật chi tiết, cho phép các người dùng khác nhau có các quyền truy cập khác nhau trên các hàng dữ liệu khác nhau.', 'Khi bảng chứa ít hơn 100 hàng dữ liệu.', 'Khi bạn muốn tối ưu hóa hiệu suất truy vấn.'],
        correctAnswer: 'Khi bạn cần các quyền bảo mật chi tiết, cho phép các người dùng khác nhau có các quyền truy cập khác nhau trên các hàng dữ liệu khác nhau.',
        explanation: 'Quyền sở hữu "User or Team" kích hoạt mô hình bảo mật dựa trên vai trò phức tạp của Dataverse, cho phép kiểm soát chặt chẽ ai có thể làm gì trên từng bản ghi.'
      }
    ]
  },
  'mda-app-design': {
    topic: 'Tạo và Cấu trúc App Model-driven',
    questions: [
      {
        question: 'Thành phần nào định nghĩa cấu trúc điều hướng (menu) bên trái của một Model-driven App?',
        options: ['App Designer', 'Solution Explorer', 'Form Editor', 'Site Map'],
        correctAnswer: 'Site Map',
        explanation: 'Site Map định nghĩa cấu trúc điều hướng của ứng dụng, bao gồm các Area, Group, và Subarea, quyết định người dùng sẽ thấy những gì trong menu.'
      },
      {
        question: 'Trong Site Map, cấp độ nào là một liên kết cụ thể đến một thành phần (thường là một View của một Table)?',
        options: ['Area', 'Group', 'Subarea', 'Section'],
        correctAnswer: 'Subarea',
        explanation: 'Subarea là cấp độ thấp nhất trong Site Map, đại diện cho một liên kết trực tiếp đến một nội dung cụ thể như View, Dashboard, hoặc Web Resource.'
      }
    ]
  },
    'mda-relationships': {
    topic: 'Các loại Relationships',
    questions: [
      {
        question: 'Mối quan hệ giữa một "Khách hàng" và nhiều "Đơn bán" của khách hàng đó là loại quan hệ gì?',
        options: ['1:1 (One-to-One)', '1:N (One-to-Many)', 'N:N (Many-to-Many)', 'Không có quan hệ'],
        correctAnswer: '1:N (One-to-Many)',
        explanation: 'Đây là mối quan hệ 1:N vì một khách hàng có thể có nhiều đơn bán, nhưng mỗi đơn bán chỉ thuộc về một khách hàng.'
      },
      {
        question: 'Hành vi mối quan hệ (Relationship Behavior) nào sẽ ngăn chặn việc xóa một bản ghi cha nếu nó vẫn còn các bản ghi con liên quan?',
        options: ['Parental', 'Referential', 'Referential, Restrict Delete', 'Configurable Cascading'],
        correctAnswer: 'Referential, Restrict Delete',
        explanation: 'Hành vi "Referential, Restrict Delete" là một biện pháp an toàn để bảo vệ toàn vẹn dữ liệu, đảm bảo bạn không vô tình xóa các bản ghi cha mà vẫn còn các bản ghi con phụ thuộc.'
      }
    ]
  },
  'mda-columns': {
    topic: 'Làm việc với Cột Lookup, Calculated, và Rollup',
    questions: [
      {
        question: 'Loại cột nào được sử dụng để tạo mối quan hệ giữa hai bảng (ví dụ: liên kết một "Đơn bán" với một "Sản phẩm")?',
        options: ['Calculated Column', 'Lookup Column', 'Rollup Column', 'Choice Column'],
        correctAnswer: 'Lookup Column',
        explanation: 'Cột lookup tạo ra một mối quan hệ N:1 (nhiều-đến-một) giữa hai bảng, cho phép bạn "tra cứu" và liên kết đến một bản ghi ở bảng khác.'
      },
      {
        question: 'Một cột "Thành tiền" được tự động tính bằng công thức `Số lượng * Đơn giá`. Đây là loại cột gì?',
        options: ['Rollup Column', 'Lookup Column', 'Calculated Column', 'Number Column'],
        correctAnswer: 'Calculated Column',
        explanation: 'Cột calculated sử dụng công thức để tính toán giá trị dựa trên các cột khác trong cùng một hàng dữ liệu. Phép tính được thực hiện ngay lập tức.'
      },
      {
        question: 'Đặc điểm nào sau đây là đúng về Cột Rollup?',
        options: ['Giá trị được cập nhật ngay lập tức khi dữ liệu con thay đổi.', 'Giá trị được cập nhật định kỳ bởi một công việc hệ thống (thường là mỗi giờ).', 'Có thể thực hiện các phép tính phức tạp trên các bảng không liên quan.', 'Chỉ có thể đếm số lượng bản ghi.'],
        correctAnswer: 'Giá trị được cập nhật định kỳ bởi một công việc hệ thống (thường là mỗi giờ).',
        explanation: 'Cột Rollup không cập nhật theo thời gian thực. Chúng được tính toán bởi các công việc hệ thống chạy nền theo lịch trình, điều này quan trọng cần lưu ý khi thiết kế ứng dụng.'
      }
    ]
  },
    'mda-business-rules': {
    topic: 'Tạo Business Rules',
    questions: [
      {
        question: 'Hành động nào sau đây KHÔNG thể thực hiện bằng một Business Rule?',
        options: ['Hiện hoặc ẩn một cột', 'Cập nhật một cột trên một bảng liên quan', 'Thiết lập giá trị cho một cột', 'Hiển thị một thông báo lỗi trên form'],
        correctAnswer: 'Cập nhật một cột trên một bảng liên quan',
        explanation: 'Business Rules chỉ có thể thực hiện logic trên các cột của cùng một bảng. Để thực hiện các hành động trên các bảng liên quan, bạn cần sử dụng Power Automate hoặc JavaScript.'
      },
      {
        question: 'Phạm vi (Scope) nào của Business Rule sẽ đảm bảo logic được thực thi ngay cả khi dữ liệu được tạo/cập nhật thông qua một API?',
        options: ['Specific Form', 'All Forms', 'Entity', 'Application'],
        correctAnswer: 'Entity',
        explanation: 'Khi đặt scope là "Entity", rule sẽ được thực thi ở cả phía máy khách (client) và máy chủ (server), đảm bảo tính toàn vẹn dữ liệu từ mọi nguồn.'
      }
    ]
  },
  'mda-keys': {
    topic: 'Định nghĩa Alternate Keys',
    questions: [
      {
        question: 'Ngoài việc chống trùng lặp dữ liệu, mục đích quan trọng khác của Alternate Key là gì?',
        options: ['Để thay thế Primary Key (GUID) của hệ thống.', 'Để đơn giản hóa việc tích hợp dữ liệu thông qua API.', 'Để tăng tốc độ hiển thị của form.', 'Để tạo các mối quan hệ N:N.'],
        correctAnswer: 'Để đơn giản hóa việc tích hợp dữ liệu thông qua API.',
        explanation: 'Alternate Keys cho phép các hệ thống bên ngoài tham chiếu đến một bản ghi bằng một giá trị nghiệp vụ có ý nghĩa (như Mã sản phẩm) thay vì phải biết GUID, giúp việc tích hợp dễ dàng và đáng tin cậy hơn.'
      }
    ]
  },
  'mda-charts': {
    topic: 'Tạo và sử dụng Charts',
    questions: [
      {
        question: 'Charts trong Model-driven App trực quan hóa dữ liệu từ đâu?',
        options: ['Từ một Solution', 'Trực tiếp từ một Table', 'Từ một View', 'Từ một Form'],
        correctAnswer: 'Từ một View',
        explanation: 'Một chart luôn được liên kết với một table và hiển thị dữ liệu được lọc và sắp xếp bởi một View cụ thể của table đó.'
      },
      {
        question: 'Tính năng nào cho phép người dùng bấm vào một phần của biểu đồ để xem dữ liệu được chia nhỏ hơn theo một chiều khác?',
        options: ['Filtering', 'Drill Down', 'Sorting', 'Grouping'],
        correctAnswer: 'Drill Down',
        explanation: 'Drill Down là tính năng cho phép phân tích sâu hơn bằng cách điều hướng từ dữ liệu tổng hợp xuống dữ liệu chi tiết hơn ngay trên biểu đồ.'
      }
    ]
  },
};
