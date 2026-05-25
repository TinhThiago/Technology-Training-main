export const modelDrivenAppsMaterials: Record<string, string> = {
  'mda-intro': `
## Giới thiệu về Model-driven Apps
Model-driven Apps là một phương pháp xây dựng ứng dụng trong Power Apps, tập trung vào việc sử dụng mô hình dữ liệu có sẵn trong Microsoft Dataverse để nhanh chóng tạo ra các ứng dụng nghiệp vụ phức tạp. Khác với Canvas Apps nơi bạn toàn quyền kiểm soát giao diện, Model-driven Apps tự động tạo ra giao diện người dùng dựa trên cấu trúc dữ liệu của bạn.

### Các khái niệm cốt lõi
*   **Dataverse:** Là nền tảng dữ liệu cốt lõi, nơi bạn định nghĩa các bảng (tables), cột (columns), và mối quan hệ (relationships) để lưu trữ dữ liệu cho ứng dụng. Nó cung cấp một mô hình dữ liệu an toàn và có thể mở rộng.
*   **Thành phần (Components):** Giao diện của Model-driven App được tạo thành từ các thành phần như Bảng (Tables), Biểu mẫu (Forms), Chế độ xem (Views), Biểu đồ (Charts), và Bảng điều khiển (Dashboards).
*   **Tự động tạo giao diện (UI Generation):** Power Apps tự động tạo ra một giao diện người dùng (UI) đáp ứng (responsive), hoạt động tốt trên cả trình duyệt web và thiết bị di động. Giao diện này nhất quán và dễ sử dụng, giúp người dùng tập trung vào dữ liệu và quy trình nghiệp vụ.

### So sánh Model-driven Apps và Canvas Apps
| Tiêu chí | Model-driven Apps | Canvas Apps |
|---|---|---|
| **Điểm bắt đầu** | Mô hình dữ liệu (Data-first) | Giao diện người dùng (UI-first) |
| **Kiểm soát UI** | Ít, giao diện được tự động tạo | Hoàn toàn, thiết kế từng pixel |
| **Nguồn dữ liệu** | Chủ yếu là Dataverse | Hàng trăm connectors |
| **Đối tượng** | Ứng dụng quy trình nghiệp vụ phức tạp | Ứng dụng tập trung vào tác vụ cụ thể |
| **Responsive** | Mặc định | Cần cấu hình thủ công |

### Vòng đời phát triển
1.  **Lập mô hình dữ liệu (Model Business Data):** Xác định các bảng, cột và mối quan hệ cần thiết trong Dataverse.
2.  **Định nghĩa quy trình (Define Business Processes):** Xây dựng các Business Process Flows, Business Rules để dẫn dắt người dùng.
3.  **Soạn thảo ứng dụng (Compose the App):** Sử dụng App Designer để chọn và cấu hình các thành phần (bảng, dashboard) và thiết lập điều hướng (Site Map).
4.  **Cấu hình bảo mật (Configure Security Roles):** Gán quyền truy cập cho người dùng để họ chỉ thấy và làm những gì được phép.
5.  **Triển khai và Lặp lại (Deploy & Iterate):** Chia sẻ ứng dụng và thu thập phản hồi để cải tiến.
  `,
  'mda-data-model': `
## Tạo Solution, Table, Form, View
Đây là những khối xây dựng cơ bản của một Model-driven App. Việc cấu trúc chúng đúng cách là rất quan trọng.

### Solutions (Giải pháp)
*   **Khái niệm:** Solution là một "container" để đóng gói tất cả các thành phần của ứng dụng. Luôn luôn làm việc trong một solution.
*   **Publisher (Nhà phát hành):** Mỗi solution được liên kết với một Publisher. Publisher chứa thông tin về nhà phát triển và một tiền tố (prefix) duy nhất cho tất cả các thành phần mới được tạo, giúp tránh xung đột tên.
*   **Các loại Solution:**
    *   **Unmanaged (Không được quản lý):** Dùng trong môi trường phát triển (DEV). Bạn có thể thêm, bớt, sửa đổi các thành phần một cách tự do.
    *   **Managed (Được quản lý):** Dùng để triển khai đến các môi trường khác (TEST, UAT, PROD). Các thành phần trong solution managed thường không thể chỉnh sửa trực tiếp, đảm bảo tính nhất quán và chỉ có thể được cập nhật bằng cách triển khai một phiên bản mới của solution.

### Tables (Bảng)
*   **Khái niệm:** Là nơi lưu trữ dữ liệu.
*   **Ownership (Quyền sở hữu):**
    *   **User or Team:** Các hàng dữ liệu thuộc sở hữu của một người dùng hoặc một nhóm. Loại này cho phép thiết lập các quyền bảo mật chi tiết (Create, Read, Write, Delete, Append, Append To, Assign, Share). Phù hợp cho dữ liệu cần phân quyền phức tạp như Khách hàng, Đơn hàng.
    *   **Organization:** Các hàng dữ liệu thuộc về toàn bộ tổ chức. Chỉ có hai cấp độ quyền: có hoặc không. Phù hợp cho dữ liệu tham chiếu như Danh mục sản phẩm, Tỉnh thành.

### Forms (Biểu mẫu)
*   **Khái niệm:** Giao diện để tương tác với một hàng dữ liệu.
*   **Các loại Form chính:**
    *   **Main Form:** Giao diện chính và đầy đủ nhất để xem và chỉnh sửa dữ liệu.
    *   **Quick Create Form:** Một form đơn giản để nhập nhanh dữ liệu cần thiết. Người dùng có thể truy cập từ nút "+" trên thanh điều hướng mà không cần rời khỏi màn hình hiện tại.
    *   **Quick View Form:** Hiển thị dữ liệu từ một bảng liên quan (lookup) ngay trên form của bảng khác. Ví dụ: hiển thị thông tin tóm tắt của Khách hàng ngay trên form Đơn hàng.
    *   **Card Form:** Được sử dụng trong các giao diện di động và một số view đặc biệt, hiển thị thông tin dưới dạng thẻ tóm tắt.

### Views (Chế độ xem)
*   **Khái niệm:** Một danh sách các hàng dữ liệu.
*   **Các loại View:**
    *   **Public Views:** Có sẵn cho tất cả người dùng.
    *   **System Views:** Các view đặc biệt do hệ thống quản lý, ví dụ: "Lookup View" (xác định các cột hiển thị khi tìm kiếm trong lookup), "Advanced Find View".
    *   **Personal Views:** View do người dùng tự tạo cho riêng mình.
  `,
  'mda-app-design': `
## Tạo và Cấu trúc App Model-driven
Sau khi đã có mô hình dữ liệu, bước tiếp theo là tập hợp các thành phần lại thành một ứng dụng hoàn chỉnh.

### App Designer
*   **Khái niệm:** Công cụ trực quan nơi bạn xây dựng Model-driven app, chọn các thành phần (tables, dashboards, business process flows) để đưa vào ứng dụng.
*   **Thực tiễn tốt nhất:** Chỉ bao gồm những thành phần thực sự cần thiết cho vai trò người dùng mục tiêu của ứng dụng. Một ứng dụng gọn gàng, tập trung sẽ dễ sử dụng hơn.

### Site Map (Sơ đồ trang)
*   **Khái niệm:** Site Map định nghĩa cấu trúc điều hướng (menu) bên trái của ứng dụng.
*   **Cấu trúc:**
    1.  **Area:** Cấp cao nhất, phân chia các khu vực chức năng lớn (ví dụ: Bán hàng, Kho).
    2.  **Group:** Nhóm các liên kết có liên quan lại với nhau (ví dụ: "Quản lý sản phẩm").
    3.  **Subarea:** Là một liên kết cụ thể.
*   **Các loại Subarea:**
    *   **Entity (Table):** Liên kết đến một view của một bảng (phổ biến nhất).
    *   **Dashboard:** Hiển thị một dashboard.
    *   **Web Resource:** Hiển thị một trang HTML tùy chỉnh.
    *   **URL:** Mở một liên kết web bên ngoài.
  `,
    'mda-relationships': `
## Các loại Relationships (Mối quan hệ)
Relationships định nghĩa cách các bảng liên kết với nhau trong Dataverse.

### One-to-Many (1:N) hay Many-to-One (N:1)
*   **Khái niệm:** Một hàng trong Bảng A có thể liên quan đến nhiều hàng trong Bảng B.
*   **Relationship Behaviors (Hành vi của mối quan hệ):** Đây là một khái niệm nâng cao và rất quan trọng, xác định các hành động sẽ tự động xảy ra (cascading) với các bản ghi con khi bản ghi cha thay đổi.
    *   **Parental:** Các hành động trên bản ghi cha sẽ áp dụng cho bản ghi con. Ví dụ: Xóa Khách hàng sẽ xóa tất cả Đơn hàng của họ. Chia sẻ Khách hàng cũng sẽ chia sẻ các Đơn hàng.
    *   **Referential:** Chỉ là một liên kết tham chiếu. Không có hành động nào tự động xảy ra. Nếu bạn xóa bản ghi cha, trường lookup ở bản ghi con sẽ bị xóa rỗng.
    *   **Referential, Restrict Delete:** Giống Referential, nhưng bạn sẽ không thể xóa bản ghi cha nếu nó vẫn còn các bản ghi con liên quan. Đây là lựa chọn an toàn nhất trong nhiều trường hợp.
    *   **Configurable Cascading:** Cho phép bạn tùy chỉnh hành vi cho từng hành động (Assign, Share, Delete, etc.).

### Many-to-Many (N:N)
*   **Khái niệm:** Một hàng trong Bảng A có thể liên quan đến nhiều hàng trong Bảng B và ngược lại.
*   **Native N:N vs. Manual N:N:**
    *   **Native N:N:** Dataverse tự động tạo một bảng trung gian ẩn. Bạn chỉ có thể liên kết hoặc hủy liên kết các bản ghi. Dễ thiết lập.
    *   **Manual N:N (Intersect Table):** Bạn tự tạo một bảng trung gian (ví dụ: Bảng "Đăng ký sự kiện" để nối "Học viên" và "Sự kiện"). Phương pháp này cho phép bạn thêm các cột thuộc tính vào chính mối quan hệ đó (ví dụ: "Ngày đăng ký", "Trạng thái tham dự").
  `,
  'mda-columns': `
## Làm việc với Cột Lookup, Calculated, và Rollup
Đây là các loại cột đặc biệt giúp tự động hóa và tạo ra các mối quan hệ trong dữ liệu.

### Lookup Columns (Cột tra cứu)
*   **Khái niệm:** Tạo ra một mối quan hệ N:1. Cho phép người dùng chọn một bản ghi từ một bảng liên quan.

### Calculated Columns (Cột tính toán)
*   **Khái niệm:** Sử dụng công thức để tính toán giá trị dựa trên các cột khác **trong cùng một hàng dữ liệu**.
*   **Giới hạn:**
    *   Không thể lấy dữ liệu từ các hàng liên quan (ví dụ: không thể lấy tên khách hàng từ lookup để tính toán).
    *   Phép tính được thực hiện đồng bộ khi dữ liệu được truy vấn.
    *   Không thể tự kích hoạt workflow hay plugin.

### Rollup Columns (Cột tổng hợp)
*   **Khái niệm:** Thực hiện một phép tính tổng hợp (SUM, COUNT, MIN, MAX, AVG) trên các **hàng con liên quan**.
*   **Giới hạn:**
    *   Dữ liệu **không được cập nhật theo thời gian thực**. Một công việc hệ thống (system job) chạy định kỳ (mặc định là mỗi giờ) để cập nhật giá trị. Bạn có thể bấm nút "Recalculate" để cập nhật thủ công.
    *   Chỉ có thể tổng hợp trên các mối quan hệ 1:N trực tiếp.
    *   Số lượng cột rollup trên mỗi bảng và mỗi tổ chức là có giới hạn.

### Choice / Choices Columns (Cột lựa chọn)
*   **Choice (Lựa chọn đơn):** Cho phép người dùng chọn một giá trị từ một danh sách được định nghĩa trước.
*   **Choices (Lựa chọn đa):** Cho phép người dùng chọn nhiều giá trị.
*   **Global vs. Local:**
    *   **Local Choice:** Danh sách lựa chọn chỉ tồn tại trong cột đó.
    *   **Global Choice:** Danh sách lựa chọn được định nghĩa một lần và có thể tái sử dụng trên nhiều cột và nhiều bảng khác nhau, đảm bảo tính nhất quán.
  `,
    'mda-business-rules': `
## Tạo Business Rules (Quy tắc nghiệp vụ)
Business Rules cung cấp một cách đơn giản, không cần code để triển khai các logic nghiệp vụ phổ biến trên form.

### Các thành phần của một Business Rule
*   **Condition (Điều kiện):** Xác định khi nào rule sẽ được áp dụng.
*   **Actions (Hành động):** Các hành động sẽ được thực hiện nếu điều kiện đúng.
*   **Scope (Phạm vi):** Entity, All Forms, hoặc một Form cụ thể.

### Ví dụ nâng cao
*   **Kịch bản:** Trên form "Cơ hội", nếu "Xác suất" (Probability) lớn hơn 70%, thì tự động đặt cột "Đánh giá" (Rating) thành "Hot", đồng thời ẩn cột "Lý do thất bại" và khóa cột "Ngân sách ước tính". Nếu không, hiển thị cột "Lý do thất bại".
*   **Cách thực hiện:**
    1.  Tạo một Business Rule.
    2.  **Condition:** \`If 'Probability' > 70\`
    3.  **Action (if true):**
        *   \`Set 'Rating' value to 'Hot'\`
        *   \`Set visibility of 'Failure Reason' to No\`
        *   \`Lock 'Estimated Budget' field\`
    4.  **Action (if false - Else branch):**
        *   \`Set visibility of 'Failure Reason' to Yes\`

### Giới hạn
*   Không thể thực hiện các hành động trên các bảng liên quan.
*   Không thể thực hiện các phép tính phức tạp hoặc lặp (loops).
*   Không thể gọi API hoặc tích hợp với hệ thống bên ngoài. (Sử dụng JavaScript hoặc Power Automate cho các nhu cầu này).
  `,
  'mda-keys': `
## Định nghĩa Alternate Keys (Khóa thay thế)
Alternate Key cho phép bạn định nghĩa một hoặc nhiều cột mà sự kết hợp giá trị của chúng phải là duy nhất, dùng làm định danh nghiệp vụ thay cho GUID.

### Mục đích chính
1.  **Chống trùng lặp dữ liệu:** Ngăn người dùng tạo ra các bản ghi có cùng mã định danh nghiệp vụ.
2.  **Tích hợp dữ liệu:** Cực kỳ quan trọng khi làm việc với Web API.

### Ví dụ sử dụng trong tích hợp
Giả sử bạn có một bảng "Sản phẩm" với một Alternate Key trên cột "Mã sản phẩm" (\`productcode\`). Khi bạn muốn cập nhật thông tin một sản phẩm từ hệ thống bên ngoài, thay vì phải truy vấn để tìm GUID của sản phẩm trước, bạn có thể gửi một yêu cầu \`PATCH\` trực tiếp bằng Alternate Key:

\`\`\`http
PATCH [Organization URI]/api/data/v9.2/products(productcode='PROD-00123')
\`\`\`
\`\`\`json
{
  "price": 150.00
}
\`\`\`
Hệ thống sẽ tự động tìm đúng sản phẩm có mã 'PROD-00123' và cập nhật giá. Điều này làm cho việc tích hợp trở nên đơn giản và hiệu quả hơn rất nhiều.
  `,
  'mda-charts': `
## Tạo và sử dụng Charts (Biểu đồ)
Charts trong Model-driven Apps cung cấp một cách trực quan để xem và phân tích dữ liệu từ các View.

### Tạo một Chart
1.  **Mở trình thiết kế Chart:** Từ một View, mở khu vực Charts và chọn "New Chart".
2.  **Chọn dữ liệu:**
    *   **Series (Chuỗi):** Chọn cột chứa giá trị số bạn muốn đo lường (ví dụ: "Doanh thu").
    *   **Category (Danh mục):** Chọn cột mà bạn muốn nhóm dữ liệu theo (trục ngang, ví dụ: "Nhân viên bán hàng").
    *   **Legend (Chú giải - cho biểu đồ nhiều chuỗi):** Thêm một chiều thứ hai để phân tách dữ liệu (ví dụ: xem doanh thu theo nhân viên bán hàng, phân tách theo "Trạng thái").

### Các tính năng nâng cao
*   **Drill Down (Xem chi tiết):** Bạn có thể cấu hình một biểu đồ để cho phép người dùng bấm vào một phần của biểu đồ (ví dụ: một cột đại diện cho một nhân viên) để xem dữ liệu chi tiết hơn (ví dụ: doanh thu của nhân viên đó theo từng tháng). Điều này được thực hiện bằng cách thêm nhiều trường vào trục Category.
*   **Tương tác trên Dashboard:** Khi bạn đặt nhiều biểu đồ và view trên cùng một dashboard, chúng có thể tương tác với nhau.
    *   Bật "Visual Filters" trên dashboard.
    *   Khi người dùng bấm vào một phần của biểu đồ (ví dụ: một lát cắt trên biểu đồ tròn), các visual khác trên dashboard sẽ tự động được lọc để chỉ hiển thị dữ liệu liên quan đến phần đã chọn.
  `,
};
