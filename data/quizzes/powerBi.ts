import type { Quiz } from '../../types';

export const powerBiQuizzes: Record<string, Quiz> = {
  'pbi-intro': {
    topic: 'Giới thiệu Power BI & Workflow',
    questions: [
      {
        question: 'Thành phần nào của Power BI chủ yếu được sử dụng để xây dựng và thiết kế các báo cáo?',
        options: ['Power BI Service', 'Power BI Mobile', 'Power BI Desktop', 'Power BI Report Server'],
        correctAnswer: 'Power BI Desktop',
        explanation: 'Power BI Desktop là ứng dụng miễn phí dành cho Windows, là công cụ chính để kết nối, chuyển đổi dữ liệu và xây dựng các báo cáo trực quan.'
      },
      {
        question: 'Sau khi xây dựng xong một báo cáo trong Power BI Desktop, bước tiếp theo trong quy trình làm việc điển hình là gì?',
        options: ['Chia sẻ file .pbix qua email', 'Xuất bản (Publish) báo cáo lên Power BI Service', 'Xóa file .pbix', 'Bắt đầu xây dựng một báo cáo mới'],
        correctAnswer: 'Xuất bản (Publish) báo cáo lên Power BI Service',
        explanation: 'Xuất bản lên Power BI Service là bước cần thiết để có thể chia sẻ báo cáo, tạo dashboard và thiết lập làm mới dữ liệu tự động.'
      }
    ]
  },
  'pbi-data-modeling': {
    topic: 'Data Modeling & Star Schema',
    questions: [
      {
        question: 'Mô hình dữ liệu nào được khuyến nghị sử dụng trong Power BI để đạt hiệu suất tốt nhất?',
        options: ['Snowflake Schema', 'Flat Table (một bảng duy nhất)', 'Star Schema (Lược đồ hình sao)', 'Transactional Model'],
        correctAnswer: 'Star Schema (Lược đồ hình sao)',
        explanation: 'Star Schema với các bảng Dimension lọc các bảng Fact là cấu trúc được tối ưu hóa cho công cụ của Power BI, giúp các phép tính DAX và tương tác báo cáo nhanh hơn.'
      },
      {
        question: 'Trong Star Schema, bảng nào chứa các giá trị số dùng để tổng hợp (ví dụ: Doanh thu, Số lượng)?',
        options: ['Dimension Table (Bảng chiều)', 'Fact Table (Bảng thực tế)', 'Bridge Table (Bảng bắc cầu)', 'Lookup Table (Bảng tra cứu)'],
        correctAnswer: 'Fact Table (Bảng thực tế)',
        explanation: 'Bảng Fact chứa dữ liệu về các sự kiện hoặc giao dịch và chứa các số liệu (measures) mà bạn muốn phân tích.'
      }
    ]
  },
  'pbi-dax-intro': {
    topic: 'Giới thiệu về DAX',
    questions: [
      {
        question: 'Sự khác biệt chính giữa Measure và Calculated Column là gì?',
        options: ['Measure được tính toán khi làm mới dữ liệu, còn Calculated Column được tính toán tức thì.', 'Measure được tính toán tức thì dựa trên ngữ cảnh lọc, còn Calculated Column được tính toán cho từng hàng và lưu trong mô hình.', 'Không có sự khác biệt, chúng chỉ là hai tên gọi khác nhau.', 'Measure chỉ dùng cho số, còn Calculated Column chỉ dùng cho văn bản.'],
        correctAnswer: 'Measure được tính toán tức thì dựa trên ngữ cảnh lọc, còn Calculated Column được tính toán cho từng hàng và lưu trong mô hình.',
        explanation: 'Hiểu rõ sự khác biệt này là rất quan trọng. Hầu hết các phép tính tổng hợp nên được thực hiện bằng Measures để tối ưu hóa hiệu suất và kích thước mô hình.'
      },
      {
        question: 'Hàm nào được coi là mạnh mẽ nhất và quan trọng nhất trong DAX, cho phép bạn thay đổi ngữ cảnh lọc?',
        options: ['SUM()', 'FILTER()', 'RELATED()', 'CALCULATE()'],
        correctAnswer: 'CALCULATE()',
        explanation: 'CALCULATE() là trái tim của DAX. Nó cho phép bạn sửa đổi ngữ cảnh lọc đến từ báo cáo, là chìa khóa cho hầu hết các phép tính phân tích nâng cao.'
      }
    ]
  },
  'pbi-report-design': {
    topic: 'Thiết kế Báo cáo Tương tác Nâng cao',
    questions: [
      {
        question: 'Tính năng nào cho phép bạn lưu lại trạng thái của một trang báo cáo (bộ lọc, slicer, v.v.) và tạo các nút để chuyển đổi giữa các trạng thái này?',
        options: ['Drillthrough', 'Tooltips', 'Conditional Formatting', 'Bookmarks'],
        correctAnswer: 'Bookmarks',
        explanation: 'Bookmarks (Dấu trang) rất linh hoạt, cho phép bạn tạo ra các câu chuyện dữ liệu, chuyển đổi giao diện và cung cấp trải nghiệm điều hướng tùy chỉnh.'
      },
      {
        question: 'Để cho phép người dùng điều hướng từ một biểu đồ tổng quan sang một trang chi tiết hơn trong khi vẫn giữ nguyên bộ lọc, bạn nên sử dụng tính năng nào?',
        options: ['Bookmarks', 'Drillthrough', 'Slicers', 'Cross-filtering'],
        correctAnswer: 'Drillthrough',
        explanation: 'Drillthrough được thiết kế đặc biệt cho kịch bản này, giúp người dùng "khoan" sâu vào dữ liệu để xem chi tiết đằng sau một con số tổng hợp.'
      }
    ]
  },
  'pbi-service': {
    topic: 'Power BI Service (Publish, Share, Refresh)',
    questions: [
      {
        question: 'Sự khác biệt chính giữa Report và Dashboard trong Power BI Service là gì?',
        options: ['Report có nhiều trang, Dashboard chỉ có một trang.', 'Report chỉ có ở Desktop, Dashboard chỉ có ở Service.', 'Report có tính tương tác cao, Dashboard là một canvas hiển thị các KPI chính được ghim từ các báo cáo.', 'Không có sự khác biệt.'],
        correctAnswer: 'Report có tính tương tác cao, Dashboard là một canvas hiển thị các KPI chính được ghim từ các báo cáo.',
        explanation: 'Dashboards được thiết kế để theo dõi tổng quan, trong khi Reports dùng để phân tích và khám phá sâu. Một Dashboard có thể chứa các visual từ nhiều báo cáo khác nhau.'
      },
      {
        question: 'Để làm mới dữ liệu tự động cho một báo cáo sử dụng nguồn dữ liệu là SQL Server trong mạng nội bộ của công ty, bạn cần phải có thành phần nào?',
        options: ['Một giấy phép Power BI Premium.', 'Ứng dụng Power BI Mobile.', 'Một On-premises data gateway.', 'Một tài khoản quản trị viên.'],
        correctAnswer: 'Một On-premises data gateway.',
        explanation: 'Data Gateway hoạt động như một cầu nối an toàn, cho phép Power BI Service (trên đám mây) kết nối và làm mới dữ liệu từ các nguồn nội bộ (on-premises).'
      }
    ]
  },
  'pbi-report-agg': {
    topic: 'Tạo report Aggregated data',
    questions: [
      {
        question: 'Loại visual nào cho phép người dùng lọc dữ liệu trên toàn bộ trang báo cáo một cách trực quan?',
        options: ['Table (Bảng)', 'Card (Thẻ)', 'Slicer (Bộ lọc)', 'Column chart (Biểu đồ cột)'],
        correctAnswer: 'Slicer (Bộ lọc)',
        explanation: 'Slicer được thiết kế đặc biệt để cung cấp khả năng lọc tương tác, giúp người dùng dễ dàng khám phá các lát cắt khác nhau của dữ liệu.'
      },
      {
        question: 'Để hiển thị tỷ lệ phần trăm đóng góp của các danh mục vào một tổng thể, visual nào sau đây là phù hợp nhất?',
        options: ['Line chart (Biểu đồ đường)', 'Slicer (Bộ lọc)', 'Doughnut chart (Biểu đồ vành khuyên)', 'Table (Bảng)'],
        correctAnswer: 'Doughnut chart (Biểu đồ vành khuyên)',
        explanation: 'Biểu đồ vành khuyên (hoặc biểu đồ tròn) rất hiệu quả trong việc trực quan hóa mối quan hệ "một phần của tổng thể" (part-to-whole).'
      }
    ]
  },
  'pbi-report-detail': {
    topic: 'Tạo report Detail data (Đơn bán chi tiết)',
    questions: [
      {
        question: 'Khi tính toán tổng lũy kế (running total) trong Power Query, bước nào là quan trọng nhất cần thực hiện đầu tiên?',
        options: ['Thêm cột Index', 'Sắp xếp dữ liệu theo cột thời gian', 'Đổi tên các cột', 'Lọc ra các hàng trống'],
        correctAnswer: 'Sắp xếp dữ liệu theo cột thời gian',
        explanation: 'Việc sắp xếp dữ liệu đúng thứ tự (thường là theo ngày tháng tăng dần) là tối quan trọng để đảm bảo rằng phép tính lũy kế được cộng dồn một cách chính xác.'
      }
    ]
  },
  'pbi-report-margin': {
    topic: 'Tạo report Margin',
    questions: [
      {
        question: 'Tính năng nào của Power BI cho phép các visual trên cùng một trang tự động lọc lẫn nhau khi người dùng tương tác với một trong số chúng?',
        options: ['Bookmarks (Dấu trang)', 'Drillthrough (Xem chi tiết)', 'Cross-filtering and cross-highlighting (Lọc và tô sáng chéo)', 'Tooltips (Chú giải công cụ)'],
        correctAnswer: 'Cross-filtering and cross-highlighting (Lọc và tô sáng chéo)',
        explanation: 'Đây là hành vi tương tác mặc định trong Power BI. Khi bạn chọn một điểm dữ liệu trên một visual, nó sẽ tự động lọc hoặc tô sáng các visual khác trên trang báo cáo.'
      }
    ]
  },
};