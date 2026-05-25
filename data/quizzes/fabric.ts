
import type { Quiz } from '../../types';

export const fabricQuizzes: Record<string, Quiz> = {
  'fab-db-selection': {
    topic: 'Lựa chọn Database trong Fabric',
    questions: [
      {
        question: 'Công cụ nào trong Fabric là tối ưu nhất cho bài toán phân tích logs và dữ liệu IoT thời gian thực?',
        options: ['Warehouse', 'SQL Database', 'Eventhouse', 'Lakehouse'],
        correctAnswer: 'Eventhouse',
        explanation: 'Eventhouse sử dụng Kusto Engine (KQL) được thiết kế chuyên biệt cho tốc độ truy vấn cực nhanh trên dữ liệu streaming và logs.'
      },
      {
        question: 'Nếu bạn đang xây dựng backend cho một ứng dụng giao dịch nghiệp vụ (OLTP) cần sự ổn định và cấu trúc rõ ràng, bạn nên chọn gì?',
        options: ['Cosmos DB', 'SQL Database', 'Datamart', 'Semantic Model'],
        correctAnswer: 'SQL Database',
        explanation: 'SQL Database là nền tảng vững chắc cho các ứng dụng giao dịch (OLTP) với khả năng hỗ trợ transaction và tính toàn vẹn dữ liệu cao.'
      },
      {
        question: 'Sự khác biệt chính giữa Datamart và Warehouse là gì?',
        options: ['Datamart dành cho Enterprise BI, Warehouse dành cho Self-service.', 'Datamart dành cho Self-service BI (quy mô nhỏ/vừa), Warehouse dành cho Enterprise BI (quy mô lớn).', 'Warehouse không hỗ trợ SQL.', 'Datamart lưu trữ dữ liệu dưới dạng NoSQL.'],
        correctAnswer: 'Datamart dành cho Self-service BI (quy mô nhỏ/vừa), Warehouse dành cho Enterprise BI (quy mô lớn).',
        explanation: 'Datamart trao quyền cho người dùng nghiệp vụ (citizen developers) tự tạo kho dữ liệu nhanh chóng, trong khi Warehouse phục vụ nhu cầu phân tích tập trung, quy mô lớn của doanh nghiệp.'
      }
    ]
  }
};
