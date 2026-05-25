export const webResourcesMaterials: Record<string, string> = {
  'wr-js': `
## Sử dụng JavaScript trong Form (Event onChange)
Web Resources cho phép bạn mở rộng khả năng của Model-driven Apps bằng cách sử dụng các công nghệ web như JavaScript, HTML, và CSS. Việc sử dụng JavaScript trên form giúp tạo ra các trải nghiệm người dùng động và thông minh hơn.

### JavaScript Web Resource
*   **Khái niệm:** Là một file .js mà bạn tải lên Power Apps. Sau đó, bạn có thể liên kết các hàm trong file này với các sự kiện trên form.

### Form Event Handlers (Trình xử lý sự kiện Form)
*   **Khái niệm:** Bạn có thể cấu hình để một hàm JavaScript được thực thi khi một sự kiện cụ thể xảy ra trên form, ví dụ như:
    *   \`OnLoad\`: Khi form được tải.
    *   \`OnSave\`: Khi form được lưu.
    *   \`OnChange\`: Khi giá trị của một cột cụ thể thay đổi.

### Client API Object Model
*   **Khái niệm:** Power Apps cung cấp một bộ thư viện API JavaScript (mô hình đối tượng phía máy khách) để bạn tương tác với các thành phần trên form. Đối tượng chính là \`formContext\`.
*   **Cách sử dụng:** Bạn cần truyền \`executionContext\` làm tham số cho hàm của mình. Từ đó, bạn có thể lấy \`formContext\` bằng \`executionContext.getFormContext()\`.
*   **Các hàm phổ biến:**
    *   \`formContext.getAttribute("logicalname").getValue()\`: Lấy giá trị của một cột.
    *   \`formContext.getAttribute("logicalname").setValue(value)\`: Thiết lập giá trị cho một cột.
    *   \`formContext.getControl("logicalname").setVisible(false)\`: Ẩn một control.
    *   \`formContext.ui.setFormNotification(message, level, id)\`: Hiển thị thông báo ở cấp độ form.

### Kịch bản: Kiểm tra tồn kho khi thay đổi số lượng
*   **Mục tiêu:** Trên form "Đơn bán chi tiết", khi người dùng thay đổi "Số lượng", hệ thống sẽ kiểm tra xem số lượng nhập vào có lớn hơn số lượng tồn kho của sản phẩm đã chọn hay không.
*   **Các bước:**
    1.  **Viết hàm JavaScript:** Tạo một hàm nhận \`executionContext\` làm tham số.
    2.  **Lấy giá trị:** Bên trong hàm, sử dụng \`formContext\` để lấy giá trị của cột "Số lượng" và cột lookup "Sản phẩm".
    3.  **Truy vấn tồn kho:** Sử dụng \`Xrm.WebApi.retrieveRecord()\` để lấy thông tin của sản phẩm đã chọn, bao gồm cả cột "Số lượng tồn kho".
    4.  **So sánh và thông báo:** So sánh số lượng nhập vào với số lượng tồn kho. Nếu lớn hơn, sử dụng \`formContext.ui.setFormNotification()\` để hiển thị một thông báo lỗi cho người dùng.
    5.  **Đăng ký sự kiện:** Trong trình chỉnh sửa form, thêm file JavaScript làm thư viện, sau đó đăng ký hàm đã viết vào sự kiện \`OnChange\` của cột "Số lượng".
  `,
  'wr-html': `
## Tạo Command và Form in (HTML)
HTML Web Resources cho phép bạn nhúng các trang web tùy chỉnh trực tiếp vào Model-driven Apps, mở ra nhiều khả năng tùy biến giao diện và chức năng.

### HTML Web Resource
*   **Khái niệm:** Là một file .html (có thể kèm theo CSS và JS) mà bạn tải lên Power Apps. Bạn có thể hiển thị nó trong form, dashboard, hoặc mở ra từ một nút lệnh trên command bar.

### Command Bar Customization (Tùy chỉnh thanh lệnh)
*   **Khái niệm:** Thanh lệnh (command bar, trước đây là Ribbon) là nơi chứa các nút hành động ở đầu các view và form. Bạn có thể thêm các nút tùy chỉnh của riêng mình.
*   **Ribbon Workbench:** Là một công cụ phổ biến trong XrmToolBox, giúp bạn tùy chỉnh command bar một cách trực quan.
*   **Hành động của nút:** Một nút tùy chỉnh có thể thực hiện nhiều hành động, phổ biến nhất là:
    1.  **Chạy JavaScript:** Gọi một hàm JavaScript từ một Web Resource.
    2.  **Mở URL:** Mở một URL, có thể là một HTML Web Resource.

### Kịch bản: Tạo nút "In" và Form in tùy chỉnh
*   **Mục tiêu:** Tạo một nút "In đơn hàng" trên form "Đơn bán". Khi nhấn vào, nút này sẽ mở ra một trang HTML hiển thị thông tin của đơn bán đó theo một định dạng in ấn tùy chỉnh.
*   **Các bước:**
    1.  **Tạo HTML Web Resource:**
        *   Thiết kế một trang HTML (ví dụ: \`print_form.html\`) với bố cục và CSS theo ý muốn.
        *   Trong file HTML, thêm một file JavaScript tham chiếu đến \`ClientGlobalContext.js.aspx\`. Điều này cho phép bạn truy cập dữ liệu từ Power Apps.
        *   Viết mã JavaScript trong trang HTML để lấy ID của bản ghi hiện tại từ query string.
        *   Sử dụng \`Xrm.WebApi.retrieveRecord()\` để lấy tất cả dữ liệu cần thiết của đơn bán.
        *   Dùng JavaScript để điền dữ liệu này vào các phần tử HTML tương ứng trên trang.

    2.  **Tùy chỉnh Command Bar:**
        *   Sử dụng Ribbon Workbench để thêm một nút mới tên là "In đơn hàng" vào command bar của form "Đơn bán".
        *   Cấu hình hành động cho nút này là "Open URL".
        *   Trong URL, trỏ đến HTML Web Resource đã tạo. Quan trọng là bạn cần truyền ID của bản ghi hiện tại vào URL dưới dạng tham số.

    3.  **Kết quả:** Khi người dùng mở một đơn bán và nhấn nút "In đơn hàng", một cửa sổ mới sẽ hiện ra với trang HTML của bạn, hiển thị dữ liệu của chính đơn bán đó, sẵn sàng để in.
  `,
};
