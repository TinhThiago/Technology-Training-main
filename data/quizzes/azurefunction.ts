
// data/quizzes/azureFunctionTasks.ts

import type { Quiz } from '../../types';

export const azurefunctionQuizzes: Record<string, Quiz> = {
  'ok-azurefunction': {
    topic: 'Azure Function',
    questions: [
      {
        question: 'Azure Function là mô hình gì?',
        options: [
          'Desktop Application',
          'Serverless Computing',
          'Mobile Framework',
          'Database Engine'
        ],
        correctAnswer: 'Serverless Computing',
        explanation: 'Azure Function là dịch vụ serverless giúp chạy code mà không cần quản lý server.'
      },
      {
        question: 'Trigger nào thường dùng để tạo API endpoint?',
        options: [
          'Blob Trigger',
          'Queue Trigger',
          'HTTP Trigger',
          'Timer Trigger'
        ],
        correctAnswer: 'HTTP Trigger',
        explanation: 'HTTP Trigger cho phép Azure Function hoạt động như một REST API.'
      },
      {
        question: 'Power Automate có thể gọi Azure Function bằng cách nào?',
        options: [
          'SOAP Connector',
          'HTTP Action',
          'Power BI Gateway',
          'Desktop Flow'
        ],
        correctAnswer: 'HTTP Action',
        explanation: 'Power Automate thường gọi Azure Function thông qua HTTP request.'
      },
      {
        question: 'Azure Function phù hợp nhất với trường hợp nào?',
        options: [
          'Thiết kế UI',
          'Xử lý backend và tích hợp hệ thống',
          'Thiết kế báo cáo',
          'Tạo dashboard'
        ],
        correctAnswer: 'Xử lý backend và tích hợp hệ thống',
        explanation: 'Azure Function thường dùng để xử lý logic backend, API và tích hợp hệ thống.'
      },
      {
        question: 'Dịch vụ nào dùng để theo dõi log và monitoring cho Azure Function?',
        options: [
          'Power BI',
          'Dataverse',
          'Application Insights',
          'SharePoint'
        ],
        correctAnswer: 'Application Insights',
        explanation: 'Application Insights giúp monitor log, performance và lỗi của Azure Function.'
      }
    ]
  }
};