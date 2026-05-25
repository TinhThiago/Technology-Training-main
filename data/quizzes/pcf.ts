
import type { Quiz } from '../../types';

export const pcfQuizzes: Record<string, Quiz> = {
  'ok-pcf': {
    topic: 'Power Apps Component Framework (PCF)',
    questions: [
      {
        question: 'PCF là viết tắt của từ gì?',
        options: ['Power Component Factory', 'Power Apps Component Framework', 'Power Control Function', 'Private Cloud Framework'],
        correctAnswer: 'Power Apps Component Framework',
        explanation: 'PCF là khung làm việc để xây dựng các component code tùy chỉnh cho Power Platform.'
      },
      {
        question: 'Lệnh CLI nào dùng để khởi tạo một dự án PCF mới?',
        options: ['npm init pcf', 'pac pcf init', 'dotnet new pcf', 'pac create control'],
        correctAnswer: 'pac pcf init',
        explanation: 'PAC CLI sử dụng lệnh `pac pcf init` kèm theo các tham số namespace và template để tạo khung dự án.'
      },
      {
        question: 'Phương thức nào trong vòng đời PCF được gọi liên tục mỗi khi dữ liệu thay đổi?',
        options: ['init', 'getOutputs', 'destroy', 'updateView'],
        correctAnswer: 'updateView',
        explanation: 'updateView được host gọi bất cứ khi nào context (dữ liệu, kích thước container...) thay đổi để component vẽ lại giao diện.'
      },
      {
        question: 'Để báo cho Host biết giá trị của control đã thay đổi, ta cần gọi hàm nào?',
        options: ['context.updated()', 'notifyOutputChanged()', 'return newOutputs', 'refresh()'],
        correctAnswer: 'notifyOutputChanged()',
        explanation: 'Component gọi notifyOutputChanged() để kích hoạt quy trình lưu dữ liệu của Host. Sau đó Host sẽ gọi lại getOutputs().'
      },
      {
        question: 'File nào định nghĩa các thuộc tính (properties) đầu vào/đầu ra của component?',
        options: ['index.ts', 'ControlManifest.Input.xml', 'package.json', 'webpack.config.js'],
        correctAnswer: 'ControlManifest.Input.xml',
        explanation: 'ControlManifest.Input.xml là file metadata định nghĩa hợp đồng (contract) giữa component và Power Apps.'
      }
    ]
  }
};
