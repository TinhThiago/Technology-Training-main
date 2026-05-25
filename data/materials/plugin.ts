export const pluginMaterials: Record<string, string> = {
  'ok-plugin': `
# Plugin trong Power Platform

## 1. Plugin là gì?

Plugin là đoạn code C# chạy trên Dataverse để xử lý logic nghiệp vụ nâng cao khi dữ liệu được tạo, sửa, xóa hoặc gán quyền.

## 2. Khi nào dùng Plugin?

* Cần xử lý logic phức tạp mà Business Rule / Power Automate không phù hợp.
* Cần chạy đồng bộ trước hoặc sau khi dữ liệu thay đổi.
* Cần validate dữ liệu trước khi lưu.
* Cần tự động cập nhật dữ liệu liên quan trong Dataverse.

## 3. Kiến trúc Plugin

| Thành phần | Mô tả |
|---|---|
| Dataverse Event Pipeline | Luồng xử lý sự kiện trong Dataverse |
| Message | Hành động như Create, Update, Delete |
| Stage | PreValidation, PreOperation, PostOperation |
| Execution Context | Chứa thông tin bản ghi, user, message |
| Organization Service | Dùng để Create, Retrieve, Update, Delete dữ liệu |
| Tracing Service | Ghi log khi debug plugin |

## 4. Các Stage quan trọng

| Stage | Ý nghĩa |
|---|---|
| PreValidation | Chạy trước kiểm tra bảo mật và transaction |
| PreOperation | Chạy trước khi dữ liệu được lưu vào database |
| PostOperation | Chạy sau khi dữ liệu đã được lưu |

## 5. Ví dụ sử dụng

* Kiểm tra dữ liệu bắt buộc trước khi lưu.
* Tự động sinh mã hồ sơ.
* Cập nhật trạng thái bản ghi liên quan.
* Chặn xóa dữ liệu nếu không đủ điều kiện.
`
}