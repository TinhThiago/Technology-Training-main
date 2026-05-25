import type { Quiz } from '../../types';

export const aiAgentQuizzes: Record<string, Quiz> = {
  'ai-concepts': {
    topic: 'Các khái niệm về AI',
    questions: [
      {
        question: 'Mối quan hệ nào sau đây mô tả đúng nhất về AI, Machine Learning (ML), và Deep Learning (DL)?',
        options: [
          'AI là một tập hợp con của ML, ML là một tập hợp con của DL.',
          'ML là một tập hợp con của AI, DL là một tập hợp con của ML.',
          'DL là một tập hợp con của AI, AI là một tập hợp con của ML.',
          'AI, ML, và DL là các lĩnh vực hoàn toàn riêng biệt.'
        ],
        correctAnswer: 'ML là một tập hợp con của AI, DL là một tập hợp con của ML.',
        explanation: 'Trí tuệ Nhân tạo (AI) là lĩnh vực rộng lớn nhất. Machine Learning (ML) là một phương pháp để đạt được AI. Deep Learning (DL) là một kỹ thuật chuyên biệt trong ML.'
      },
      {
        question: 'Đặc điểm chính của Generative AI (AI tạo sinh) là gì?',
        options: [
          'Phân loại dữ liệu có sẵn.',
          'Dự đoán một giá trị số.',
          'Tạo ra nội dung mới và nguyên bản.',
          'Nhận dạng các đối tượng trong ảnh.'
        ],
        correctAnswer: 'Tạo ra nội dung mới và nguyên bản.',
        explanation: 'Generative AI tập trung vào việc tạo ra nội dung mới như văn bản, hình ảnh, âm thanh, thay vì chỉ phân tích dữ liệu hiện có.'
      }
    ]
  },
  'agent-concepts': {
    topic: 'Khái niệm về Agent',
    questions: [
      {
        question: 'Ba thành phần cốt lõi của một AI Agent là gì?',
        options: [
          'Đầu vào, Xử lý, Đầu ra',
          'Dữ liệu, Thuật toán, Mô hình',
          'Nhận thức (Perception), Bộ não (Brain), Hành động (Action)',
          'Copilot Studio, Power Automate, AI Builder'
        ],
        correctAnswer: 'Nhận thức (Perception), Bộ não (Brain), Hành động (Action)',
        explanation: 'Một agent nhận thức môi trường, suy nghĩ và ra quyết định, sau đó thực hiện hành động để tác động lại môi trường.'
      },
      {
        question: 'Thành phần nào của một agent cho phép nó tác động trở lại môi trường (ví dụ: gửi email, cập nhật cơ sở dữ liệu)?',
        options: ['Sensors (Cảm biến)', 'Brain (Bộ não)', 'Actuators (Cơ cấu chấp hành)', 'Model (Mô hình)'],
        correctAnswer: 'Actuators (Cơ cấu chấp hành)',
        explanation: 'Actuators là các cơ chế mà agent sử dụng để thực hiện hành động. Trong Power Platform, Power Automate thường đóng vai trò là một tập hợp các actuators mạnh mẽ.'
      }
    ]
  },
  'agentic-ai-concepts': {
    topic: 'Khái niệm Agentic AI',
    questions: [
      {
        question: 'Khả năng chia một mục tiêu lớn thành các bước nhỏ hơn của một agent được gọi là gì?',
        options: [ 'Memory (Bộ nhớ)', 'Tool Use (Sử dụng công cụ)', 'Planning (Lập kế hoạch)', 'Perception (Nhận thức)' ],
        correctAnswer: 'Planning (Lập kế hoạch)',
        explanation: 'Lập kế hoạch là một khả năng cốt lõi của các hệ thống agentic, cho phép chúng giải quyết các vấn đề phức tạp một cách có hệ thống.'
      },
      {
        question: 'Hệ thống gồm nhiều agent với các vai trò khác nhau làm việc cùng nhau được gọi là gì?',
        options: [ 'Single-agent System', 'Multi-agent System', 'Generative System', 'Predictive System' ],
        correctAnswer: 'Multi-agent System',
        explanation: 'Hệ thống đa agent tận dụng sức mạnh của sự hợp tác, trong đó mỗi agent có thể chuyên về một nhiệm vụ cụ thể (lập kế hoạch, thực thi, phê bình).'
      }
    ]
  },
  'ai-builder': {
    topic: 'AI Builder',
    questions: [
      {
        question: 'Lợi ích chính của việc sử dụng AI Builder là gì?',
        options: ['Viết các thuật toán AI phức tạp bằng Python.', 'Thêm các khả năng AI vào ứng dụng và flow mà không cần code.', 'Chỉ dùng để phân tích dữ liệu trong Power BI.', 'Xây dựng các chatbot tùy chỉnh.'],
        correctAnswer: 'Thêm các khả năng AI vào ứng dụng và flow mà không cần code.',
        explanation: 'AI Builder dân chủ hóa AI bằng cách cung cấp các mô hình dựng sẵn và tùy chỉnh có thể tích hợp vào Power Platform một cách dễ dàng.'
      }
    ]
  },
  'copilot-studio': {
    topic: 'Copilot Studio',
    questions: [
      {
        question: 'Trong Copilot Studio, thành phần nào định nghĩa một nhánh của cuộc hội thoại được kích hoạt bởi các cụm từ của người dùng?',
        options: ['Entity', 'Action', 'Topic', 'Node'],
        correctAnswer: 'Topic',
        explanation: 'Mỗi Topic đại diện cho một luồng hội thoại cụ thể mà copilot có thể xử lý, được bắt đầu bởi các cụm từ kích hoạt (trigger phrases).'
      }
    ]
  },
  'prompt-builder': {
    topic: 'Prompt Builder',
    questions: [
        {
            question: 'Ưu điểm chính của việc sử dụng Prompt Builder so với việc viết prompt trực tiếp trong flow là gì?',
            options: [
                'Prompt chạy nhanh hơn.',
                'Cho phép tạo các prompt có thể tái sử dụng và quản lý tập trung.',
                'Luôn trả về kết quả chính xác hơn.',
                'Không cần khóa API.'
            ],
            correctAnswer: 'Cho phép tạo các prompt có thể tái sử dụng và quản lý tập trung.',
            explanation: 'Prompt Builder giúp bạn tránh lặp lại code, quản lý các prompt một cách nhất quán và dễ dàng cập nhật chúng ở một nơi duy nhất.'
        },
        {
            question: 'Làm thế nào bạn có thể truyền dữ liệu động (ví dụ: tên khách hàng từ một ứng dụng) vào một prompt được tạo bằng Prompt Builder?',
            options: [
                'Bạn phải tạo một prompt riêng cho mỗi khách hàng.',
                'Bằng cách định nghĩa các biến đầu vào (Input variables) trong prompt.',
                'Prompt Builder không hỗ trợ dữ liệu động.',
                'Bằng cách sử dụng hàm concat() trong Power Apps.'
            ],
            correctAnswer: 'Bằng cách định nghĩa các biến đầu vào (Input variables) trong prompt.',
            explanation: 'Biến đầu vào cho phép bạn tạo các "chỗ trống" trong prompt của mình, sau đó có thể được điền bằng dữ liệu từ Power App hoặc Power Automate flow khi nó chạy.'
        }
    ]
  },
  'agent-best-practices': {
    topic: 'Best Practices',
    questions: [
      {
        question: 'Nguyên tắc "AI có trách nhiệm" (Responsible AI) nào nhấn mạnh việc đảm bảo các mô hình AI không đưa ra các quyết định không công bằng dựa trên dữ liệu đầu vào?',
        options: [ 'Tính minh bạch (Transparency)', 'Giảm thiểu thiên kiến (Bias mitigation)', 'Quyền riêng tư & Bảo mật (Privacy & Security)', 'Độ tin cậy & An toàn (Reliability & Safety)' ],
        correctAnswer: 'Giảm thiểu thiên kiến (Bias mitigation)',
        explanation: 'Giảm thiểu thiên kiến là một phần quan trọng của Responsible AI, tập trung vào việc xác định và sửa chữa các xu hướng không công bằng trong dữ liệu và hành vi của mô hình.'
      },
      {
        question: 'Khái niệm "Human-in-the-Loop" trong thiết kế agent có nghĩa là gì?',
        options: [
          'Agent có thể trò chuyện một cách tự nhiên như con người.',
          'Một cơ chế để con người có thể giám sát hoặc phê duyệt các hành động của agent.',
          'Agent có thể tự động học hỏi từ các cuộc trò chuyện.',
          'Loại bỏ hoàn toàn sự can thiệp của con người.'
        ],
        correctAnswer: 'Một cơ chế để con người có thể giám sát hoặc phê duyệt các hành động của agent.',
        explanation: 'Human-in-the-loop là một thực tiễn an toàn quan trọng, đặc biệt đối với các hành động có rủi ro cao, đảm bảo có sự giám sát của con người.'
      }
    ]
  },
};