// data/quizzes/pluginTasks.ts

import type { Quiz } from '../../types';

export const pluginQuizzes: Record<string, Quiz> = {
  'ok-plugin': {
    topic: 'Plugin trong Power Platform',
    questions: [
      {
        question: 'Plugin trong Dataverse thường được viết bằng ngôn ngữ nào?',
        options: ['JavaScript', 'TypeScript', 'C#', 'Python'],
        correctAnswer: 'C#',
        explanation: 'Plugin trong Dataverse chủ yếu được phát triển bằng C# và chạy trên .NET.'
      },
      {
        question: 'Plugin được dùng để làm gì?',
        options: [
          'Thiết kế giao diện Power Apps',
          'Xử lý logic nghiệp vụ phía server',
          'Tạo dashboard Power BI',
          'Thiết kế báo cáo'
        ],
        correctAnswer: 'Xử lý logic nghiệp vụ phía server',
        explanation: 'Plugin cho phép xử lý logic nghiệp vụ nâng cao trực tiếp trên Dataverse.'
      },
      {
        question: 'Stage nào chạy trước khi dữ liệu được lưu vào database?',
        options: ['PostOperation', 'PreOperation', 'AsyncOperation', 'PostValidation'],
        correctAnswer: 'PreOperation',
        explanation: 'PreOperation chạy trước khi dữ liệu được commit vào database.'
      },
      {
        question: 'Execution Context trong Plugin chứa thông tin gì?',
        options: [
          'Thông tin giao diện người dùng',
          'Thông tin request và entity',
          'Thông tin Power BI',
          'Thông tin browser'
        ],
        correctAnswer: 'Thông tin request và entity',
        explanation: 'Execution Context chứa message, user, entity, stage và các thông tin runtime khác.'
      },
      {
        question: 'Service nào dùng để thao tác CRUD trong Plugin?',
        options: [
          'Tracing Service',
          'Organization Service',
          'Notification Service',
          'Canvas Service'
        ],
        correctAnswer: 'Organization Service',
        explanation: 'Organization Service được dùng để Create, Retrieve, Update và Delete dữ liệu Dataverse.'
      }
    ]
  }
};