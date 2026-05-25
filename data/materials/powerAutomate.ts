
export const powerAutomateMaterials: Record<string, string> = {
  'pa-intro': `
## Giới thiệu về Power Automate
Power Automate giúp tự động hóa các tác vụ lặp đi lặp lại giữa các ứng dụng và dịch vụ.

### Các thành phần chính
*   **Triggers:** Sự kiện bắt đầu flow (Ví dụ: Một dòng mới được thêm vào Dataverse).
*   **Actions:** Tác vụ thực hiện (Ví dụ: Gửi Email, Cập nhật bản ghi).
*   **Connectors:** Cầu nối giao tiếp (Dataverse, Outlook, Teams...).

### Các loại Cloud Flows
1.  **Automated flow:** Chạy tự động khi có sự kiện dữ liệu.
2.  **Instant flow:** Chạy khi người dùng bấm nút.
3.  **Scheduled flow:** Chạy theo lịch trình (hàng ngày/tuần).
  `,
  'pa-triggers': `
## Sử dụng Triggers (Dataverse)
Trigger mạnh mẽ nhất là **"When a row is added, modified or deleted"**.

### Logic cập nhật tồn kho
1.  **Trigger:** Khi một hàng được thêm vào bảng "Xuất kho".
2.  **Get Product:** Lấy thông tin sản phẩm liên quan qua Lookup.
3.  **Update row:** Cập nhật bảng "Sản phẩm", lấy Tồn kho hiện tại trừ đi Số lượng xuất.
  `,
  'pa-scheduled': `
## Flow theo lịch
Sử dụng trigger **Recurrence** để chạy các tác vụ định kỳ.
*   **Kịch bản:** 8 giờ sáng hàng ngày, lấy danh sách "Đơn bán" của hôm qua, tính tổng và gửi báo cáo cho quản lý qua Teams hoặc Email.
  `,
  'pa-expressions': `
## Làm chủ Biểu thức (Expressions)
*   \`concat()\`: Nối chuỗi.
*   \`utcNow()\`: Thời gian hiện tại.
*   \`formatDateTime()\`: Định dạng ngày tháng.
*   \`if()\`: Logic điều kiện.
## Training Filter Expressions
*| Operator | Description |
*|-----------|-------------|
*| eq | Equal to |
*| ne | Not equal to |
*| contains | Contains |
*| not contains | Does not contain |
*| gt | Greater than |
*| lt | Less than |
*| ge | Greater than or equal to |
*| le | Less than or equal to |
*| and | And |
*| or | Or |
*| startswith | Start with the specified value |
*| endswith | End with the specified value |
  `,
  'pa-error-handling': `
## Xử lý lỗi
*   **Configure run after:** Cấu hình một action chạy khi action trước đó thất bại (failed).
*   **Scopes:** Nhóm các hành động vào khối "Try" và "Catch" để quản lý lỗi tập trung.
  `,
  'pa-best-practices': `
## Tối ưu hóa flow
*   **Lọc tại nguồn (Filter Query):** Luôn dùng Filter Query trong action "List rows" để Server chỉ trả về đúng dữ liệu cần, không lấy dư thừa.
*   **Concurrency Control:** Bật trong "Apply to each" để xử lý các mục trong mảng song song thay vì tuần tự, giúp flow chạy nhanh hơn gấp nhiều lần.
  `,
};
