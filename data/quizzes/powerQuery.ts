import type { Quiz } from '../../types';

export const powerQueryQuizzes: Record<string, Quiz> = {
  'pq-intro': {
    topic: 'Giới thiệu Power Query & Ngôn ngữ M',
    questions: [
      {
        question: 'Mục đích chính của Power Query là gì?',
        options: ['Tạo các biểu đồ và báo cáo trực quan.', 'Viết các ứng dụng di động low-code.', 'Kết nối, làm sạch và định hình lại dữ liệu (ETL).', 'Tự động hóa các luồng công việc.'],
        correctAnswer: 'Kết nối, làm sạch và định hình lại dữ liệu (ETL).',
        explanation: 'Power Query là công cụ ETL (Extract, Transform, Load) chuyên dụng, giúp bạn chuẩn bị dữ liệu trước khi đưa vào phân tích hoặc lưu trữ.'
      },
      {
        question: 'Ngôn ngữ lập trình nào hoạt động "phía sau" giao diện người dùng của Power Query?',
        options: ['DAX', 'Python', 'SQL', 'Ngôn ngữ M'],
        correctAnswer: 'Ngôn ngữ M',
        explanation: 'Mọi thao tác nhấp chuột trên giao diện Power Query Editor đều tạo ra mã bằng ngôn ngữ M, bạn có thể xem và chỉnh sửa nó trong Advanced Editor.'
      }
    ]
  },
  'pq-common-transforms': {
    topic: 'Các phép transform dữ liệu cơ bản',
    questions: [
      {
        question: 'Để loại bỏ các hàng có giá trị "null" trong một cột, bạn nên sử dụng chức năng nào?',
        options: ['Remove Columns', 'Split Column', 'Filter Rows', 'Replace Values'],
        correctAnswer: 'Filter Rows',
        explanation: 'Chức năng Lọc (Filter) cho phép bạn giữ lại hoặc loại bỏ các hàng dựa trên các điều kiện, bao gồm cả việc loại bỏ các giá trị trống hoặc null.'
      },
      {
        question: 'Bạn có một cột "Thành phố, Quốc gia" (ví dụ: "Hà Nội, Việt Nam"). Bạn muốn tách nó thành hai cột riêng biệt. Bạn sẽ dùng chức năng gì?',
        options: ['Change Data Type', 'Merge Queries', 'Split Column', 'Group By'],
        correctAnswer: 'Split Column',
        explanation: 'Chức năng "Split Column by Delimiter" (Tách cột theo ký tự phân tách) là lựa chọn hoàn hảo để tách một cột thành nhiều cột dựa trên một ký tự như dấu phẩy, khoảng trắng, v.v.'
      }
    ]
  },
  'pq-advanced-transforms': {
    topic: 'Các kỹ thuật transform nâng cao',
    questions: [
      {
        question: 'Chức năng nào được sử dụng để chuyển đổi một bảng có các cột "Tháng 1", "Tháng 2", "Tháng 3" thành một bảng chỉ có hai cột "Tháng" và "Doanh thu"?',
        options: ['Pivot Columns', 'Group By', 'Unpivot Columns', 'Conditional Column'],
        correctAnswer: 'Unpivot Columns',
        explanation: 'Unpivot dùng để chuyển đổi dữ liệu từ định dạng "rộng" sang định dạng "dài", rất hữu ích cho việc chuẩn hóa dữ liệu để phân tích.'
      },
      {
        question: 'Để tính tổng doanh thu cho mỗi danh mục sản phẩm, bạn nên sử dụng chức năng nào?',
        options: ['Filter Rows', 'Merge Queries', 'Group By', 'Append Queries'],
        correctAnswer: 'Group By',
        explanation: 'Group By cho phép bạn nhóm các hàng dựa trên một hoặc nhiều cột và thực hiện các phép tính tổng hợp (Sum, Average, Count) trên mỗi nhóm.'
      }
    ]
  },
  'pq-merge-append': {
    topic: 'Kết hợp Queries (Merge & Append)',
    questions: [
      {
        question: 'Khi nào bạn nên sử dụng "Append Queries"?',
        options: ['Khi bạn muốn thêm các cột từ một bảng khác dựa trên một khóa chung.', 'Khi bạn muốn xếp chồng các hàng từ nhiều bảng có cấu trúc tương tự.', 'Khi bạn muốn tính tổng dữ liệu.', 'Khi bạn muốn lọc dữ liệu.'],
        correctAnswer: 'Khi bạn muốn xếp chồng các hàng từ nhiều bảng có cấu trúc tương tự.',
        explanation: 'Append (nối) được sử dụng để kết hợp các hàng, tương tự như UNION trong SQL. Ví dụ: nối dữ liệu bán hàng tháng 1 và tháng 2.'
      },
      {
        question: '"Merge Queries" trong Power Query tương đương với khái niệm nào trong SQL?',
        options: ['UNION', 'GROUP BY', 'JOIN', 'SELECT'],
        correctAnswer: 'JOIN',
        explanation: 'Merge (phối) được sử dụng để kết hợp các cột từ hai bảng dựa trên một hoặc nhiều cột chung, tương tự như các loại JOIN trong SQL.'
      }
    ]
  },
  'pq-query-folding': {
    topic: 'Chủ đề chuyên sâu: Query Folding',
    questions: [
      {
        question: 'Query Folding là gì?',
        options: ['Một cách để nhóm các query lại với nhau.', 'Quá trình Power Query dịch các bước transform thành ngôn ngữ của nguồn dữ liệu (ví dụ: SQL) để xử lý tại nguồn.', 'Một tính năng để đổi tên các bước đã áp dụng.', 'Một lỗi xảy ra khi query quá phức tạp.'],
        correctAnswer: 'Quá trình Power Query dịch các bước transform thành ngôn ngữ của nguồn dữ liệu (ví dụ: SQL) để xử lý tại nguồn.',
        explanation: 'Query Folding là tính năng hiệu năng quan trọng nhất, giúp đẩy việc xử lý nặng về phía máy chủ nguồn, giảm thời gian làm mới và lưu lượng mạng.'
      },
      {
        question: 'Bạn có thể kiểm tra xem Query Folding có còn hoạt động sau một bước transform hay không bằng cách nào?',
        options: ['Kiểm tra thanh công thức M.', 'Chuột phải vào bước đó và xem tùy chọn "View Native Query" có sáng lên không.', 'Kiểm tra phần xem trước dữ liệu.', 'Không có cách nào để kiểm tra.'],
        correctAnswer: 'Chuột phải vào bước đó và xem tùy chọn "View Native Query" có sáng lên không.',
        explanation: 'Nếu "View Native Query" có thể nhấp được, điều đó có nghĩa là Power Query có thể dịch bước đó và tất cả các bước trước đó thành một câu lệnh gốc, và Query Folding đang hoạt động.'
      },
      {
        question: 'Hành động nào sau đây có khả năng cao sẽ "phá vỡ" Query Folding?',
        options: ['Lọc một cột văn bản (Filter Rows)', 'Sắp xếp một cột ngày tháng (Sort Rows)', 'Thêm một cột Index (Add Index Column)', 'Xóa một vài cột (Remove Columns)'],
        correctAnswer: 'Thêm một cột Index (Add Index Column)',
        explanation: 'Việc thêm cột Index là một phép transform chỉ có thể thực hiện bởi Power Query engine, nó không có tương đương trong SQL, do đó nó sẽ phá vỡ Query Folding.'
      }
    ]
  },
  'pq-in-power-bi': {
    topic: 'Ứng dụng trong Power BI (Dataflows & Linked Tables)',
    questions: [
      {
        question: 'Lợi ích chính của việc sử dụng Power BI Dataflow là gì?',
        options: ['Tạo visual đẹp hơn.', 'Tái sử dụng logic chuẩn bị dữ liệu (ETL) cho nhiều báo cáo.', 'Tăng tốc độ làm mới dữ liệu từ nguồn.', 'Chỉ hoạt động trên Power BI Desktop.'],
        correctAnswer: 'Tái sử dụng logic chuẩn bị dữ liệu (ETL) cho nhiều báo cáo.',
        explanation: 'Dataflow giúp tập trung hóa việc chuẩn bị dữ liệu, cho phép logic ETL được tạo một lần và tái sử dụng bởi nhiều người dùng và bộ dữ liệu, đảm bảo tính nhất quán.'
      },
      {
        question: 'Linked Tables trong Dataflows cho phép bạn làm gì?',
        options: ['Kết nối một Dataflow với một Power App.', 'Sử dụng lại một bảng đã được xử lý trong một Dataflow này từ một Dataflow khác.', 'Tạo một liên kết web đến dữ liệu.', 'Join một bảng SQL với một file Excel.'],
        correctAnswer: 'Sử dụng lại một bảng đã được xử lý trong một Dataflow này từ một Dataflow khác.',
        explanation: 'Linked Tables là tính năng cốt lõi để tái sử dụng và phân tách logic, cho phép bạn xây dựng một nguồn dữ liệu đáng tin cậy và sử dụng nó trên nhiều dataflow khác nhau.'
      }
    ]
  },
  'pq-in-power-apps': {
    topic: 'Ứng dụng trong Power Apps',
    questions: [
      {
        question: 'Giới hạn chính của việc sử dụng truy vấn Power Query trong Power Apps là gì?',
        options: ['Chúng chỉ có thể kết nối với SharePoint.', 'Chúng chỉ dùng để đọc dữ liệu (read-only) và không thể ủy thác (non-delegable).', 'Chúng rất chậm.', 'Chúng yêu cầu phải có giấy phép Premium.'],
        correctAnswer: 'Chúng chỉ dùng để đọc dữ liệu (read-only) và không thể ủy thác (non-delegable).',
        explanation: 'Bạn không thể ghi dữ liệu trở lại nguồn thông qua truy vấn Power Query, và phải luôn cẩn thận với giới hạn số lượng bản ghi do không thể ủy thác.'
      },
      {
        question: 'Trường hợp nào sau đây là phù hợp nhất để sử dụng Power Query trong Canvas App?',
        options: ['Để tạo một form cho người dùng nhập và lưu dữ liệu.', 'Để hiển thị một danh sách lớn hơn 10,000 sản phẩm có thể tìm kiếm.', 'Để tải và định hình một danh sách các danh mục sản phẩm không thay đổi thường xuyên.', 'Để cập nhật tồn kho theo thời gian thực.'],
        correctAnswer: 'Để tải và định hình một danh sách các danh mục sản phẩm không thay đổi thường xuyên.',
        explanation: 'Power Query trong Power Apps rất lý tưởng cho việc chuẩn bị dữ liệu tham chiếu, dữ liệu tĩnh hoặc dữ liệu cần các phép biến đổi phức tạp mà Power Fx khó thực hiện.'
      }
    ]
  },
  'pq-in-excel': {
    topic: 'Ứng dụng trong Excel (Get & Transform)',
    questions: [
      {
        question: 'Trong Excel, Power Query được biết đến dưới tên gì trong giao diện người dùng?',
        options: ['Power Pivot', 'Data Streamer', 'Get & Transform Data', 'Formulas'],
        correctAnswer: 'Get & Transform Data',
        explanation: 'Trong tab "Data" của Excel, nhóm chức năng Power Query được gọi là "Get & Transform Data".'
      },
      {
        question: 'Kịch bản nào là phổ biến nhất khi sử dụng Power Query trong Excel?',
        options: ['Gửi email hàng loạt.', 'Tự động hóa việc kết hợp dữ liệu từ nhiều file và làm sạch chúng cho báo cáo hàng tháng.', 'Tạo các biểu đồ động.', 'Viết các macro VBA phức tạp.'],
        correctAnswer: 'Tự động hóa việc kết hợp dữ liệu từ nhiều file và làm sạch chúng cho báo cáo hàng tháng.',
        explanation: 'Thế mạnh lớn nhất của Power Query trong Excel là tự động hóa các quy trình ETL lặp đi lặp lại, tiết kiệm hàng giờ làm việc thủ công.'
      }
    ]
  },
  'pq-best-practices': {
    topic: 'Mẹo & Tối ưu hóa khác',
    questions: [
      {
        question: 'Phương pháp "Staging Queries" đề cập đến điều gì?',
        options: ['Tạo các query phức tạp nhất có thể.', 'Tạo các query gốc để lấy dữ liệu thô (vô hiệu hóa tải), sau đó tham chiếu đến chúng để biến đổi.', 'Đổi tên tất cả các query để có tiền tố "Staging_".', 'Chỉ sử dụng khi kết nối với SQL Server.'],
        correctAnswer: 'Tạo các query gốc để lấy dữ liệu thô (vô hiệu hóa tải), sau đó tham chiếu đến chúng để biến đổi.',
        explanation: 'Staging Queries giúp tách biệt logic lấy dữ liệu và logic biến đổi, giúp các truy vấn dễ quản lý hơn và tránh gọi đến nguồn dữ liệu nhiều lần.'
      },
      {
        question: 'Tại sao việc xóa các cột không cần thiết ở các bước đầu tiên lại quan trọng?',
        options: ['Vì có giới hạn về số lượng cột trong Power Query.', 'Nó làm giảm lượng dữ liệu cần xử lý trong các bước sau, giúp tăng hiệu suất.', 'Nó không quan trọng, bạn có thể xóa cột ở bất kỳ đâu.', 'Để làm cho thanh cuộn ngang nhỏ hơn.'],
        correctAnswer: 'Nó làm giảm lượng dữ liệu cần xử lý trong các bước sau, giúp tăng hiệu suất.',
        explanation: 'Việc giảm "chiều rộng" của bảng dữ liệu sớm sẽ làm cho tất cả các hoạt động tiếp theo (lọc, nhóm, v.v.) nhanh hơn vì có ít dữ liệu hơn để xử lý.'
      }
    ]
  },
};
