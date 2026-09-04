export const codeAppsMaterials: Record<string, string> = {
  'ok-code-apps': `
## Power Apps Code apps

**Code apps** cho phép xây dựng ứng dụng web bằng mã nguồn, phát triển cục bộ trong IDE rồi chạy trên Power Platform. Bạn có thể dùng React, Vue hoặc framework phù hợp và tự kiểm soát giao diện, logic ứng dụng.

<p class="mb-4 text-sm text-gray-600">Tham khảo: <a class="text-blue-600 underline" href="https://learn.microsoft.com/vi-vn/power-apps/developer/code-apps/">Microsoft Learn — Code apps</a>. Đối chiếu tài liệu ngày 04/09/2026; tính năng và công cụ có thể thay đổi.</p>

### 1. Điều kiện và lưu ý

* Chuẩn bị IDE, Node.js LTS, npm, Git và Power Apps CLI.
* Quản trị viên cần bật **Enable code apps** tại Power Platform admin center → Environments → chọn môi trường → Settings → Product → Features.
* Theo tài liệu hiện tại, người dùng cuối cần **Power Apps Premium** để chạy code apps.
* Nền tảng hỗ trợ xác thực Microsoft Entra và áp dụng chính sách quản trị như DLP, Conditional Access.
* Không hỗ trợ Power Apps for Windows, tích hợp SharePoint forms hoặc Power Platform Git integration. Đối chiếu lại giới hạn trước khi triển khai.

<p class="mb-4 text-sm text-gray-600">Nguồn: <a class="text-blue-600 underline" href="https://learn.microsoft.com/vi-vn/power-apps/developer/code-apps/overview">Overview — điều kiện, quản trị và giới hạn</a>.</p>

### 2. Các thành phần kiến trúc

| Thành phần | Vai trò |
| --- | --- |
| Mã ứng dụng | Giao diện và logic của ứng dụng SPA bằng HTML, JavaScript/TypeScript. |
| Power Apps client library | Gói @microsoft/power-apps cung cấp API và quản lý models/services sinh ra cho kết nối. |
| power.config.json | Metadata để CLI và thư viện làm việc với kết nối, môi trường và xuất bản. |
| Power Apps host | Tải ứng dụng, quản lý xác thực người dùng và thông báo lỗi tải app. |

Ứng dụng gọi models/services được sinh ra để truy cập dữ liệu qua connectors. Khi xuất bản, CLI đưa bản đã biên dịch vào môi trường Power Platform.

<p class="mb-4 text-sm text-gray-600">Nguồn: <a class="text-blue-600 underline" href="https://learn.microsoft.com/vi-vn/power-apps/developer/code-apps/architecture">Code apps architecture</a>.</p>

### 3. Tạo, chạy thử và xuất bản

Thực hiện trong thư mục dự án thực hành mới. Ví dụ dùng template Vite chính thức; không chạy lệnh xuất bản trên môi trường production khi chưa được phê duyệt.

**Bước 1.** Tạo dự án và cài dependencies:

<pre class="my-4 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm"><code>npx degit github:microsoft/PowerAppsCodeApps/templates/vite code-app-demo&#10;cd code-app-demo&#10;npm install --global @microsoft/power-apps-cli&#10;npm install --global @microsoft/power-apps&#10;npm install</code></pre>

**Bước 2.** Khởi tạo bằng lệnh dưới đây và chọn môi trường thử nghiệm theo lời nhắc. CLI yêu cầu đăng nhập nếu cần.

<pre class="my-4 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm"><code>pa app init&#10;pa app run</code></pre>

**Bước 3.** Mở URL **Local Play** bằng cùng hồ sơ trình duyệt đã đăng nhập tenant. Cho phép truy cập mạng cục bộ nếu trình duyệt yêu cầu.

**Bước 4.** Khi đã kiểm thử, build và xuất bản:

<pre class="my-4 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm"><code>npm run build&#10;pa app push</code></pre>

<p class="mb-4 text-sm text-gray-600">Nguồn: <a class="text-blue-600 underline" href="https://learn.microsoft.com/vi-vn/power-apps/developer/code-apps/how-to/create-an-app-from-scratch">Quickstart — tạo code app</a>.</p>

### 4. Kết nối Dataverse

Môi trường cần bật Dataverse và app đã được khởi tạo. Thêm bảng bằng **logical name**, không dùng tên hiển thị:

<pre class="my-4 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm"><code>pa app add data-source --connector dataverse --table &lt;table-logical-name&gt;</code></pre>

* Thay phần trong dấu ngoặc bằng logical name thực tế của bảng.
* Dùng model và service được sinh ra để đọc, tạo, cập nhật, xóa bản ghi.
* Chỉ lấy cột cần thiết bằng **select**; áp dụng lọc, sắp xếp và phân trang cho danh sách lớn.
* Khi cập nhật, chỉ gửi các trường đã thay đổi. Không tự gán cột hệ thống khi tạo bản ghi.

<p class="mb-4 text-sm text-gray-600">Nguồn: <a class="text-blue-600 underline" href="https://learn.microsoft.com/vi-vn/power-apps/developer/code-apps/how-to/connect-to-dataverse">Kết nối code app với Dataverse</a>.</p>

### 5. Bài thực hành: Danh sách sản phẩm

**Bài tập đề xuất:** Tạo app trong môi trường thử nghiệm để xem và cập nhật sản phẩm mẫu.

1. Thiết kế danh sách gồm mã, tên và đơn vị tính; thêm ô tìm kiếm.
2. Kết nối bảng sản phẩm và hiển thị trạng thái đang tải, không có dữ liệu, lỗi kết nối.
3. Cho phép sửa tên sản phẩm; xác nhận trước khi lưu và thông báo kết quả.
4. Kiểm thử bằng tài khoản có quyền phù hợp, sau đó kiểm tra cách app xử lý khi tài khoản không được phép sửa.

**Tiêu chí hoàn thành:** Danh sách đọc được dữ liệu thật trong môi trường thử nghiệm, thao tác lưu có phản hồi, lỗi được xử lý rõ ràng và không đưa thông tin bí mật vào mã frontend.
`,
};
