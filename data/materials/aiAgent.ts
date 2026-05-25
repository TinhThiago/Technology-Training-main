export const aiAgentMaterials: Record<string, string> = {
  'ai-concepts': `
## Các khái niệm về AI
Trí tuệ nhân tạo là một lĩnh vực rộng lớn của khoa học máy tính, tập trung vào việc tạo ra các máy móc thông minh có khả năng thực hiện các tác vụ thường đòi hỏi trí thông minh của con người.

### Machine Learning và Deep Learning
*   **Machine Learning (Học máy - ML):** Là một tập hợp con của AI. Thay vì được lập trình một cách rõ ràng, các hệ thống ML sử dụng thuật toán để phân tích một lượng lớn dữ liệu, học hỏi từ các mẫu (patterns) trong đó, và sau đó đưa ra quyết định hoặc dự đoán.
*   **Deep Learning (Học sâu - DL):** Là một lĩnh vực chuyên sâu hơn của ML, sử dụng các mạng nơ-ron nhân tạo (artificial neural networks) với nhiều lớp (layers) để giải quyết các vấn đề phức tạp. Deep learning là công nghệ đằng sau xe tự lái và nhận dạng giọng nói.

### Generative AI (AI tạo sinh)
Đây là một nhánh đột phá của AI, tập trung vào việc tạo ra nội dung mới, nguyên bản thay vì chỉ phân tích hoặc phân loại dữ liệu có sẵn. Các mô hình như GPT (Generative Pre-trained Transformer) có thể tạo ra văn bản, hình ảnh, âm nhạc và mã nguồn.
`,
  'agent-concepts': `
## Khái niệm về Agent
Một AI Agent (tác nhân AI) là một thực thể tự trị có khả năng quan sát môi trường của nó, xử lý thông tin và thực hiện các hành động để đạt được một mục tiêu cụ thể.

### Các thành phần cốt lõi của một Agent
1.  **Perception (Nhận thức):** Agent sử dụng "cảm biến" (sensors) để thu thập thông tin về trạng thái hiện tại của môi trường. Trong một chatbot, cảm biến chính là đầu vào văn bản từ người dùng.
2.  **Brain (Bộ não):** Đây là phần xử lý trung tâm, nơi agent phân tích thông tin nhận được và đưa ra quyết định về hành động cần thực hiện. Nó có thể là một mô hình AI, một bộ quy tắc logic, hoặc sự kết hợp của cả hai.
3.  **Action (Hành động):** Agent sử dụng "cơ cấu chấp hành" (actuators) để tác động trở lại môi trường. Đối với một Copilot trong Power Platform, một hành động có thể là trả lời người dùng, gọi một Power Automate flow để tra cứu dữ liệu, hoặc cập nhật một bản ghi trong Dataverse.

### Agent trong Power Platform
Trong Power Platform, bạn có thể xây dựng các agent mạnh mẽ bằng cách kết hợp:
*   **Copilot Studio:** Làm "bộ não" và giao diện giao tiếp chính.
*   **Power Automate:** Đóng vai trò là "cơ cấu chấp hành", cho phép agent kết nối và thực hiện hành động trên hàng trăm hệ thống khác nhau.
*   **AI Builder:** Cung cấp các khả năng nhận thức chuyên biệt (ví dụ: đọc hóa đơn).
  `,
  'agentic-ai-concepts': `
## Khái niệm Agentic AI
Agentic AI là một bước tiến từ các AI agent đơn lẻ, đề cập đến các hệ thống mà ở đó các agent có thể hoạt động một cách tự chủ để giải quyết các vấn đề phức tạp, thường là bằng cách cộng tác với nhau.

### Các thành phần chính của hệ thống Agentic AI
*   **Planning (Lập kế hoạch):** Khả năng chia một mục tiêu lớn, mơ hồ thành các bước nhỏ, cụ thể và có thể thực hiện được.
*   **Memory (Bộ nhớ):** Khả năng lưu trữ và truy xuất thông tin từ các tương tác trước đó để định hướng cho các hành động trong tương lai. Bao gồm cả bộ nhớ ngắn hạn (trong một phiên làm việc) và dài hạn (lưu trữ kiến thức lâu dài).
*   **Tool Use (Sử dụng công cụ):** Khả năng sử dụng các công cụ bên ngoài để mở rộng năng lực. Ví dụ: tìm kiếm trên web, chạy code, hoặc tương tác với các API khác.
*   **Multi-agent Systems (Hệ thống đa agent):** Nhiều agent làm việc cùng nhau, thường có các vai trò khác nhau (ví dụ: một agent lập kế hoạch, một agent thực thi, và một agent phê bình/đánh giá kết quả). Các framework như AutoGPT và CrewAI là những ví dụ điển hình củaแนวทาง này.
`,
  'ai-builder': `
## AI Builder
AI Builder là một tính năng của Microsoft Power Platform cho phép bạn dễ dàng thêm trí tuệ nhân tạo (AI) vào các ứng dụng Power Apps và luồng Power Automate mà không cần kiến thức về khoa học dữ liệu hay kỹ năng lập trình.

### AI Builder làm được gì?
Nó cung cấp các mô hình AI tạo sẵn (pre-built) hoặc cho phép bạn xây dựng các mô hình tùy chỉnh (custom) để giải quyết các bài toán nghiệp vụ phổ biến.
*   **Xử lý văn bản:** Phân tích cảm tính, nhận dạng thực thể, phân loại văn bản, dịch thuật.
*   **Xử lý hình ảnh:** Nhận dạng đối tượng (Object detection).
*   **Xử lý tài liệu có cấu trúc:** Trích xuất thông tin từ hóa đơn, biên nhận (Form processing).
*   **Dự đoán:** Dự đoán kết quả nhị phân (có/không) dựa trên dữ liệu lịch sử.

### Tích hợp
Các mô hình AI Builder có thể được sử dụng trực tiếp trong:
*   **Power Apps:** Sử dụng một control đặc biệt để gọi mô hình (ví dụ: chụp ảnh hóa đơn và để AI tự động trích xuất thông tin).
*   **Power Automate:** Sử dụng các action của AI Builder trong một flow (ví dụ: khi có email mới chứa tệp đính kèm, tự động dùng AI Builder để xử lý tệp và lưu kết quả vào Dataverse).
  `,
  'copilot-studio': `
## Copilot Studio
Microsoft Copilot Studio là một công cụ low-code để xây dựng các chatbot (hay "copilot") tinh vi. Bạn có thể tạo ra các cuộc hội thoại tự nhiên để giải đáp thắc mắc của khách hàng, hướng dẫn người dùng, hoặc tự động hóa các tác vụ.

### Các khái niệm cốt lõi
*   **Topics (Chủ đề):** Một Topic đại diện cho một nhánh của cuộc hội thoại. Mỗi topic được kích hoạt bởi các cụm từ nhất định của người dùng và bao gồm một luồng hội thoại được thiết kế trên một canvas trực quan.
*   **Trigger Phrases (Cụm từ kích hoạt):** Là những câu hoặc từ khóa mà người dùng có thể nói để bắt đầu một Topic cụ thể.
*   **Nodes (Nút):** Trong canvas thiết kế hội thoại, bạn sử dụng các nút để gửi tin nhắn, đặt câu hỏi, gọi một action, hoặc thực hiện logic điều kiện (if/else).
*   **Entities (Thực thể):** Cho phép bot nhận dạng và trích xuất các thông tin cụ thể từ câu nói của người dùng, chẳng hạn như số điện thoại, ngày tháng, địa điểm.
*   **Actions:** Cho phép copilot của bạn thực hiện hành động bằng cách gọi một Power Automate flow, ví dụ như tra cứu thông tin đơn hàng trong Dataverse hoặc tạo một yêu cầu hỗ trợ.
  `,
  'prompt-builder': `
## Prompt Builder
Prompt Builder là một tính năng trong AI Builder cho phép các nhà phát triển tạo và quản lý các prompt tùy chỉnh có thể tái sử dụng để tương tác với các mô hình Generative AI.

### Lợi ích chính
*   **Tái sử dụng (Reusability):** Tạo một prompt một lần và sử dụng nó trong nhiều ứng dụng Power Apps và luồng Power Automate khác nhau.
*   **Dynamic Prompts (Prompt động):** Dễ dàng tạo các prompt có thể nhận các giá trị đầu vào động từ ứng dụng hoặc flow của bạn, giúp cá nhân hóa các yêu cầu gửi đến mô hình AI.
*   **Quản lý tập trung:** Quản lý tất cả các prompt của bạn ở một nơi duy nhất thay vì nhúng chúng rải rác trong các ứng dụng và flow.
*   **Đơn giản hóa:** Cung cấp một giao diện low-code để xây dựng các prompt phức tạp, kết nối chúng với dữ liệu bằng Power Fx và kiểm tra chúng trước khi sử dụng.
`,
  'agent-best-practices': `
## Best Practices
Xây dựng một agent thông minh và hữu ích đòi hỏi nhiều hơn là chỉ công nghệ. Dưới đây là một số phương pháp hay nhất cần tuân theo.

### Best Practices cho AI
*   **Hiểu dữ liệu của bạn:** Chất lượng và số lượng dữ liệu là yếu tố quan trọng nhất. Dữ liệu "rác" đầu vào sẽ cho ra kết quả "rác".
*   **Chọn đúng mô hình:** Sử dụng mô hình phù hợp cho tác vụ. Không cần dùng một mô hình ngôn ngữ lớn và phức tạp cho một bài toán phân loại đơn giản.
*   **AI có trách nhiệm (Responsible AI):** Luôn nhận thức và tìm cách giảm thiểu các thiên kiến (bias) tiềm ẩn trong dữ liệu và mô hình. Đảm bảo tính công bằng, minh bạch và có thể giải thích được.

### Best Practices cho Agent
*   **Xác định mục tiêu rõ ràng, cụ thể:** Một agent nên được thiết kế để giải quyết một vấn đề cụ thể. Bắt đầu với phạm vi hẹp và làm tốt nó trước khi mở rộng.
*   **Cung cấp công cụ đáng tin cậy:** Sức mạnh của một agent nằm ở khả năng hành động. Đảm bảo các Power Automate flow mà nó sử dụng được xây dựng tốt, xử lý lỗi linh hoạt và trả về kết quả nhất quán.
*   **Thiết kế để thất bại một cách duyên dáng (Graceful Failure):** Sẽ có lúc agent không hiểu yêu cầu. Hãy thiết kế các kịch bản dự phòng, chẳng hạn như đề nghị kết nối với một nhân viên hỗ trợ.

### Best Practices cho Agentic AI
*   **Giữ con người trong vòng lặp (Human-in-the-Loop):** Đối với các quyết định quan trọng hoặc có rủi ro cao, hãy thiết kế một quy trình để con người có thể xem xét và phê duyệt các hành động của agent trước khi chúng được thực hiện.
*   **Quản lý chi phí:** Các hệ thống tự trị có thể tiêu thụ rất nhiều lệnh gọi API. Hãy đặt ra các giới hạn, giám sát việc sử dụng và tối ưu hóa để kiểm soát chi phí.
*   **Bảo mật:** Hãy hết sức cẩn thận khi cấp cho agent quyền truy cập vào các công cụ có thể sửa đổi dữ liệu hoặc tương tác với các hệ thống bên ngoài.
`,
};