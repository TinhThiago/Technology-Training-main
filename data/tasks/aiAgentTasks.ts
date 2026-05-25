import type { Task } from '../../types';

export const aiAgentTasks: Task[] = [
  {
    id: 'ai-task-1',
    title: 'Xây dựng Copilot tra cứu đơn hàng',
    difficulty: 'Medium',
    description: 'Sử dụng Copilot Studio, tạo một Topic mới được kích hoạt bởi các câu hỏi như "tình trạng đơn hàng của tôi?". Copilot sẽ hỏi người dùng mã đơn hàng. Sau đó gọi một Power Automate flow để tra cứu trạng thái của đơn hàng đó trong Dataverse và trả kết quả về cho người dùng.'
  }
];
