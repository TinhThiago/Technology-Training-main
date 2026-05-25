
export const canvasAppsMaterials: Record<string, string> = {
  'ca-intro': `
## Giới thiệu về Canvas Apps
Canvas Apps trong Power Apps cho phép bạn thiết kế giao diện người dùng với sự tự do hoàn toàn, giống như thiết kế một slide trong PowerPoint. Bạn có toàn quyền kiểm soát vị trí, kích thước, và hành vi của từng thành phần (controls) trên màn hình (screens).

### Các khái niệm cốt lõi
*   **Screens (Màn hình):** Một ứng dụng Canvas bao gồm một hoặc nhiều màn hình. Mỗi màn hình là một không gian làm việc nơi bạn xây dựng giao diện cho một tác vụ cụ thể.
*   **Controls (Điều khiển):** Đây là các yếu tố giao diện mà người dùng tương tác, ví dụ như nút bấm (Button), nhãn (Label), ô nhập liệu (Text Input), thư viện (Gallery), biểu mẫu (Form), v.v.
*   **Formulas (Công thức):** Canvas Apps sử dụng các công thức tương tự như trong Excel (ngôn ngữ Power Fx) để định nghĩa logic và hành vi cho ứng dụng.
*   **Connectors (Trình kết nối):** Connectors cho phép ứng dụng của bạn kết nối và tương tác với hàng trăm nguồn dữ liệu và dịch vụ như Dataverse, SQL Server, Office 365, và nhiều dịch vụ bên ngoài.

### Trường hợp sử dụng chính
*   Xây dựng các ứng dụng tập trung vào tác vụ cụ thể, có giao diện tùy chỉnh cao.
*   Các ứng dụng dành cho thiết bị di động với trải nghiệm người dùng được tối ưu hóa.
*   Khi cần tích hợp với nhiều nguồn dữ liệu khác nhau trong một giao diện duy nhất.
  `,
  'ca-export-app': `
## Tạo App Xuất kho tổng hợp
Đây là một bài tập thực tế để áp dụng kiến thức về Canvas App. Ứng dụng này giúp người dùng thực hiện nghiệp vụ xuất kho một cách nhanh chóng.

### Yêu cầu chức năng
1.  **Thiết kế giao diện (UI):**
    *   Một danh sách (Gallery) hoặc Dropdown để chọn khách hàng.
    *   Một Gallery khác để hiển thị danh sách các đơn bán chi tiết của khách hàng được chọn.
    *   Các ô nhập liệu (Text Input) cho phép người dùng nhập "Số lượng xuất thực tế".
    *   Một nút bấm (Button) "Xuất kho".

2.  **Logic tương tác:**
    *   Khi chọn khách hàng, Gallery đơn bán chi tiết phải tự động tải và hiển thị đúng dữ liệu. Công thức thường dùng là \`Filter()\`.

3.  **Xử lý nút "Xuất kho":**
    *   Sử dụng hàm \`Patch()\` hoặc \`Collect()\` để tạo một bản ghi mới trong bảng "Xuất kho" (trong Dataverse). Hàm \`ForAll()\` thường được sử dụng để lặp qua Gallery và ghi nhiều dòng dữ liệu cùng lúc.
  `,
  'ca-chatbot': `
## Tạo App "Chat bot"
Bài tập này hướng dẫn cách tích hợp Canvas App với các dịch vụ AI (như mô hình GPT) thông qua Power Automate để tạo một ứng dụng chatbot đơn giản.

### Các bước thực hiện
1.  **Thiết kế giao diện Chat:** Sử dụng Gallery hiển thị lịch sử và Text Input để nhập câu hỏi.
2.  **Kết nối với Power Automate Flow:** Flow này sẽ nhận tham số "prompt" từ Canvas App.
3.  **Gọi API GPT trong Flow:** Sử dụng action "HTTP" để gửi yêu cầu POST đến mô hình ngôn ngữ.
4.  **Phản hồi lại Canvas App:** Dùng action "Respond to a PowerApp or flow" để trả về câu trả lời.
  `,
  'ca-common-functions': `
## Các hàm Power Fx thông dụng
Power Fx là ngôn ngữ công thức low-code cung cấp sức mạnh cho Canvas Apps.

### Các hàm xử lý dữ liệu
*   **\`Filter(Source, Formula)\`**: Trả về một bảng chứa các bản ghi thỏa mãn điều kiện.
*   **\`LookUp(Source, Formula)\`**: Tìm và trả về bản ghi đầu tiên thỏa mãn điều kiện.
*   **\`Patch(Source, BaseRecord, ChangeRecord)\`**: Tạo mới hoặc sửa đổi bản ghi trong nguồn dữ liệu.
*   **\`SubmitForm(FormName)\`**: Lưu dữ liệu từ một control Form.

### Các hàm về Collection
*   **\`ClearCollect(CollectionName, Items)\`**: Xóa và làm mới dữ liệu trong bộ nhớ tạm.

### Điều hướng và biến
*   **\`Navigate(ScreenName)\`**: Chuyển màn hình.
*   **\`Set(VariableName, Value)\`**: Biến toàn cục.
*   **\`UpdateContext({ Var: Value })\`**: Biến cục bộ trên màn hình.
  `,
  'ca-performance': `
## Tối ưu hóa hiệu năng & Delegation

### 1. Delegation là gì?
Delegation (Ủy thác) là khi Power Apps gửi yêu cầu xử lý dữ liệu (lọc, sắp xếp) đến Server (Dataverse/SQL) để thực hiện, thay vì tải hết dữ liệu về Client xử lý.
*   **Delegable:** Server xử lý, an toàn với triệu dòng dữ liệu.
*   **Non-Delegable:** Client tải tối đa 500-2000 dòng đầu tiên để xử lý. **Rất nguy hiểm** vì kết quả có thể bị sai lệch nếu dữ liệu lớn hơn giới hạn.

### 2. Các hàm CÓ THỂ ủy thác (với Dataverse)
*   \`Filter\`, \`LookUp\`, \`Sort\`, \`SortByColumns\`, \`Patch\`, \`Remove\`.
*   Toán tử: \`=\`, \`<\`, \`>\`, \`In\`.
*   Hàm văn bản: \`StartsWith\`.

### 3. Chiến lược xử lý Delegation
*   **Data Row Limit:** Tăng lên 2000 trong Settings nếu cần thiết.
*   **Pre-filter:** Sử dụng các View (Dataverse Views) đã lọc sẵn ở server.
*   **Dùng With():** Giảm số lần gọi LookUp thừa thãi bằng cách lưu kết quả vào phạm vi của hàm With.
*   **DelayOutput:** Bật cho Text Input tìm kiếm để tránh trigger lọc liên tục khi người dùng đang gõ.

### 4. Tối ưu hóa App.OnStart
*   **Sử dụng \`Concurrent()\`**: Chạy song song nhiều hàm tải dữ liệu collection lúc khởi động.
*   **Lazy Loading**: Chỉ tải dữ liệu của màn hình nào khi người dùng thực sự vào màn hình đó (OnVisible).
  `,
  'ca-tips-tricks': `
## Mẹo và thủ thuật
*   **Sử dụng Components**: Đóng gói các yếu tố lặp lại (Header, Sidebar) thành Component để dễ bảo trì.
*   **Đặt tên có ý nghĩa**: \`galProducts\`, \`btnSubmit\`, \`varCurrentUser\`.
*   **Layout đáp ứng**: Sử dụng Layout Containers thay vì đặt tọa độ pixel tuyệt đối để app chạy tốt trên nhiều kích thước màn hình.
  `,
};
