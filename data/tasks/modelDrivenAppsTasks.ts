import type { Task } from '../../types';

export const modelDrivenAppsTasks: Task[] = [
  {
    id: 'mda-task-1',
    title: 'Tạo Solution và Tables cơ bản',
    difficulty: 'Easy',
    description: 'Tạo một unmanaged solution mới. Bên trong, tạo 2 table: "Nhóm sản phẩm" và "Sản phẩm" với đầy đủ các cột như trong mục "Tables". Thiết lập mối quan hệ lookup từ "Sản phẩm" đến "Nhóm sản phẩm".'
  },
  {
    id: 'mda-task-2',
    title: 'Thiết kế Forms và Views',
    difficulty: 'Medium',
    description: 'Thiết kế Main Form cho table "Sản phẩm" với các section hợp lý. Tạo một Quick Create Form cho "Nhóm sản phẩm". Tạo một view mới cho "Sản phẩm" có tên "Sản phẩm sắp hết hàng" chỉ hiển thị các sản phẩm có số lượng tồn kho dưới 10.'
  },
  {
    id: 'mda-task-3',
    title: 'Xây dựng App và Business Rule',
    difficulty: 'Hard',
    description: 'Tạo một Model-driven App mới. Cấu hình Site Map để hiển thị "Nhóm sản phẩm" và "Sản phẩm". Thêm một Business Rule trên form "Sản phẩm": nếu cột "Số lượng tồn kho" bằng 0, thì tự động đặt cột "Trạng thái" thành "Hết hàng" và khóa (lock) cột đó.'
  }
];
