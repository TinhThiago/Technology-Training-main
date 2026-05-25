import type { Quiz } from '../../types';

export const webResourcesQuizzes: Record<string, Quiz> = {
  'wr-js': {
    topic: 'Sử dụng JavaScript trong Form (Event onChange)',
    questions: [
      {
        question: 'Đối tượng chính trong Client API Object Model cung cấp quyền truy cập vào các thành phần trên form là gì?',
        options: ['window', 'Xrm.Page', 'executionContext', 'formContext'],
        correctAnswer: 'formContext',
        explanation: 'formContext là đối tượng chính để tương tác với dữ liệu và các điều khiển trên form, được lấy từ executionContext.'
      },
      {
        question: 'Sự kiện nào trên form sẽ kích hoạt một hàm JavaScript khi giá trị của một cột cụ thể thay đổi?',
        options: ['OnLoad', 'OnSave', 'OnChange', 'OnTabStateChange'],
        correctAnswer: 'OnChange',
        explanation: 'Sự kiện OnChange được gắn vào một cột cụ thể và sẽ được thực thi mỗi khi người dùng thay đổi giá trị của cột đó.'
      }
    ]
  },
  'wr-html': {
    topic: 'Tạo Command và Form in (HTML)',
    questions: [
      {
        question: 'Công cụ nào trong XrmToolBox thường được sử dụng để tùy chỉnh Command Bar (Ribbon) một cách trực quan?',
        options: ['FetchXML Builder', 'Ribbon Workbench', 'View Designer', 'SiteMap Editor'],
        correctAnswer: 'Ribbon Workbench',
        explanation: 'Ribbon Workbench là công cụ tiêu chuẩn và mạnh mẽ để thêm, ẩn hoặc tùy chỉnh các nút trên command bar của Model-driven Apps.'
      },
      {
        question: 'Khi tạo một form in tùy chỉnh bằng HTML Web Resource, làm thế nào để JavaScript trong trang HTML đó lấy được dữ liệu của bản ghi đang được xem?',
        options: ['Dữ liệu được tự động chèn vào.', 'Sử dụng Xrm.WebApi.retrieveRecord() với ID của bản ghi được truyền qua URL.', 'Không thể lấy được dữ liệu.', 'Sử dụng một Power Automate flow.'],
        correctAnswer: 'Sử dụng Xrm.WebApi.retrieveRecord() với ID của bản ghi được truyền qua URL.',
        explanation: 'Phương pháp phổ biến là truyền ID của bản ghi vào query string của URL của HTML Web Resource, sau đó dùng JavaScript và Web API để truy vấn dữ liệu chi tiết.'
      }
    ]
  },
};
