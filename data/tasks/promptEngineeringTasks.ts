
import type { Task } from '../../types';

export const promptEngineeringTasks: Task[] = [
  {
    id: 'pe-task-1',
    title: 'Viết Prompt tóm tắt email',
    difficulty: 'Easy',
    description: 'Viết một prompt yêu cầu LLM tóm tắt một email dài. Prompt của bạn phải chỉ định rõ: 1. Gán vai trò là một trợ lý ảo chuyên nghiệp. 2. Yêu cầu tóm tắt không quá 3 gạch đầu dòng. 3. Yêu cầu trích xuất ra các hành động cần làm (action items).'
  },
  {
    id: 'pe-task-2',
    title: 'Xây dựng Prompt phân tích review',
    difficulty: 'Hard',
    description: 'Sử dụng kỹ thuật Few-shot Prompting, xây dựng một prompt để phân loại review sản phẩm. Prompt phải có khả năng: 1. Phân loại cảm xúc (Tích cực/Tiêu cực/Trung tính). 2. Trích xuất các tính năng của sản phẩm được nhắc đến. 3. Yêu cầu output phải là định dạng JSON.'
  },
  {
    id: 'pe-task-3',
    title: 'Thực hành Prompt Đảo ngược',
    difficulty: 'Medium',
    description: 'Chọn một đoạn văn bản marketing hoặc một đoạn code mẫu mà bạn thấy ấn tượng. Sử dụng kỹ thuật Prompt Đảo ngược để yêu cầu AI tạo ra prompt gốc. Sau đó, dùng prompt đó để tạo ra một nội dung mới có phong cách tương tự nhưng với chủ đề khác.'
  }
];
