export const powerBiMaterials: Record<string, string> = {
  'pbi-intro': `
## Giới thiệu về Power BI & Workflow
Power BI là một bộ sưu tập các dịch vụ phần mềm, ứng dụng và trình kết nối hoạt động cùng nhau để biến các nguồn dữ liệu không liên quan của bạn thành thông tin chi tiết mạch lạc, trực quan và có tính tương tác.

### Các thành phần chính
*   **Power BI Desktop:** Là ứng dụng miễn phí trên Windows nơi bạn kết nối, chuyển đổi và trực quan hóa dữ liệu. Đây là nơi bạn xây dựng các báo cáo.
*   **Power BI Service (service):** Là một dịch vụ đám mây (SaaS - Software as a Service). Đây là nơi bạn xuất bản (publish) các báo cáo từ Desktop, tạo các dashboard và chia sẻ chúng với người dùng khác.
*   **Power BI Mobile:** Các ứng dụng dành cho thiết bị di động (iOS, Android, Windows) để xem và tương tác với các báo cáo và dashboard đã được chia sẻ.

### Quy trình làm việc (Workflow) điển hình
Quy trình phát triển trong Power BI thường đi qua các bước sau, tất cả đều bắt đầu trong Power BI Desktop:
1.  **Get Data (Lấy dữ liệu):** Kết nối đến các nguồn dữ liệu (Excel, database, web, etc.).
2.  **Transform Data (Chuyển đổi dữ liệu):** Sử dụng Power Query Editor để làm sạch, định hình và chuẩn bị dữ liệu.
3.  **Model Data (Mô hình hóa dữ liệu):** Tạo các mối quan hệ (relationships) giữa các bảng và viết các công thức tính toán bằng DAX.
4.  **Visualize Data (Trực quan hóa dữ liệu):** Xây dựng báo cáo bằng cách kéo thả các trường dữ liệu vào các biểu đồ (visuals).
5.  **Publish (Xuất bản):** Tải báo cáo lên Power BI Service.
6.  **Share & Collaborate (Chia sẻ & Hợp tác):** Trong Power BI Service, bạn tạo dashboard và chia sẻ báo cáo/dashboard cho người dùng cuối.

<div class="my-6">
    <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Video tham khảo</h3>
    <a href="https://www.youtube.com/watch?v=3u_o_G_pxOQ" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700/50 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-colors shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
        <div class="ml-4">
            <p class="font-semibold text-blue-600 dark:text-blue-400">Power BI Full Course For Beginners</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">Một video hướng dẫn toàn diện cho người mới bắt đầu về toàn bộ quy trình làm việc trong Power BI.</p>
        </div>
    </a>
</div>
  `,
  'pbi-data-modeling': `
## Data Modeling & Star Schema
Mô hình dữ liệu (Data Model) là nền tảng của mọi báo cáo Power BI. Một mô hình dữ liệu tốt sẽ làm cho các báo cáo của bạn nhanh hơn, chính xác hơn và dễ bảo trì hơn.

### Relationships (Mối quan hệ)
*   Relationships kết nối các bảng lại với nhau, cho phép bạn lọc và phân tích dữ liệu từ nhiều bảng cùng lúc.
*   **Cardinality (Bản số):** Xác định loại quan hệ (Phổ biến nhất là Many-to-One (\*:1)).
*   **Cross-filter direction (Hướng lọc chéo):** Thường là 'Single', nghĩa là bảng phía '1' có thể lọc bảng phía 'Nhiều'.

### Star Schema (Lược đồ hình sao)
Đây là phương pháp mô hình hóa dữ liệu được **khuyến nghị mạnh mẽ** trong Power BI.
*   **Fact Tables (Bảng thực tế):** Chứa dữ liệu về các sự kiện nghiệp vụ (ví dụ: Sales, Orders). Các bảng này thường có nhiều hàng, chứa các giá trị số (số lượng, doanh thu) và các khóa ngoại để liên kết đến các bảng chiều.
*   **Dimension Tables (Bảng chiều):** Chứa thông tin mô tả về các thực thể nghiệp vụ (ví dụ: Products, Customers, Dates). Các bảng này thường có ít hàng hơn nhưng nhiều cột thuộc tính dùng để lọc và phân nhóm dữ liệu.

**Nguyên tắc:** Các bảng Dimension kết nối với bảng Fact theo mối quan hệ \*:1, tạo thành một cấu trúc giống như hình ngôi sao. Lọc luôn chảy từ Dimension xuống Fact.

### Tại sao Star Schema lại quan trọng?
*   **Hiệu suất:** Tối ưu hóa cho công cụ VertiPaq của Power BI, giúp các phép tính DAX nhanh hơn.
*   **Đơn giản:** Dễ hiểu và dễ sử dụng hơn cho người viết báo cáo. Các công thức DAX trở nên đơn giản và trực quan hơn.
*   **Khả năng mở rộng:** Dễ dàng thêm các bảng Dimension mới mà không ảnh hưởng đến phần còn lại của mô hình.

<div class="my-6">
    <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Video tham khảo</h3>
    <a href="https://www.youtube.com/watch?v=F_6a_dYJ32I" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700/50 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-colors shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
        <div class="ml-4">
            <p class="font-semibold text-blue-600 dark:text-blue-400">Understanding Star Schema and Why It's Important for Power BI</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">Video giải thích chi tiết về lược đồ hình sao và tầm quan trọng của nó đối với hiệu suất báo cáo.</p>
        </div>
    </a>
</div>
  `,
  'pbi-dax-intro': `
## Giới thiệu về DAX (Data Analysis Expressions)
DAX là ngôn ngữ công thức được sử dụng trong Power BI để tạo ra các tính toán tùy chỉnh. Nếu Power Query là về chuẩn bị dữ liệu, thì DAX là về phân tích dữ liệu.

### Measures vs. Calculated Columns
Đây là khái niệm cơ bản nhưng quan trọng nhất trong DAX.
*   **Calculated Column (Cột tính toán):**
    *   Tính toán cho từng hàng (row-by-row) và được lưu trữ vật lý trong mô hình dữ liệu.
    *   Sử dụng bộ nhớ (RAM) và làm tăng kích thước file.
    *   Tính toán một lần khi dữ liệu được làm mới.
    *   **Khi nào dùng:** Khi bạn muốn xem hoặc lọc theo kết quả của phép tính. Ví dụ: tạo một cột "Category" dựa trên giá trị của cột "Price".

*   **Measure (Số đo):**
    *   Không được lưu trữ trong mô hình.
    *   Được tính toán "on-the-fly" (tức thì) tại thời điểm bạn sử dụng nó trong một visual.
    *   Hoạt động dựa trên "filter context" (ngữ cảnh lọc) của visual đó.
    *   **Khi nào dùng:** Hầu hết các trường hợp tính toán tổng hợp (SUM, AVERAGE, COUNT). Đây là cách làm được khuyến nghị trong Power BI.

### Các hàm DAX cơ bản
*   **Hàm tổng hợp:** \`SUM()\`, \`AVERAGE()\`, \`COUNT()\`, \`DISTINCTCOUNT()\`.
*   **\`CALCULATE()\`:** **Hàm quan trọng và mạnh mẽ nhất trong DAX.** Nó cho phép bạn thay đổi ngữ cảnh lọc (filter context) để thực hiện các phép tính phức tạp.
    *   **Ví dụ:** \`Total Sales for USA = CALCULATE(SUM(Sales[Revenue]), Customers[Country] = "USA")\`
*   **\`RELATED()\`:** Được sử dụng trong Calculated Columns để lấy một giá trị từ phía '1' của một mối quan hệ.
    *   **Ví dụ:** Trong bảng Sales, tạo một cột tính toán để lấy Category từ bảng Products: \`Product Category = RELATED(Products[Category])\`.

<div class="my-6">
    <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Video tham khảo</h3>
    <a href="https://www.youtube.com/watch?v=g_k2p_vWJXM" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700/50 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-colors shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
        <div class="ml-4">
            <p class="font-semibold text-blue-600 dark:text-blue-400">DAX Calculated Columns vs Measures</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">Video từ SQLBI giải thích sự khác biệt cốt lõi và khi nào nên sử dụng từng loại.</p>
        </div>
    </a>
</div>
  `,
  'pbi-report-design': `
## Thiết kế Báo cáo Tương tác Nâng cao
Ngoài các biểu đồ cơ bản, Power BI cung cấp nhiều tính năng để tạo ra trải nghiệm phân tích sâu sắc và có tính dẫn dắt cho người dùng.

### Bookmarks (Dấu trang)
*   **Công dụng:** Bookmarks ghi lại "trạng thái" hiện tại của một trang báo cáo, bao gồm các bộ lọc, slicer, và trạng thái hiển thị của các visual.
*   **Ứng dụng:**
    *   Tạo ra một câu chuyện dữ liệu (data storytelling) bằng cách điều hướng người dùng qua các góc nhìn khác nhau của dữ liệu.
    *   Tạo các nút bấm để chuyển đổi giữa các loại biểu đồ khác nhau trong cùng một không gian.
    *   Thiết lập một trạng thái xem mặc định cho báo cáo.

### Report Page Tooltips (Chú giải công cụ tùy chỉnh)
*   **Công dụng:** Thay vì dùng tooltip mặc định, bạn có thể thiết kế một trang báo cáo riêng và sử dụng nó làm tooltip.
*   **Ứng dụng:** Khi người dùng di chuột qua một điểm dữ liệu (ví dụ: một cột trên biểu đồ), một cửa sổ nhỏ sẽ hiện ra, hiển thị một biểu đồ hoặc bảng chi tiết hơn liên quan đến điểm dữ liệu đó. Cung cấp thêm ngữ cảnh mà không cần rời khỏi trang hiện tại.

### Drillthrough (Xem chi tiết)
*   **Công dụng:** Cho phép người dùng điều hướng từ một trang báo cáo tổng quan đến một trang chi tiết hơn, trong khi vẫn giữ nguyên ngữ cảnh lọc.
*   **Ứng dụng:** Từ một biểu đồ doanh thu theo danh mục sản phẩm, người dùng có thể chuột phải vào một danh mục và chọn "Drillthrough" để chuyển đến một trang khác hiển thị danh sách chi tiết tất cả các giao dịch của danh mục đó.

### Conditional Formatting (Định dạng có điều kiện)
*   **Công dụng:** Tự động thay đổi định dạng của một visual (màu sắc, biểu tượng) dựa trên các quy tắc hoặc giá trị dữ liệu.
*   **Ứng dụng:**
    *   Trong một bảng, tô màu các giá trị doanh thu cao bằng màu xanh và các giá trị thấp bằng màu đỏ.
    *   Hiển thị các biểu tượng KPI (mũi tên lên/xuống) bên cạnh các chỉ số.

<div class="my-6">
    <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Video tham khảo</h3>
    <a href="https://www.youtube.com/watch?v=J_Q_3_x3KSo" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 bg-gray-100 dark:bg-gray-700/50 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-colors shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
        <div class="ml-4">
            <p class="font-semibold text-blue-600 dark:text-blue-400">Power BI Bookmarks and Buttons</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">Video hướng dẫn cách sử dụng Bookmarks và Buttons để tạo ra các báo cáo có tính tương tác cao.</p>
        </div>
    </a>
</div>
  `,
  'pbi-service': `
## Power BI Service (Publish, Share, Refresh)
Sau khi xây dựng xong báo cáo trong Power BI Desktop, Power BI Service là nơi bạn đưa báo cáo đó đến với người dùng.

### Reports vs. Dashboards
*   **Report (Báo cáo):** Là một tập hợp gồm nhiều trang trực quan hóa dữ liệu, được tạo trong Power BI Desktop. Báo cáo có tính tương tác cao, cho phép lọc chéo và xem chi tiết.
*   **Dashboard (Bảng điều khiển):** Là một canvas duy nhất, thường hiển thị các trực quan hóa quan trọng nhất được "ghim" (pinned) từ một hoặc nhiều báo cáo. Dashboard dùng để theo dõi các chỉ số quan trọng nhất (KPIs) và cung cấp một cái nhìn tổng quan 360 độ về doanh nghiệp.

### Workspaces (Không gian làm việc)
*   Workspaces là các container để hợp tác và chia sẻ nội dung. Bạn xuất bản báo cáo từ Desktop vào một workspace.
*   **My Workspace:** Không gian làm việc cá nhân của bạn.
*   **App Workspaces:** Dùng để hợp tác với đồng nghiệp. Nội dung trong workspace này có thể được đóng gói và phân phối dưới dạng một "App".

### Sharing Content (Chia sẻ nội dung)
Có nhiều cách để chia sẻ:
*   **Chia sẻ báo cáo/dashboard riêng lẻ:** Cấp quyền truy cập cho từng người dùng.
*   **Phân phối qua Power BI App:** Phương pháp được khuyến nghị để chia sẻ nội dung cho một lượng lớn người dùng. Bạn đóng gói một bộ sưu tập các báo cáo và dashboard vào một App, sau đó cấp quyền cho người dùng truy cập App đó.
*   **Nhúng (Embed):** Nhúng báo cáo vào SharePoint Online hoặc các ứng dụng web khác.

### Scheduled Refresh (Làm mới theo lịch)
*   Để giữ cho dữ liệu trong báo cáo của bạn luôn cập nhật, bạn cần cấu hình làm mới theo lịch trong Power BI Service.
*   Bạn cần cài đặt và cấu hình một **On-premises data gateway** nếu nguồn dữ liệu của bạn nằm trong mạng nội bộ (on-premises), ví dụ như SQL Server.
*   Đối với các nguồn dữ liệu trên đám mây, bạn chỉ cần cung cấp thông tin xác thực.
*   Bạn có thể đặt lịch làm mới dữ liệu tối đa 8 lần/ngày (với giấy phép Pro) hoặc 48 lần/ngày (với Premium).
  `,
  'pbi-report-agg': `
## Tạo report từ Aggregated data
Sau khi đã có bảng dữ liệu tổng hợp (Aggregated Data), việc xây dựng báo cáo tương tác trở nên rất nhanh chóng và hiệu quả.

### Các loại Visualizations (Trực quan hóa) phổ biến
*   **Slicer:**
    *   **Công dụng:** Slicer là một bộ lọc trực quan trên trang báo cáo, cho phép người dùng dễ dàng lọc toàn bộ báo cáo theo một hoặc nhiều giá trị cụ thể (ví dụ: lọc theo "Nhóm SP" hoặc "Tỉnh thành").
    *   **Cách tạo:** Kéo cột bạn muốn dùng để lọc vào canvas và chuyển loại visual thành "Slicer".

*   **Column chart (Biểu đồ cột):**
    *   **Công dụng:** Rất tốt để so sánh giá trị giữa các danh mục khác nhau hoặc xem xu hướng theo thời gian.
    *   **Cách tạo:**
        *   **Axis (Trục):** Kéo cột chiều vào đây (ví dụ: "Period" - tháng/tuần).
        *   **Values (Giá trị):** Kéo cột số liệu vào đây (ví dụ: "Value" - Doanh thu).

*   **Doughnut chart (Biểu đồ vành khuyên):**
    *   **Công dụng:** Hiển thị tỷ lệ phần trăm của các phần trong một tổng thể. Rất hữu ích để xem sự đóng góp của từng danh mục.
    *   **Cách tạo:**
        *   **Legend (Chú giải):** Kéo cột chiều vào đây (ví dụ: "Tỉnh thành" hoặc "Nhóm SP").
        *   **Values (Giá trị):** Kéo cột số liệu vào đây (ví dụ: "Value" - Doanh thu).

*   **Table (Bảng):**
    *   **Công dụng:** Hiển thị dữ liệu chi tiết dưới dạng bảng, cung cấp thông tin chính xác.
    *   **Cách tạo:** Kéo các cột chiều ("Entity") và số liệu ("Value") vào vùng "Columns".

### Xây dựng báo cáo
Kết hợp các visual trên vào một trang báo cáo. Khi người dùng chọn một giá trị trong Slicer (ví dụ: chọn một tỉnh), tất cả các biểu đồ khác trên trang sẽ tự động được lọc lại để chỉ hiển thị dữ liệu của tỉnh đó.
  `,
  'pbi-report-detail': `
## Tạo report Detail data (Đơn bán chi tiết)
Báo cáo chi tiết cung cấp cái nhìn sâu hơn về các giao dịch riêng lẻ, thường được sử dụng để tra cứu hoặc kiểm tra thông tin.

### Kịch bản: Bảng chi tiết đơn bán với số lượng lũy kế
*   **Mục tiêu:** Tạo một bảng hiển thị danh sách các đơn bán chi tiết từ Product ENV và thêm một cột tính toán lũy kế số lượng bán theo thời gian.

### Tính toán lũy kế trong Power Query
Việc tính toán lũy kế (running total) có thể được thực hiện trực tiếp trong Power Query trước khi tải dữ liệu vào mô hình.
1.  **Sắp xếp dữ liệu:** Bước đầu tiên và quan trọng nhất là phải sắp xếp bảng theo cột thời gian (\`createdOn\`) theo thứ tự tăng dần. Điều này đảm bảo việc tính toán lũy kế diễn ra đúng trình tự.
2.  **Thêm cột Index:** Thêm một cột chỉ mục (Index Column) bắt đầu từ 0 hoặc 1. Cột này sẽ giúp trong việc tính toán.
3.  **Thêm cột tùy chỉnh (Custom Column):**
    *   Tạo một cột tùy chỉnh mới, đặt tên là "Cumulative Quantity".
    *   Sử dụng công thức Power Query M để tính tổng. Công thức sẽ giống như sau:
        \`\`\`m
        List.Sum(List.FirstN(#"Tên Bước Trước"[Số lượng DH], [Index] + 1))
        \`\`\`
        *   **Giải thích:** Đối với mỗi hàng, công thức này sẽ lấy danh sách các giá trị trong cột "Số lượng DH" từ hàng đầu tiên cho đến hàng hiện tại (dựa vào cột Index), sau đó tính tổng của chúng.

### Xây dựng Báo cáo
*   Sau khi đã có cột "Cumulative Quantity" trong Power Query và tải vào mô hình, bạn có thể tạo một visual "Table".
*   Kéo các cột chi tiết như "Mã DH", "Sản phẩm", "Đơn vị DH", "Số lượng DH" và cột "Cumulative Quantity" vừa tạo vào bảng.
*   Báo cáo này sẽ hiển thị chi tiết từng đơn hàng và cho thấy số lượng bán được tích lũy theo thời gian như thế nào.
  `,
  'pbi-report-margin': `
## Tạo report Margin
Báo cáo này giúp các nhà quản lý phân tích tỷ suất lợi nhuận của từng sản phẩm và đưa ra các quyết định kinh doanh.

### Thiết kế báo cáo
Báo cáo này thường bao gồm các thành phần cho phép phân tích sâu, từ tổng quan đến chi tiết.
*   **Slicer (Bộ lọc):**
    *   Đặt một Slicer cho cột "Sản phẩm". Điều này cho phép người dùng chọn một hoặc nhiều sản phẩm cụ thể để phân tích.

*   **Table detail: margin (Bảng chi tiết margin):**
    *   Đây là visual chính. Tạo một visual "Table".
    *   Kéo các cột từ bảng Margin đã tính toán ở bước trước vào: "Sản phẩm", "Giá mua đại diện", "Giá bán đại diện", "Margin(%)".
    *   Áp dụng định dạng có điều kiện (Conditional Formatting) cho cột "Margin(%)" để làm nổi bật các giá trị cao (màu xanh) và thấp (màu đỏ).

*   **Table Sale Order Detail & Buy Order Detail:**
    *   Tạo hai visual "Table" riêng biệt.
    *   Một bảng hiển thị chi tiết các đơn hàng bán (Sale Order Detail).
    *   Bảng còn lại hiển thị chi tiết các đơn hàng mua (Buy Order Detail).

### Interaction (Tương tác giữa các visual)
*   Đây là tính năng mạnh mẽ của Power BI. Theo mặc định, các visual trên cùng một trang sẽ tương tác với nhau.
*   **Hành vi:** Khi người dùng chọn một sản phẩm trong Slicer hoặc một dòng trong bảng Margin, hai bảng chi tiết đơn hàng bán và đơn hàng mua sẽ tự động được lọc (auto load SOD, BOD) để chỉ hiển thị các giao dịch liên quan đến sản phẩm đó.
*   **Lợi ích:** Điều này cho phép người dùng nhanh chóng xem xét các giao dịch cụ thể đã góp phần tạo nên giá mua và giá bán trung bình của một sản phẩm, giúp họ hiểu rõ hơn về con số Margin.
  `,
};