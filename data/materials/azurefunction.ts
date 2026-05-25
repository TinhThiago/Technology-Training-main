export const azurefunctionMaterials: Record<string, string> = {
  'ok-azurefunction': `
# Azure Function trong Power Platform

## 1. Azure Function là gì?

Azure Function là dịch vụ serverless của Microsoft Azure, cho phép chạy code theo sự kiện mà không cần quản lý server.

## 2. Khi nào dùng Azure Function?

* Cần xử lý logic backend phức tạp.
* Cần gọi API ngoài hệ thống.
* Cần xử lý dữ liệu lớn hoặc chạy tác vụ nền.
* Cần tách logic khỏi Power Apps / Power Automate.
* Cần tích hợp với Dataverse, SharePoint, SQL, Teams hoặc hệ thống bên ngoài.

## 3. Kiến trúc Azure Function

| Thành phần | Mô tả |
|---|---|
| Trigger | Cách function được kích hoạt |
| Binding | Kết nối input/output với dịch vụ khác |
| Function App | Nơi chứa nhiều function |
| App Settings | Lưu cấu hình như connection string, secret |
| Application Insights | Theo dõi log, lỗi và hiệu năng |

## 4. Các loại Trigger phổ biến

| Trigger | Mô tả |
|---|---|
| HTTP Trigger | Gọi function thông qua URL/API |
| Timer Trigger | Chạy theo lịch |
| Queue Trigger | Chạy khi có message trong queue |
| Blob Trigger | Chạy khi có file trong Azure Storage |
| Service Bus Trigger | Chạy khi nhận message từ Service Bus |

## 5. Tích hợp với Power Platform

* Power Apps gọi Azure Function qua Custom Connector.
* Power Automate gọi Azure Function bằng HTTP action.
* Plugin gọi Azure Function để xử lý logic bên ngoài Dataverse.
* Azure Function gọi Dataverse Web API để đọc/ghi dữ liệu.

## 6. Ví dụ sử dụng

* Gửi thông báo Teams nâng cao.
* Đồng bộ dữ liệu từ hệ thống ngoài vào Dataverse.
* Xử lý file Excel/PDF.
* Tạo API trung gian cho Power Apps.
* Tự động chạy batch job theo lịch.
`
}