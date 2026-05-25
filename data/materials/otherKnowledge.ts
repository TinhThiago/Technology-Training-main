
// Sub-module materials for Other Knowledge
export const otherKnowledgeMaterials: Record<string, string> = {
  'ok-performance': `
## Tối ưu hiệu năng cho Power Apps quy mô lớn

Xây dựng ứng dụng Power Apps không chỉ dừng lại ở việc kéo thả. Đối với các ứng dụng quy mô lớn (Enterprise Grade), hiệu năng là yếu tố quyết định sự thành bại.

### 1. Tại sao hiệu năng lại quan trọng?
*   **Kẻ hủy diệt Adoption:** Ứng dụng chậm khiến người dùng chán nản, từ chối sử dụng và quay lại với các công cụ thủ công (như Excel/Giấy).
*   **Hư hại thương hiệu:** Hiệu năng kém tạo định kiến "Power Apps là yếu kém" trong tâm trí người dùng, ảnh hưởng đến tất cả các dự án trong tương lai.
*   **Khuếch đại vấn đề:** Trong ứng dụng lớn, một sai lầm nhỏ về logic (ví dụ: vòng lặp thừa) sẽ trở thành nút thắt cổ chai lớn ảnh hưởng đến hàng ngàn người dùng hàng ngày.

### 2. Định nghĩa một ứng dụng "Lớn"
*   **Cấu trúc phức tạp:** Có hàng chục màn hình, hàng trăm component và các luồng điều hướng chồng chéo.
*   **Nhiều nguồn dữ liệu:** Kết nối đồng thời với Dataverse, SQL Server, và nhiều API bên ngoài.
*   **Logic nghiệp vụ nặng:** Các công thức tính toán phức tạp, Business Rules dày đặc và các quy tắc xác thực liên tục.
*   **Lưu lượng truy cập cao:** Hàng trăm hoặc hàng ngàn người dùng hoạt động đồng thời (Daily Active Users).

### 3. Tư duy về hiệu năng (Performance Mindset)
*   **Đo lường trước (Measure First):** Luôn thiết lập các chỉ số cơ bản (baselines) trước khi thực hiện bất kỳ thay đổi tối ưu nào.
*   **Tối ưu hóa quy luật 80%:** Tập trung vào các đường dẫn người dùng phổ biến nhất (Common Paths), thay vì lãng phí thời gian cho những lỗi nhỏ ở các góc khuất.
*   **Giữ mọi thứ đơn giản:** Các pattern đơn giản và dễ dự đoán luôn chiến thắng các cấu trúc phức tạp "thông minh" nhưng khó kiểm soát.
*   **Mobile là nền tảng:** Luôn thiết kế cho thiết bị di động và băng thông thấp làm điểm bắt đầu. Nếu nó chạy tốt trên điện thoại 4G, nó sẽ chạy tuyệt vời trên Desktop cáp quang.

### 4. 5 Đòn bẩy hiệu năng cốt lõi
*   **Data Access (Truy cập dữ liệu):** Cách bạn truy vấn và lấy thông tin từ nguồn dữ liệu quyết định hiệu năng cơ bản. Luôn ưu tiên Filter tại nguồn (Delegation).
*   **App Structure (Cấu trúc ứng dụng):** Tổ chức màn hình và hệ thống phân cấp điều khiển ảnh hưởng trực tiếp đến tốc độ render và mức sử dụng bộ nhớ.
*   **Formula Design (Thiết kế công thức):** Các tính toán hiệu quả và quản lý trạng thái thông minh giúp ngăn ngừa các chu kỳ tính toán lại không cần thiết.
*   **Media & Controls (Phương tiện & Điều khiển):** Các yếu tố hình ảnh và component cần được tối ưu hóa để duy trì tương tác mượt mà.
*   **Network Conditions (Điều kiện mạng):** Khả năng của thiết bị và giới hạn kết nối định hình trải nghiệm thực tế của người dùng.

### 5. Chiến lược Modular hóa
Đừng xây dựng một ứng dụng "vạn năng" (God App) với 100 màn hình.
*   **Giải pháp:** Chia nhỏ thành các ứng dụng tập trung cho từng quy trình kinh doanh cụ thể.
*   **Hub App:** Tạo một ứng dụng điều hướng (Hub) để kết nối gia đình các ứng dụng của bạn.
*   **Hiệu quả:** Các ứng dụng nhỏ dễ đo lường, tinh chỉnh và vận hành mượt mà hơn.

### 6. Giám sát và Kiểm tra
*   **Sử dụng Monitor:** Kiểm tra thời gian thực các lệnh gọi mạng, kích thước payload và phát hiện các lỗi không hiển thị cho người dùng.
*   **App Checker:** Luôn rà soát các gợi ý về hiệu năng (Performance Hints) ngay trong quá trình phát triển.
*   **Telemetry:** Ghi log các sự kiện quan trọng vào Dataverse hoặc Application Insights để theo dõi xu hướng hiệu năng theo thời gian.
`,
  'ok-fabric-db': `
## Storage data - Fabric
Microsoft Fabric cung cấp các giải pháp lưu trữ dữ liệu hiện đại cho Power Platform, bao gồm Warehouse, Lakehouse, và SQL Database.
`,
  'ok-pcf': `
## Power Apps Code Components (PCF)
PCF (Power Apps Component Framework) cho phép các nhà phát triển tạo ra các thành phần giao diện người dùng tùy chỉnh bằng TypeScript và React.
`,
'ok-plugin': `
## Plugin trên Dataverse
Plugin là đoạn code C# chạy trên Dataverse để xử lý logic nghiệp vụ nâng cao khi dữ liệu được tạo, sửa, xóa hoặc gán quyền.
`, 
'ok-azurefunction': `
## Azure Function
Azure Function là dịch vụ serverless của Microsoft Azure, cho phép chạy code theo sự kiện mà không cần quản lý server.
`,
  'ok-git': `
## Quản lý phiên bản với Git
Git là hệ thống quản lý phiên bản phân tán giúp theo dõi các thay đổi trong mã nguồn và hỗ trợ làm việc nhóm hiệu quả.
`,
  'ok-agile': `
## Agile và Scrum
Agile là phương pháp phát triển phần mềm linh hoạt, trong đó Scrum là một framework phổ biến tập trung vào việc chuyển giao giá trị theo từng chu kỳ ngắn (Sprints).
`,
};
