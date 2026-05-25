export const powerQueryMaterials: Record<string, string> = {
  'pq-intro': `
## Giới thiệu Power Query & Ngôn ngữ M
Power Query là công cụ **ETL (Extract, Transform, Load)** mạnh mẽ của Microsoft, được tích hợp trong nhiều sản phẩm như Power BI, Excel, và Power Platform Dataflows. Nó cho phép bạn kết nối đến hàng trăm nguồn dữ liệu, làm sạch, định hình và chuyển đổi dữ liệu một cách trực quan trước khi tải vào để phân tích.

### Các khái niệm cốt lõi
*   **Queries (Truy vấn):** Mỗi kết nối và chuỗi các bước biến đổi dữ liệu được gọi là một Query.
*   **Applied Steps (Các bước đã áp dụng):** Power Query ghi lại mọi thao tác của bạn (lọc, xóa cột, đổi tên, v.v.) thành một danh sách các bước. Bạn có thể xem lại, sửa đổi hoặc xóa các bước này.
*   **M Language (Ngôn ngữ M):** Đằng sau giao diện người dùng trực quan, mọi bước bạn thực hiện đều tạo ra một dòng mã bằng ngôn ngữ M (M là viết tắt của Mashup). Bạn có thể xem và chỉnh sửa mã M trực tiếp trong "Advanced Editor" để thực hiện các kỹ thuật transform phức tạp hơn.

### Tại sao Power Query quan trọng?
*   **Tự động hóa việc làm sạch dữ liệu:** Một khi bạn đã thiết lập các bước biến đổi, bạn chỉ cần làm mới (refresh) dữ liệu và Power Query sẽ tự động lặp lại tất cả các bước đó cho dữ liệu mới.
*   **Giao diện trực quan:** Hầu hết các tác vụ có thể được thực hiện bằng cách nhấp chuột, giúp người dùng không chuyên về kỹ thuật cũng có thể chuẩn bị dữ liệu.
*   **Khả năng mở rộng:** Cho phép xử lý các tập dữ liệu lớn và thực hiện các logic phức tạp.

<div class="my-6">
    <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Video tham khảo</h3>
    <a href="https://www.youtube.com/watch?v=silo89Y_a_M" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700/50 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-colors shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
        <div class="ml-4">
            <p class="font-semibold text-blue-600 dark:text-blue-400">Power Query là gì? Hướng dẫn cho người mới bắt đầu</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">Video giới thiệu tổng quan về Power Query, giao diện và các thao tác cơ bản.</p>
        </div>
    </a>
</div>
  `,
'pq-common-transforms': `
## Các kỹ thuật transform dữ liệu cơ bản
Đây là những thao tác bạn sẽ sử dụng thường xuyên nhất trong Power Query để làm sạch và chuẩn bị dữ liệu.

### 1. Choose/Remove Columns (Chọn/Xóa cột)
*   **Mục đích:** Chỉ giữ lại những cột cần thiết cho việc phân tích. Việc loại bỏ các cột không cần thiết giúp mô hình dữ liệu nhẹ hơn và hiệu quả hơn.
*   **Cách làm:** Dùng chức năng "Choose Columns" hoặc chọn các cột muốn xóa và nhấn "Remove Columns".

### 2. Change Data Type (Thay đổi kiểu dữ liệu)
*   **Mục đích:** Đảm bảo mỗi cột có kiểu dữ liệu đúng (văn bản, số nguyên, số thập phân, ngày/giờ). Power Query thường tự động nhận diện nhưng bạn nên kiểm tra lại.
*   **Cách làm:** Nhấp vào biểu tượng kiểu dữ liệu ở đầu mỗi cột (ví dụ: ABC, 123, 1.2) và chọn kiểu đúng.

### 3. Filter Rows (Lọc hàng)
*   **Mục đích:** Loại bỏ các hàng không cần thiết dựa trên một hoặc nhiều điều kiện.
*   **Cách làm:** Nhấp vào mũi tên lọc ở đầu cột và chọn các điều kiện (ví dụ: bằng, lớn hơn, không chứa, loại bỏ giá trị null).

### 4. Split Column (Tách cột)
*   **Mục đích:** Tách một cột thành nhiều cột dựa trên một ký tự phân tách (delimiter) hoặc số lượng ký tự.
*   **Ví dụ:** Tách cột "Họ và Tên" thành hai cột "Họ" và "Tên" dựa trên khoảng trắng.
*   **Cách làm:** Chọn cột, vào tab "Transform" hoặc "Add Column", chọn "Split Column".

### 5. Replace Values (Thay thế giá trị)
*   **Mục đích:** Tìm và thay thế một giá trị cụ thể trong một cột. Rất hữu ích để sửa lỗi chính tả hoặc chuẩn hóa dữ liệu.
*   **Cách làm:** Chuột phải vào cột và chọn "Replace Values".
  `,
'pq-advanced-transforms': `
## Các kỹ thuật transform nâng cao
Khi dữ liệu của bạn có cấu trúc phức tạp, bạn sẽ cần đến các kỹ thuật nâng cao hơn.

### 1. Group By (Nhóm theo)
*   **Mục đích:** Tổng hợp (aggregate) dữ liệu. Tương tự như hàm \`GROUP BY\` trong SQL.
*   **Ví dụ:** Từ một bảng chi tiết các đơn hàng, bạn có thể nhóm theo "Tỉnh thành" và "Tháng" để tính tổng doanh thu cho mỗi tỉnh trong mỗi tháng.
*   **Cách làm:** Chọn tab "Transform", chọn "Group By".
    *   **Group by:** Chọn các cột bạn muốn dùng làm tiêu chí nhóm.
    *   **New column name:** Đặt tên cho cột giá trị tổng hợp mới.
    *   **Operation:** Chọn phép tính (Sum, Count, Average, Min, Max).
    *   **Column:** Chọn cột để thực hiện phép tính.

### 2. Pivot và Unpivot Columns
*   **Unpivot Columns (Bỏ gộp cột):**
    *   **Mục đích:** Chuyển đổi một bảng "rộng" (wide format) thành một bảng "dài" (long format). Rất hữu ích khi bạn có các cột đại diện cho các giá trị thời gian (ví dụ: Cột Tháng 1, Cột Tháng 2, ...).
    *   **Cách làm:** Chọn các cột bạn muốn bỏ gộp, chuột phải và chọn "Unpivot Columns". Power Query sẽ tạo ra hai cột mới: "Attribute" (chứa tên các cột cũ) và "Value" (chứa các giá trị tương ứng).
*   **Pivot Columns (Gộp cột):**
    *   **Mục đích:** Làm ngược lại với Unpivot, chuyển từ định dạng dài sang định dạng rộng.
    *   **Cách làm:** Chọn cột chứa tên các cột mới (Attribute column), vào tab "Transform", chọn "Pivot Column". Sau đó chọn cột chứa giá trị (Value column) và phép tính tổng hợp.

### 3. Conditional Column (Cột điều kiện)
*   **Mục đích:** Tạo một cột mới có giá trị dựa trên các điều kiện logic (if-then-else).
*   **Ví dụ:** Tạo một cột "Phân loại doanh thu" với các giá trị "Cao", "Trung bình", "Thấp" dựa trên giá trị của cột "Doanh thu".
*   **Cách làm:** Vào tab "Add Column", chọn "Conditional Column" và điền vào các điều kiện.
  `,
'pq-merge-append': `
## Kết hợp Queries (Merge & Append)
Power Query cung cấp hai cách chính để kết hợp các bảng dữ liệu từ các query khác nhau.

### 1. Append Queries (Nối truy vấn)
*   **Tương tự:** \`UNION ALL\` trong SQL.
*   **Mục đích:** Xếp chồng các bảng dữ liệu lên nhau. Bạn nối một bảng vào dưới một bảng khác.
*   **Yêu cầu:** Các bảng được nối phải có cấu trúc cột tương tự nhau (tên cột và kiểu dữ liệu). Nếu tên cột khác nhau, Power Query sẽ tạo ra các cột mới.
*   **Ví dụ:** Bạn có một bảng doanh thu cho năm 2023 và một bảng doanh thu cho năm 2024. Bạn có thể dùng "Append" để tạo ra một bảng duy nhất chứa dữ liệu của cả hai năm.

### 2. Merge Queries (Phối/Trộn truy vấn)
*   **Tương tự:** Các loại \`JOIN\` trong SQL.
*   **Mục đích:** Kết hợp hai bảng dữ liệu lại với nhau theo chiều ngang, dựa trên một hoặc nhiều cột chung.
*   **Cách làm:**
    1.  Chọn bảng chính (bảng bên trái).
    2.  Chọn chức năng "Merge Queries".
    3.  Chọn bảng thứ hai (bảng bên phải).
    4.  Chọn (các) cột chung giữa hai bảng để làm khóa nối.
    5.  Chọn loại Join (Join Kind).
*   **Các loại Join phổ biến:**
    *   **Left Outer (Mặc định):** Lấy tất cả các hàng từ bảng thứ nhất, và các hàng khớp từ bảng thứ hai.
    *   **Inner:** Chỉ lấy các hàng có sự khớp ở cả hai bảng.
    *   **Full Outer:** Lấy tất cả các hàng từ cả hai bảng.

<div class="my-6">
    <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Video tham khảo</h3>
    <a href="https://www.youtube.com/watch?v=A_2aSAhWb5U" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700/50 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-colors shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
        <div class="ml-4">
            <p class="font-semibold text-blue-600 dark:text-blue-400">Merge vs Append trong Power Query</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">Video giải thích sự khác biệt cơ bản và cách sử dụng của Merge và Append.</p>
        </div>
    </a>
</div>
  `,
'pq-query-folding': `
## Chủ đề chuyên sâu: Query Folding
Query Folding là khái niệm **quan trọng nhất** về hiệu năng trong Power Query. Nắm vững nó là chìa khóa để xây dựng các báo cáo nhanh và hiệu quả.

### Query Folding là gì?
*   **Khái niệm:** Query Folding là quá trình Power Query chuyển đổi các bước transform bạn thực hiện trên giao diện (lọc, sắp xếp, nhóm, v.v.) thành một câu lệnh duy nhất bằng ngôn ngữ của nguồn dữ liệu (ví dụ: SQL) và gửi câu lệnh đó về cho hệ thống nguồn để thực thi.
*   **Ví dụ:** Thay vì tải toàn bộ bảng \`Sales\` (hàng triệu dòng) về máy của bạn rồi mới lọc ra các đơn hàng của năm 2025, Query Folding sẽ tạo ra một câu lệnh SQL tương tự như \`SELECT * FROM Sales WHERE Year = 2025\` và gửi nó đến máy chủ SQL. Máy chủ SQL chỉ trả về kết quả đã được lọc, giúp giảm đáng kể lưu lượng mạng và tăng tốc độ làm mới.

### Tại sao nó lại quan trọng?
*   **Tăng tốc độ làm mới (Refresh Speed):** Giảm thời gian chờ đợi đáng kể, đặc biệt với dữ liệu lớn.
*   **Giảm tải cho máy trạm và dịch vụ:** Việc xử lý nặng được đẩy về phía máy chủ nguồn, nơi thường có tài nguyên mạnh hơn.
*   **Hỗ trợ làm mới tăng dần (Incremental Refresh):** Query Folding là một yêu cầu bắt buộc để có thể thiết lập tính năng làm mới tăng dần trong Power BI.

### Làm thế nào để kiểm tra Query Folding?
1.  Trong Power Query Editor, thực hiện một bước biến đổi.
2.  Nhìn vào danh sách "Applied Steps" ở bên phải.
3.  Chuột phải vào bước biến đổi cuối cùng bạn vừa thực hiện.
4.  Nếu tùy chọn **"View Native Query"** sáng lên và có thể nhấp vào, thì Query Folding **đang hoạt động** cho đến bước đó. Nếu nó bị mờ đi, Query Folding đã bị "phá vỡ" (broken) ở bước trước đó.

### Những gì có thể phá vỡ Query Folding?
Không phải tất cả các kỹ thuật transform đều hỗ trợ Query Folding. Một số thủ phạm phổ biến bao gồm:
*   Thêm cột Index.
*   Sử dụng các hàm M không có tương đương ở nguồn (ví dụ: các hàm xử lý văn bản phức tạp).
*   Thay đổi kiểu dữ liệu của cột theo một cách không chuẩn.
*   Hợp nhất các truy vấn từ các nguồn khác nhau (ví dụ: join một bảng SQL với một file Excel).

**Thực tiễn tốt nhất:** Luôn cố gắng thực hiện các kỹ thuật transform hỗ trợ Query Folding (lọc, sắp xếp, join các bảng từ cùng một nguồn) ở các bước đầu tiên của query.

<div class="my-6">
    <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Video tham khảo</h3>
    <a href="https://www.youtube.com/watch?v=vglyr2k57n4" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700/50 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-colors shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
        <div class="ml-4">
            <p class="font-semibold text-blue-600 dark:text-blue-400">Query Folding trong Power BI</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">Video giải thích sâu về Query Folding và tại sao nó lại quan trọng cho hiệu năng.</p>
        </div>
    </a>
</div>
  `,
'pq-in-power-bi': `
## Ứng dụng trong Power BI (Dataflows & Linked Tables)
Power Query là công cụ không thể thiếu trong Power BI, đóng vai trò là lớp chuẩn bị dữ liệu (Data Preparation Layer) cho tất cả các báo cáo.

### Vai trò chính
Trong Power BI Desktop, Power Query Editor được sử dụng để:
*   Kết nối đến các nguồn dữ liệu.
*   Thực hiện các bước làm sạch và chuyển đổi dữ liệu cần thiết.
*   Định hình dữ liệu thành các bảng phù hợp cho việc xây dựng mô hình dữ liệu (data modeling) bằng DAX.

### Dataflows
*   **Khái niệm:** Dataflow đưa sức mạnh của Power Query lên đám mây (Power BI Service). Nó cho phép bạn thực hiện ETL và lưu trữ dữ liệu đã được làm sạch trong Azure Data Lake do Power BI quản lý.
*   **Lợi ích:**
    *   **Tái sử dụng logic ETL:** Tạo một lần, dùng nhiều lần. Nhiều bộ dữ liệu (datasets) và báo cáo có thể cùng sử dụng một dataflow, đảm bảo tính nhất quán.
    *   **Tập trung hóa việc chuẩn bị dữ liệu:** Quản lý dữ liệu ở một nơi duy nhất.

### Linked Tables (hoặc Linked Entities)
*   **Khái niệm:** Linked Tables là một tính năng mạnh mẽ trong Dataflows, cho phép một dataflow **kết nối và sử dụng lại một bảng đã được xử lý trong một dataflow khác**.
*   **Kịch bản:**
    1.  Bạn tạo một "Staging/Base Dataflow" chứa các bảng dữ liệu gốc đã được làm sạch cơ bản (ví dụ: bảng "Customers", "Products").
    2.  Sau đó, các nhà phân tích khác có thể tạo các dataflow của riêng họ. Thay vì kết nối lại vào nguồn, họ chỉ cần tạo một "Linked Table" đến bảng "Customers" trong dataflow gốc.
*   **Lợi ích:**
    *   **Giảm sự trùng lặp:** Không cần phải định nghĩa lại logic làm sạch cho các bảng phổ biến như Khách hàng, Sản phẩm.
    *   **Tạo một "Single source of truth" (Nguồn sự thật duy nhất):** Mọi người đều sử dụng cùng một phiên bản của bảng "Customers" đã được chuẩn hóa.
    *   **Phân tách logic:** Cho phép tách biệt quá trình ingest/làm sạch dữ liệu gốc với quá trình biến đổi dữ liệu cho các mục đích kinh doanh cụ thể.
`,
'pq-in-power-apps': `
## Ứng dụng trong Power Apps
Gần đây, Power Query đã được tích hợp vào Power Apps Studio, mang lại một cách thức mới để định hình và truy vấn dữ liệu.

### Mục đích sử dụng
*   Trong Power Apps, Power Query chủ yếu được sử dụng để **định hình dữ liệu đọc vào (read-only data shaping)** cho các ứng dụng Canvas.
*   Nó cho phép bạn thực hiện các phép biến đổi phức tạp (như join, group by, unpivot) trên dữ liệu nguồn trước khi nó được tải vào ứng dụng của bạn.
*   **Ví dụ:** Bạn có thể join một SharePoint List với một bảng Excel và chỉ lấy ra một tập hợp dữ liệu đã được định hình sẵn để hiển thị trong một Gallery.

### Cách hoạt động
1.  Khi thêm một nguồn dữ liệu mới vào Canvas App, bạn sẽ thấy tùy chọn "Transform Data".
2.  Thao tác này sẽ mở ra giao diện Power Query Editor quen thuộc.
3.  Các bước biến đổi bạn thực hiện sẽ được lưu lại. Khi ứng dụng chạy, Power Fx sẽ gọi đến các truy vấn Power Query này.

### Giới hạn quan trọng
*   **Read-only:** Các truy vấn Power Query trong Power Apps hiện tại chỉ dùng để đọc dữ liệu. Bạn **không thể** sử dụng chúng để ghi, cập nhật, hoặc xóa dữ liệu (không thể \`Patch()\` vào một truy vấn Power Query).
*   **Không thể ủy thác (Non-delegable):** Kết quả của một truy vấn Power Query được coi là một bảng dữ liệu tĩnh trong bộ nhớ của ứng dụng. Điều này có nghĩa là các quy tắc ủy thác (delegation) không được áp dụng. Bạn phải cẩn thận với giới hạn số lượng bản ghi (mặc định 500, tối đa 2000).
*   **Tốt nhất cho dữ liệu tĩnh:** Do các giới hạn trên, Power Query trong Power Apps phù hợp nhất cho các kịch bản cần xử lý dữ liệu tham chiếu, dữ liệu không thay đổi thường xuyên, hoặc khi bạn cần thực hiện các phép join phức tạp mà Power Fx không hỗ trợ một cách dễ dàng.
`,
'pq-in-excel': `
## Ứng dụng trong Excel (Get & Transform)
Power Query có nguồn gốc từ Excel và vẫn là một trong những tính năng mạnh mẽ nhất của nó, được biết đến dưới tên **"Get & Transform Data"** trong tab "Data".

### Trường hợp sử dụng
Power Query biến Excel từ một công cụ nhập liệu thủ công thành một công cụ tự động hóa báo cáo mạnh mẽ.
*   **Tự động hóa báo cáo lặp đi lặp lại:** Bạn có một báo cáo hàng tháng cần kết hợp dữ liệu từ nhiều file Excel, làm sạch và tạo ra một bảng tổng hợp. Với Power Query, bạn chỉ cần thiết lập các bước một lần. Tháng sau, bạn chỉ cần đặt các file mới vào thư mục và nhấn "Refresh All".
*   **Làm sạch dữ liệu bẩn:** Dữ liệu xuất ra từ các hệ thống cũ thường không có cấu trúc tốt. Power Query có thể xử lý các khoảng trắng thừa, tách cột, thay thế giá trị, và định hình lại dữ liệu một cách dễ dàng.
*   **Kết nối nhiều nguồn:** Kết hợp dữ liệu từ một file CSV, một bảng trên web, và một cơ sở dữ liệu SQL trực tiếp trong Excel.
*   **Unpivot dữ liệu:** Chuyển đổi các bảng tổng hợp chéo (crosstab reports) thành dạng bảng (tabular format) phù hợp để sử dụng với PivotTables.

### So sánh với VBA/Macros
*   **Dễ học hơn:** Power Query có giao diện trực quan, không yêu cầu kiến thức lập trình sâu như VBA.
*   **Mạnh mẽ hơn cho ETL:** Power Query được thiết kế chuyên cho việc kết nối và biến đổi dữ liệu, trong khi VBA là một ngôn ngữ lập trình đa mục đích.
*   **Ghi lại các bước:** Các bước trong Power Query rõ ràng và dễ kiểm tra hơn so với việc đọc code VBA.

Đối với bất kỳ ai làm việc nhiều với dữ liệu trong Excel, việc thành thạo Power Query là một kỹ năng thay đổi cuộc chơi.
`,
'pq-best-practices': `
## Mẹo & Tối ưu hóa khác
Ngoài Query Folding, việc tuân theo các thực tiễn tốt nhất sẽ giúp các truy vấn của bạn dễ quản lý, dễ bảo trì và hiệu quả hơn.

### 1. Tổ chức Queries
*   **Tạo các nhóm (Query Groups):** Khi bạn có nhiều query, hãy chuột phải vào vùng danh sách query và tạo các nhóm để tổ chức chúng một cách logic (ví dụ: nhóm "Staging Queries", "Dimension Tables", "Fact Tables").
*   **Sử dụng Staging Queries:**
    *   Tạo các query gốc chỉ để kết nối và tải dữ liệu thô từ nguồn (không transform nhiều). Vô hiệu hóa việc tải các query này vào mô hình dữ liệu (Disable Load).
    *   Sau đó, **Reference** (tham chiếu) đến các staging query này để tạo các query biến đổi khác.
    *   **Lợi ích:** Tránh kết nối đến cùng một nguồn dữ liệu nhiều lần và tách biệt logic lấy dữ liệu khỏi logic biến đổi.

### 2. Ghi chép và tài liệu hóa
*   **Đổi tên các bước (Rename Steps):** Trong "Applied Steps", hãy đổi tên các bước thành những tên có ý nghĩa. Thay vì "Filtered Rows1", hãy đổi thành "Filtered out inactive products". Điều này cực kỳ hữu ích khi bạn xem lại query sau này.
*   **Thêm mô tả (Add Descriptions):** Chuột phải vào một query và thêm mô tả về mục đích và logic của nó.

### 3. Tối ưu hóa các bước
*   **Xóa các cột không cần thiết càng sớm càng tốt:** Bước đầu tiên sau khi kết nối nguồn nên là "Choose Columns" hoặc "Remove Other Columns" để chỉ giữ lại những gì bạn cần. Điều này làm giảm lượng dữ liệu cần xử lý trong các bước tiếp theo.
*   **Thứ tự các bước quan trọng:** Thực hiện các bước lọc (filtering) trước các bước biến đổi phức tạp hơn. Việc giảm số lượng hàng sớm sẽ làm cho các bước sau chạy nhanh hơn.
*   **Cẩn thận với Custom Columns:** Việc thêm cột tùy chỉnh, đặc biệt là với logic phức tạp, có thể làm chậm query. Hãy xem xét liệu có cách nào đạt được kết quả tương tự bằng các chức năng tích hợp sẵn hay không.
  `,
};
