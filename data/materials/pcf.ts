
export const pcfMaterials: Record<string, string> = {
  'ok-pcf': `
# Power Apps Code Components (PCF) - Master Guide

## 1. Tổng quan về PCF (Power Apps Component Framework)

### PCF là gì?
**PCF** viết tắt của **Power Apps Component Framework**. Đây là khung làm việc cho phép các nhà phát triển chuyên nghiệp (Pro Developers) xây dựng các thành phần giao diện người dùng (UI) dựa trên mã nguồn (code-based) để mở rộng khả năng của Power Apps.

*   **Cách tiếp cận hiện đại:** Thay thế cho các phương pháp cũ như Web Resources (HTML/JS) và form scripts.
*   **Chạy trong Sandbox:** PCF chạy bên trong môi trường runtime an toàn của Power Apps.
*   **Lợi ích cốt lõi:** Tạo ra các control tùy chỉnh, có thể tái sử dụng, với bộ công cụ chuẩn chuyên nghiệp.

### Tại sao nên dùng PCF?
1.  **Giao diện phong phú (Rich Custom UI):** Xây dựng các giao diện phức tạp mà các control có sẵn (OOTB) không đáp ứng được.
2.  **Trải nghiệm người dùng tốt hơn (Better UX):** Tạo biểu đồ, trình chỉnh sửa trực quan, slider, gauge...
3.  **Khả năng tái sử dụng (Reusability):** Triển khai một lần, dùng cho nhiều app (Model-driven, Canvas, Power Pages).
4.  **Công nghệ hiện đại (Modern Stack):** Sử dụng TypeScript, npm, React và các bộ đóng gói (bundlers) hiện đại.

### PCF chạy ở đâu?
Một control PCF có thể được tái sử dụng trên cả ba nền tảng:
*   **Model-Driven Apps:** Forms, views, và dashboards.
*   **Canvas Apps:** Các control tùy chỉnh trong thanh công cụ.
*   **Power Pages:** Tăng cường trải nghiệm cho form và list trên web portal.

---

## 2. Kiến trúc & Vòng đời PCF

### Cấu trúc dự án PCF
Một dự án PCF tiêu chuẩn bao gồm:
*   **ControlManifest.Input.xml:** File định nghĩa metadata, các thuộc tính (properties) đầu vào/đầu ra, và loại control.
*   **index.ts:** File TypeScript chính chứa logic nghiệp vụ và các hàm vòng đời.
*   **generated/:** Các file TypeScript interface được tự động sinh ra từ Manifest để đảm bảo strong-typing.
*   **css/:** Chứa style cho component.

### Vòng đời Component (Lifecycle)
Hiểu rõ vòng đời là yếu tố quan trọng nhất để xây dựng component ổn định.

1.  **init**: Được gọi **một lần duy nhất** khi component được khởi tạo.
    *   Dùng để khởi tạo state, gắn event handlers, load thư viện, và lưu tham chiếu container (div).
    *   *Lưu ý:* Chưa có dữ liệu tại bước này.

2.  **updateView**: Được gọi **mỗi khi** có sự thay đổi từ host (dữ liệu thay đổi, kích thước màn hình đổi, v.v.).
    *   Dùng để render lại UI với dữ liệu mới.
    *   *Tối ưu:* Cần so sánh dữ liệu cũ và mới để tránh render lại toàn bộ (re-render) gây chậm app.

3.  **getOutputs**: Được gọi bởi Host trước khi lưu dữ liệu.
    *   Component trả về đối tượng chứa các giá trị mới nhất để Host cập nhật vào Dataverse.
    *   Thường được kích hoạt sau khi code gọi \`notifyOutputChanged\`.

4.  **destroy**: Được gọi trước khi component bị gỡ bỏ khỏi DOM.
    *   Dùng để dọn dẹp (clean up): gỡ bỏ event listeners, hủy các timer, giải phóng bộ nhớ để tránh Memory Leak.

### Giao tiếp với Host
*   **context:** Đối tượng chứa mọi thứ component cần (dữ liệu, theme, thông tin user, Web API...).
*   **notifyOutputChanged:** Hàm callback để báo cho Host biết "Dữ liệu của tôi đã thay đổi, hãy gọi getOutputs để lấy nhé".

---

## 3. Công cụ phát triển (Tooling)

Để phát triển PCF, bạn cần cài đặt bộ công cụ sau:

1.  **Node.js & npm:** Runtime và trình quản lý gói thư viện.
2.  **.NET SDK:** Cần thiết cho Power Platform CLI.
3.  **Power Platform CLI (pac):** Công cụ dòng lệnh quan trọng nhất.
    *   \`pac pcf init\`: Khởi tạo dự án.
    *   \`pac pcf push\`: Deploy nhanh lên môi trường dev để test.
    *   \`pac solution init\`: Tạo solution để đóng gói.
4.  **Visual Studio Code:** Trình soạn thảo code khuyến nghị.

### Quy trình tạo dự án cơ bản
\`\`\`bash
# 1. Khởi tạo
pac pcf init --namespace <MyNamespace> --name <MyControl> --template field

# 2. Cài đặt thư viện
npm install

# 3. Build & Test local
npm start
\`\`\`
Lệnh \`npm start\` sẽ mở ra một môi trường **Test Harness** cục bộ, cho phép bạn test giao diện và logic component mà không cần deploy lên server.

---

## 4. Dataset Controls

Dataset controls làm việc với danh sách dữ liệu (như Views trong Model-driven app hoặc Gallery trong Canvas app).

### Các tính năng chính
*   **Custom Rendering:** Hiển thị dữ liệu dưới dạng Grid tùy chỉnh, Kanban board, Map, hoặc Calendar.
*   **Paging & Sorting:** Sử dụng API có sẵn trong \`context.parameters.dataset\` để tải trang tiếp theo (\`loadNextPage\`) hoặc sắp xếp lại dữ liệu mà không cần viết query phức tạp.
*   **Selection:** Quản lý trạng thái chọn dòng (select row) để tích hợp với Ribbon Bar của host.

### Cách tiếp cận dữ liệu
Dữ liệu được truyền vào qua \`context.parameters.dataset\`:
*   **records:** Danh sách các dòng dữ liệu (ID và giá trị các cột).
*   **columns:** Metadata về các cột (tên hiển thị, kiểu dữ liệu, độ rộng).
*   **sortedRecordIds:** Danh sách ID đã được sắp xếp theo thứ tự hiển thị.

*Tip:* Với dataset lớn, luôn sử dụng cơ chế **Virtualization** (chỉ render những dòng đang hiển thị trên màn hình) để đảm bảo hiệu năng.

---

## 5. Chủ đề nâng cao & Best Practices

### Theming & Styling
Để component trông "native" (giống với giao diện chuẩn của Microsoft):
*   Sử dụng **Fluent UI** (thư viện React UI của Microsoft).
*   Đọc các biến màu sắc từ \`context.theme\` để hỗ trợ Dark Mode/Light Mode tự động.

### Web API & Performance
*   **Web API:** Sử dụng \`context.webAPI\` để thực hiện CRUD (Create, Read, Update, Delete) trực tiếp với Dataverse.
*   **Performance:**
    *   Giảm thiểu kích thước bundle (dùng Webpack optimization).
    *   Tránh gọi Web API liên tục trong \`updateView\`.
    *   Sử dụng React.memo hoặc \`shouldComponentUpdate\` để tránh render thừa.

### ALM & Governance
*   **Solution:** Luôn đóng gói PCF vào trong Solution (Managed cho Prod, Unmanaged cho Dev).
*   **Versioning:** Sử dụng Semantic Versioning (Major.Minor.Patch).
*   **Git:** Lưu trữ source code trong Git. Chỉ file build ra (.zip hoặc .cdm) mới được import vào môi trường.

### Checklist trước khi Deploy
1.  **Accessibility:** Đã hỗ trợ điều hướng bằng bàn phím và Screen Reader chưa?
2.  **Responsiveness:** Hiển thị tốt trên Mobile/Tablet không?
3.  **Cleanup:** Đã implement hàm \`destroy\` để dọn dẹp event chưa?
4.  **Licensing:** Kiểm tra xem component có vi phạm bản quyền thư viện bên thứ 3 không?
`
};
