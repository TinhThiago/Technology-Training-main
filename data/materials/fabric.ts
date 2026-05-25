
export const fabricMaterials: Record<string, string> = {
  // Corrected key to match 'ok-fabric-db' from constants.ts
  'ok-fabric-db': `
## Kho Dữ Liệu Fabric: Chọn Công Cụ Nào Cho Bài Toán Của Bạn?

Microsoft Fabric cung cấp một hệ sinh thái mạnh mẽ với nhiều lựa chọn lưu trữ như Warehouse, Lakehouse, SQL Database, Cosmos DB và Eventhouse. Việc lựa chọn đúng công cụ quyết định hiệu năng, chi phí và sự thành công của dự án.

### Quy tắc vàng: Bắt đầu từ Mục tiêu Nghiệp vụ
Lựa chọn kho dữ liệu tối ưu được quyết định hoàn toàn bởi **mục tiêu nghiệp vụ cốt lõi** và **loại hình dữ liệu**. Không có công cụ nào là "tốt nhất" tuyệt đối, chỉ có công cụ "phù hợp nhất".

### Khung tham chiếu: Cân bằng giữa Đơn giản và Quy mô
*   **Tự phục vụ & Đơn giản:** Datamart, SQL Database. (Chi phí nhân sự thấp, triển khai nhanh).
*   **Linh hoạt/Tốc độ:** Cosmos DB (NoSQL), Semantic Model (Lớp báo cáo).
*   **Quy mô Doanh nghiệp & Hiệu năng:** Warehouse, Lakehouse, Eventhouse. (Yêu cầu kỹ năng chuyên môn cao).

### 1. BI cho Phòng ban hay Toàn Doanh nghiệp?
*   **Datamart (Self-Service BI):** Dành cho các team BI nhỏ muốn tự phục vụ nhanh chóng.
    *   *Ưu điểm:* Dễ dùng, tự động tạo SQL endpoint, tích hợp Power BI, không cần DBA.
    *   *Nhược điểm:* Giới hạn về quy mô, ít tính năng hơn SQL thuần.
*   **Warehouse (Enterprise BI):** Nền tảng cho BI quy mô toàn doanh nghiệp, dữ liệu lớn.
    *   *Ưu điểm:* Hiệu năng cao (OLAP), hỗ trợ Direct Lake, quản lý tập trung.
    *   *Nhược điểm:* Yêu cầu đội ngũ Data Engineer, quản trị phức tạp.

### 2. Backend cho Ứng dụng - Ổn định hay Tốc độ?
*   **SQL Database (OLTP):** Nền tảng vững chắc cho ứng dụng giao dịch, nghiệp vụ (ERP, CRM).
    *   *Ưu điểm:* Chuẩn SQL, hỗ trợ transaction/JOIN tốt, ổn định.
    *   *Đánh đổi:* Khả năng scale kém linh hoạt hơn NoSQL.
*   **Cosmos DB (NoSQL):** Động cơ tốc độ cao cho web/mobile app hiện đại, dữ liệu phi cấu trúc.
    *   *Ưu điểm:* Độ trễ thấp, auto-scale toàn cầu, đa mô hình.
    *   *Đánh đổi:* Chi phí cao nếu partition không tối ưu, không giỏi join phức tạp.

### 3. Khi bài toán vượt quy mô (Big Data, AI, Real-time)
*   **Lakehouse:** Dành cho Big Data và AI/ML.
    *   *Cốt lõi:* Lưu trữ Delta Lake, xử lý bằng Spark/Notebooks.
    *   *Dùng khi:* Data engineering, xử lý dữ liệu phi cấu trúc/bán cấu trúc cực lớn.
*   **Eventhouse:** Sức mạnh phân tích dữ liệu thời gian thực.
    *   *Cốt lõi:* Kusto Engine (KQL) tốc độ truy vấn cực nhanh.
    *   *Dùng khi:* Xử lý streaming data, logs, telemetry, IoT.

### Lớp cuối cùng: Semantic Model
Semantic Model không lưu trữ dữ liệu thô. Nó là lớp logic, mô hình hóa dữ liệu ("Single source of truth") để phục vụ trực quan hóa trên Power BI.

### Bảng tóm tắt chiến lược
| Loại Kho Dữ Liệu | Mục Tiêu Cốt Lõi | Dùng Khi... |
| :--- | :--- | :--- |
| **SQL Database** | OLTP, Ứng dụng nghiệp vụ | Cần dữ liệu cấu trúc, ổn định, giao dịch. |
| **Warehouse** | Enterprise BI (OLAP) | Phân tích dữ liệu lớn, BI toàn doanh nghiệp. |
| **Lakehouse** | Big Data, AI/ML | Data engineering, xử lý dữ liệu cực lớn (Spark). |
| **Eventhouse** | Streaming & Real-time | Phân tích logs, IoT, thời gian thực (KQL). |
| **Cosmos DB** | NoSQL, App hiện đại | Web/mobile app cần tốc độ, độ trễ thấp. |
| **Datamart** | Self-service BI | Team BI nhỏ muốn tự tạo data mart nhanh. |
  `
};
