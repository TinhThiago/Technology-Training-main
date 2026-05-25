
import type { Quiz } from '../../types';

export const promptEngineeringQuizzes: Record<string, Quiz> = {
  'pe-basics': {
    topic: 'Nguyên tắc cơ bản của Prompt',
    questions: [
      {
        question: 'Tham số nào kiểm soát mức độ ngẫu nhiên hoặc "sáng tạo" của đầu ra từ một LLM?',
        options: ['Top-K', 'Top-P', 'Temperature', 'Output Length'],
        correctAnswer: 'Temperature',
        explanation: 'Temperature (Nhiệt độ) điều chỉnh sự ngẫu nhiên trong việc lựa chọn token. Giá trị cao hơn dẫn đến kết quả sáng tạo hơn, trong khi giá trị thấp hơn làm cho kết quả dễ đoán hơn.'
      },
      {
        question: 'Kỹ thuật prompting nào cung cấp cho mô hình một vài ví dụ về đầu vào và đầu ra mong muốn?',
        options: ['Zero-shot', 'One-shot', 'Few-shot', 'System Prompting'],
        correctAnswer: 'Few-shot',
        explanation: 'Few-shot prompting "dạy" mô hình cách thực hiện một tác vụ bằng cách cung cấp nhiều ví dụ, giúp nó hiểu rõ hơn về định dạng và kiểu kết quả mong đợi.'
      },
      {
        question: 'Việc yêu cầu mô hình "Hãy hành động như một nhà thơ" là một ví dụ về kỹ thuật prompting nào?',
        options: ['Contextual Prompting', 'Role Prompting', 'System Prompting', 'Zero-shot'],
        correctAnswer: 'Role Prompting',
        explanation: 'Role prompting (Gán vai trò) chỉ định một nhân vật hoặc vai trò cụ thể cho mô hình, ảnh hưởng đến giọng văn, phong cách và kiến thức của nó.'
      }
    ]
  },
  'pe-advanced': {
    topic: 'Kỹ thuật Prompt nâng cao',
    questions: [
      {
        question: 'Kỹ thuật nào yêu cầu mô hình giải thích các bước suy luận trung gian trước khi đưa ra câu trả lời cuối cùng?',
        options: ['ReAct', 'Step-back Prompting', 'Tree of Thoughts (ToT)', 'Chain of Thought (CoT)'],
        correctAnswer: 'Chain of Thought (CoT)',
        explanation: 'Chain of Thought (Chuỗi suy nghĩ) cải thiện khả năng suy luận của mô hình bằng cách buộc nó phải trình bày quá trình logic từng bước một.'
      },
      {
        question: 'Phương pháp hay nhất (Best Practice) nào sau đây là quan trọng nhất để giúp mô hình hiểu rõ định dạng đầu ra bạn mong muốn?',
        options: ['Sử dụng prompt ngắn gọn', 'Cung cấp ví dụ (Provide examples)', 'Tăng nhiệt độ (temperature)', 'Sử dụng ngôn ngữ phức tạp'],
        correctAnswer: 'Cung cấp ví dụ (Provide examples)',
        explanation: 'Cung cấp ví dụ (one-shot/few-shot) là một trong những cách hiệu quả nhất để hướng dẫn mô hình về cấu trúc và kiểu đầu ra mà bạn mong đợi.'
      },
      {
        question: 'Framework nào cho phép mô hình AI sử dụng các công cụ bên ngoài (như tìm kiếm web) để thu thập thông tin và kết hợp vào quá trình suy luận?',
        options: ['Chain of Thought (CoT)', 'ReAct (Reason & Act)', 'Tree of Thoughts (ToT)', 'Few-shot Prompting'],
        correctAnswer: 'ReAct (Reason & Act)',
        explanation: 'ReAct kết hợp Suy luận (Reasoning) với Hành động (Acting), cho phép mô hình tương tác với các công cụ bên ngoài để giải quyết các vấn đề đòi hỏi thông tin cập nhật hoặc khả năng tính toán.'
      }
    ]
  },
  'pe-vibe-ideas': {
    topic: 'Ý tưởng cho Vibe Coding',
    questions: [
      {
        question: "Loại ứng dụng nào phù hợp với Vibe Coding khi người dùng muốn AI tự động tạo biểu đồ từ một câu lệnh đơn giản như 'Tạo dashboard doanh thu theo vùng'?",
        options: ['Database apps', 'Hardware-based apps', 'Dashboards', 'Automation / Macros'],
        correctAnswer: 'Dashboards',
        explanation: 'Vibe Coding rất phù hợp để nhanh chóng tạo các dashboard trực quan từ các yêu cầu ngôn ngữ tự nhiên, biến ý tưởng thành biểu đồ mà không cần cấu hình thủ công.'
      },
      {
        question: "Việc tạo một 'English Speaking Coach' để luyện tập hội thoại là một ví dụ về loại ứng dụng Vibe Coding nào?",
        options: ['Chatbot / Assistant', 'Coaches / Learning agent', 'Multimodality', 'Hardware-based apps'],
        correctAnswer: 'Coaches / Learning agent',
        explanation: 'Các agent học tập và huấn luyện, như một coach ngôn ngữ, là một ứng dụng tuyệt vời của Vibe Coding để tạo ra các trải nghiệm học tập tương tác và cá nhân hóa.'
      }
    ]
  },
  'pe-reverse': {
    topic: 'Kỹ thuật Prompt Đảo ngược',
    questions: [
      {
        question: 'Bản chất cốt lõi của kỹ thuật Prompt Đảo ngược là gì?',
        options: ['Bắt đầu từ Prompt để tạo ra Output.', 'Bắt đầu từ Output để suy ngược lại Prompt.', 'Đảo ngược thứ tự các từ trong câu lệnh.', 'Sử dụng AI để dịch văn bản ngược lại.'],
        correctAnswer: 'Bắt đầu từ Output để suy ngược lại Prompt.',
        explanation: 'Reverse Prompt Engineering là quá trình phân tích một kết quả (Output) mong muốn để tìm ra câu lệnh (Prompt) đã tạo ra nó.'
      },
      {
        question: 'Tại sao việc "Chọn output mẫu" lại là bước đầu tiên trong quy trình Prompt đảo ngược?',
        options: ['Để AI có dữ liệu để học và phân tích phong cách, cấu trúc.', 'Để kiểm tra xem AI có sao chép được không.', 'Để làm đẹp báo cáo.', 'Không cần thiết, có thể bỏ qua.'],
        correctAnswer: 'Để AI có dữ liệu để học và phân tích phong cách, cấu trúc.',
        explanation: 'Output mẫu đóng vai trò là "bản thiết kế" để AI phân tích các yếu tố như giọng điệu, cấu trúc và mục tiêu, từ đó tái tạo lại prompt chính xác.'
      },
      {
        question: 'Lợi ích dài hạn quan trọng nhất của việc thành thạo Prompt Đảo ngược là gì?',
        options: ['Viết prompt nhanh hơn một chút.', 'Biết được nhiều từ khóa hơn.', 'Hiểu "cách AI suy nghĩ" và xây dựng hệ thống prompt chuẩn hóa.', 'Tăng điểm số trong các bài kiểm tra AI.'],
        correctAnswer: 'Hiểu "cách AI suy nghĩ" và xây dựng hệ thống prompt chuẩn hóa.',
        explanation: 'Kỹ thuật này giúp bạn chuyển từ việc dùng AI như một hộp đen sang việc hiểu rõ cơ chế vận hành của nó, từ đó kiểm soát tốt hơn các kết quả đầu ra.'
      }
    ]
  }
};
