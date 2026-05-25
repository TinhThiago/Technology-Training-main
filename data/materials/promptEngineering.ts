
export const promptEngineeringMaterials: Record<string, string> = {
'pe-basics': `
<div class="space-y-8">

  <!-- Skill Hierarchy Card -->
  <div class="p-6 bg-gray-50 dark:bg-secondary/40 rounded-lg border dark:border-border">
    <h2 class="text-xl font-bold text-gray-900 dark:text-foreground mb-4">Hệ thống phân cấp kỹ năng Prompt</h2>
    <p class="text-sm text-gray-600 dark:text-muted-foreground mb-5">Dựa theo hướng dẫn của OpenAI.</p>
    <div class="space-y-4">
      <div>
        <h3 class="font-semibold text-gray-900 dark:text-foreground">Level 1: Prompt Explorer (Người khám phá)</h3>
        <ul class="list-disc pl-6 mt-2 text-gray-700 dark:text-gray-300 space-y-1 text-sm">
          <li>Biết cách sử dụng ChatGPT/Copilot ở mức cơ bản.</li>
          <li>Viết prompt tự nhiên bằng ngôn ngữ đời thường.</li>
          <li>Biết yêu cầu chỉnh sửa/gợi ý lại.</li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold text-gray-900 dark:text-foreground">Level 2: Prompt Improver (Người cải tiến)</h3>
        <ul class="list-disc pl-6 mt-2 text-gray-700 dark:text-gray-300 space-y-1 text-sm">
          <li>Biết cấu trúc lại prompt để có output tốt hơn.</li>
          <li>Dùng được các kỹ thuật như: Role-based prompting, Formatting, Style guide.</li>
          <li>Biết kiểm soát độ dài, định dạng.</li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold text-gray-900 dark:text-foreground">Level 3: Prompt Strategist (Chiến lược gia prompt)</h3>
        <ul class="list-disc pl-6 mt-2 text-gray-700 dark:text-gray-300 space-y-1 text-sm">
          <li>Thành thạo các kỹ thuật như: Few-shot Prompting → Chain-of-thought → Zero-shot CoT.</li>
          <li>Biết đánh giá chất lượng đầu ra, kiểm tra bias.</li>
          <li>Biết chia task phức tạp thành sub-task logic.</li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold text-gray-900 dark:text-foreground">Level 4: Prompt Engineer (Kỹ sư prompt)</h3>
        <ul class="list-disc pl-6 mt-2 text-gray-700 dark:text-gray-300 space-y-1 text-sm">
          <li>Kết hợp nhiều kỹ thuật nâng cao như: ReAct, Self-consistency, Toolformer logic.</li>
          <li>Tối ưu prompt cho ứng dụng cụ thể (data labeling, code gen, content creation,...).</li>
          <li>Hiểu cơ chế hoạt động của LLMs để điều chỉnh prompt phù hợp.</li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold text-gray-900 dark:text-foreground">Level 5: Prompt Architect (Kiến trúc sư prompt)</h3>
        <ul class="list-disc pl-6 mt-2 text-gray-700 dark:text-gray-300 space-y-1 text-sm">
          <li>Thiết kế hệ thống prompt phức hợp cho workflows/agents.</li>
          <li>Kết hợp API, system prompt, memory,...</li>
          <li>Tối ưu token, latency, cost.</li>
          <li>Áp dụng LLM vào ứng dụng cụ thể (chatbot, AI agent, data analysis system).</li>
          <li>Biết fine-tune hoặc phối hợp prompt + model tuning.</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Output Config Card -->
  <div class="p-6 bg-gray-50 dark:bg-secondary/40 rounded-lg border dark:border-border">
    <h2 class="text-xl font-bold text-gray-900 dark:text-foreground mb-4">1. Cấu hình Output</h2>
    <ul class="space-y-3 text-sm">
      <li><strong>Output length</strong>: Số token sinh ra (ảnh hưởng chi phí & tốc độ).</li>
      <li><strong>Temperature</strong>: Điều chỉnh mức độ ngẫu nhiên (sáng tạo) của output. Giá trị thấp (vd: 0.1) cho kết quả nhất quán, giá trị cao (vd: 0.9) cho kết quả đa dạng hơn.</li>
      <li><strong>Top-K / Top-P</strong>: Các kỹ thuật lấy mẫu để kiểm soát việc lựa chọn từ tiếp theo, giúp cân bằng giữa tính nhất quán và sự đa dạng.</li>
    </ul>
    <div class="mt-4 p-4 bg-gray-100 dark:bg-muted/50 rounded-md">
      <h4 class="font-semibold text-sm mb-2 text-gray-800 dark:text-foreground">Best Practice:</h4>
      <ul class="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li><strong>Chính xác (vd: code, toán học):</strong> <code class="bg-gray-200 dark:bg-background rounded px-1.5 py-0.5 font-mono text-xs">temp=0.1, top-P=0.9</code></li>
          <li><strong>Sáng tạo (vd: viết lách):</strong> <code class="bg-gray-200 dark:bg-background rounded px-1.5 py-0.5 font-mono text-xs">temp=0.9, top-P=0.99</code></li>
      </ul>
    </div>
  </div>

  <!-- Basic Prompting Techniques Card -->
  <div class="p-6 bg-gray-50 dark:bg-secondary/40 rounded-lg border dark:border-border">
    <h2 class="text-xl font-bold text-gray-900 dark:text-foreground mb-4">2. Kỹ thuật Prompting (Cơ bản)</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="p-4 bg-gray-100 dark:bg-muted/50 rounded-md">
        <h4 class="font-semibold text-gray-800 dark:text-foreground">Zero-shot</h4>
        <p class="text-sm text-gray-600 dark:text-muted-foreground mt-1">Không đưa ví dụ, chỉ mô tả nhiệm vụ.</p>
      </div>
      <div class="p-4 bg-gray-100 dark:bg-muted/50 rounded-md">
        <h4 class="font-semibold text-gray-800 dark:text-foreground">One-shot / Few-shot</h4>
        <p class="text-sm text-gray-600 dark:text-muted-foreground mt-1">Đưa 1 hoặc nhiều ví dụ mẫu để model học theo pattern.</p>
      </div>
      <div class="p-4 bg-gray-100 dark:bg-muted/50 rounded-md">
        <h4 class="font-semibold text-gray-800 dark:text-foreground">System Prompting</h4>
        <p class="text-sm text-gray-600 dark:text-muted-foreground mt-1">Định nghĩa rõ nhiệm vụ & định dạng output mong muốn.</p>
      </div>
      <div class="p-4 bg-gray-100 dark:bg-muted/50 rounded-md">
        <h4 class="font-semibold text-gray-800 dark:text-foreground">Role Prompting</h4>
        <p class="text-sm text-gray-600 dark:text-muted-foreground mt-1">Gán vai trò cho model để thay đổi phong cách trả lời.</p>
      </div>
    </div>
  </div>

</div>
`,
'pe-advanced': `
<div class="space-y-8">

  <!-- Advanced Prompting Techniques Card -->
  <div class="p-6 bg-gray-50 dark:bg-secondary/40 rounded-lg border dark:border-border">
    <h2 class="text-xl font-bold text-gray-900 dark:text-foreground mb-4">Kỹ thuật Prompting (Nâng cao)</h2>
    <div class="space-y-4">
      <div>
        <h3 class="font-semibold text-gray-900 dark:text-foreground">Chain of Thought (CoT)</h3>
        <p class="text-sm text-gray-600 dark:text-muted-foreground mt-1">Buộc model giải thích từng bước suy luận (reasoning). Rất hữu ích cho các bài toán logic và toán học.</p>
        <div class="mt-2 p-3 bg-gray-800 text-white rounded-md text-xs font-mono">"Let's think step by step..."</div>
      </div>
      <div>
        <h3 class="font-semibold text-gray-900 dark:text-foreground">Self-consistency</h3>
        <p class="text-sm text-gray-600 dark:text-muted-foreground mt-1">Sinh nhiều chuỗi suy luận khác nhau (với temperature cao), sau đó chọn kết quả xuất hiện nhiều nhất để tăng độ tin cậy.</p>
      </div>
      <div>
        <h3 class="font-semibold text-gray-900 dark:text-foreground">ReAct (Reason + Act)</h3>
        <p class="text-sm text-gray-600 dark:text-muted-foreground mt-1">Kết hợp suy luận với hành động. Cho phép model sử dụng các công cụ bên ngoài (vd: tìm kiếm web, chạy code) để thu thập thông tin và trả lời câu hỏi phức tạp.</p>
      </div>
      <div>
        <h3 class="font-semibold text-gray-900 dark:text-foreground">Step-back Prompting</h3>
        <p class="text-sm text-gray-600 dark:text-muted-foreground mt-1">Yêu cầu model trả lời một câu hỏi khái quát hơn trước khi đi vào chi tiết, giúp model có cái nhìn tổng thể và đưa ra câu trả lời chính xác hơn.</p>
      </div>
    </div>
  </div>

  <!-- Prompting for Code Card -->
  <div class="p-6 bg-gray-50 dark:bg-secondary/40 rounded-lg border dark:border-border">
    <h2 class="text-xl font-bold text-gray-900 dark:text-foreground mb-4">Prompt cho Code</h2>
    <ul class="list-disc pl-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
        <li><strong>Viết code</strong>: Yêu cầu viết script, hàm, hoặc component. <br/> <code class="text-xs">"Write a Python function to check if a string is a palindrome."</code></li>
        <li><strong>Giải thích code</strong>: Dán một đoạn code và yêu cầu giải thích logic. <br/> <code class="text-xs">"Explain this React hook line by line."</code></li>
        <li><strong>Dịch code</strong>: Chuyển đổi code từ ngôn ngữ này sang ngôn ngữ khác.</li>
        <li><strong>Debug code</strong>: Cung cấp code và thông báo lỗi, yêu cầu tìm và sửa lỗi.</li>
    </ul>
  </div>

  <!-- Best Practices Card -->
  <div class="p-6 bg-gray-50 dark:bg-secondary/40 rounded-lg border dark:border-border">
    <h2 class="text-xl font-bold text-gray-900 dark:text-foreground mb-4">Best Practices</h2>
    <ul class="list-disc pl-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
      <li><strong>Cung cấp ví dụ (Few-shot):</strong> Đây là cách hiệu quả nhất để hướng dẫn model.</li>
      <li><strong>Rõ ràng & Cụ thể:</strong> Tránh các câu hỏi mơ hồ. Cung cấp đủ bối cảnh.</li>
      <li><strong>Đặc tả output:</strong> Yêu cầu rõ định dạng (JSON, Markdown, list), độ dài, phong cách...</li>
      <li><strong>Ưu tiên chỉ dẫn hơn là ràng buộc:</strong> Thay vì nói "Đừng viết về X", hãy nói "Hãy tập trung viết về Y và Z".</li>
      <li><strong>Thử nghiệm:</strong> Thử nhiều cách diễn đạt, cấu trúc và tham số khác nhau để tìm ra prompt hiệu quả nhất.</li>
    </ul>
  </div>
</div>
`,
'pe-vibe-coding': `
<div class="space-y-8">
  <!-- What is Vibe Coding Card -->
  <div class="p-6 bg-gray-50 dark:bg-secondary/40 rounded-lg border dark:border-border">
    <h2 class="text-xl font-bold text-gray-900 dark:text-foreground mb-4">Khái niệm Vibe Coding</h2>
    <div class="space-y-4 text-sm text-gray-600 dark:text-muted-foreground">
        <p>Vibe coding là một phương pháp phát triển phần mềm mới nổi, sử dụng trí tuệ nhân tạo (AI) để tạo ra mã nguồn chức năng từ các câu lệnh ngôn ngữ tự nhiên, giúp tăng tốc quá trình phát triển và làm cho việc xây dựng ứng dụng trở nên dễ tiếp cận hơn, đặc biệt đối với những người có ít kinh nghiệm lập trình.</p>
        <p>Thuật ngữ này, được đặt ra bởi nhà nghiên cứu AI Andrej Karpathy vào đầu năm 2025, mô tả một quy trình làm việc trong đó vai trò chính chuyển từ việc viết từng dòng code sang việc hướng dẫn một trợ lý AI để tạo, tinh chỉnh và gỡ lỗi một ứng dụng thông qua một quá trình mang tính hội thoại hơn. Điều này giúp bạn giải phóng thời gian để suy nghĩ về bức tranh toàn cảnh, hay mục tiêu chính của ứng dụng, trong khi AI xử lý việc viết mã nguồn thực tế.</p>
    </div>
  </div>

  <!-- Vibe vs Traditional Card -->
  <div class="p-6 bg-gray-50 dark:bg-secondary/40 rounded-lg border dark:border-border">
    <h2 class="text-xl font-bold text-gray-900 dark:text-foreground mb-4">Vibe Coding và Lập trình truyền thống</h2>
    <p class="text-sm text-gray-600 dark:text-muted-foreground mb-5">Vibe coding đại diện cho một sự thay đổi trong tư duy: từ việc là một "người thợ xây" sang vai trò của một "kiến trúc sư".</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 class="font-semibold text-gray-800 dark:text-foreground">Lập trình truyền thống</h3>
        <ul class="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300 space-y-2 text-sm">
          <li><strong>Tập trung vào "Làm thế nào" (How):</strong> Logic từng dòng, chính xác và chi tiết.</li>
          <li><strong>Yêu cầu:</strong> Cần kiến thức sâu về cú pháp và thuật toán.</li>
          <li><strong>Vai trò:</strong> Người thợ xây, thực thi bản thiết kế một cách tỉ mỉ.</li>
          <li><strong>Phù hợp cho:</strong> Các hệ thống phức tạp, quan trọng cần độ chính xác và hiệu năng cao.</li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold text-gray-800 dark:text-foreground">Vibe Coding</h3>
        <ul class="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300 space-y-2 text-sm">
          <li><strong>Tập trung vào "Cái gì" (What):</strong> Định hướng cấp cao, ý tưởng và mục tiêu cuối cùng.</li>
          <li><strong>Yêu cầu:</strong> Khả năng giao tiếp ý tưởng một cách rõ ràng, mang tính hội thoại.</li>
          <li><strong>Vai trò:</strong> Kiến trúc sư, đưa ra tầm nhìn và chỉ đạo quá trình xây dựng.</li>
          <li><strong>Phù hợp cho:</strong> Tạo mẫu nhanh, khám phá sáng tạo, và các dự án có yêu cầu linh hoạt.</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- When to Use Card -->
  <div class="p-6 bg-gray-50 dark:bg-secondary/40 rounded-lg border dark:border-border">
    <h2 class="text-xl font-bold text-gray-900 dark:text-foreground mb-4">Khi nào nên sử dụng?</h2>
    <ul class="list-disc pl-6 mt-2 text-gray-700 dark:text-gray-300 space-y-2 text-sm">
        <li><strong>Brainstorming & Sáng tạo:</strong> Khi bạn muốn khám phá các ý tưởng thiết kế mới mà không bị giới hạn bởi các chi tiết cụ thể.</li>
        <li><strong>Thiết kế UI/UX:</strong> Tạo ra các component giao diện người dùng có phong cách độc đáo (ví dụ: nút bấm, thanh tải, animation).</li>
        <li><strong>Tạo mẫu nhanh:</strong> Khi bạn cần một bản demo trực quan nhanh chóng và không quá quan tâm đến sự hoàn hảo của code.</li>
    </ul>
  </div>

  <!-- Comparison Card -->
  <div class="p-6 bg-gray-50 dark:bg-secondary/40 rounded-lg border dark:border-border">
    <h2 class="text-xl font-bold text-gray-900 dark:text-foreground mb-4">Ví dụ so sánh</h2>
    <div class="space-y-4">
      <div>
        <h4 class="font-semibold text-gray-800 dark:text-foreground">Prompt chính xác (Precise Prompt):</h4>
        <div class="mt-2 p-3 bg-gray-800 text-white rounded-md text-xs font-mono">"Viết CSS cho một button có viền xanh 2px, nền màu xanh nhạt (#ADD8E6), box-shadow 5px 5px 10px rgba(0,0,0,0.2), và hiệu ứng transition 0.3s ease-in-out khi hover."</div>
        <p class="text-xs mt-2 text-gray-500 dark:text-muted-foreground">→ Kết quả có thể đoán trước nhưng thiếu sự sáng tạo.</p>
      </div>
      <div>
        <h4 class="font-semibold text-gray-800 dark:text-foreground">Prompt theo "Vibe" (Vibe Prompt):</h4>
        <div class="mt-2 p-3 bg-gray-800 text-white rounded-md text-xs font-mono">"Tạo HTML và CSS cho một nút bấm có 'vibe' vui tươi, nảy nảy. Hãy nghĩ đến các hiệu ứng animation bật nảy khi hover, màu sắc pastel nhẹ nhàng, và các góc bo tròn. Nút bấm phải tạo cảm giác thân thiện và mời gọi."</div>
        <p class="text-xs mt-2 text-gray-500 dark:text-muted-foreground">→ Kết quả bất ngờ hơn, khuyến khích AI sáng tạo và có thể cho ra những thiết kế độc đáo.</p>
      </div>
    </div>
  </div>

  <!-- Benefits & Limitations Card -->
  <div class="p-6 bg-gray-50 dark:bg-secondary/40 rounded-lg border dark:border-border">
    <h2 class="text-xl font-bold text-gray-900 dark:text-foreground mb-4">Lợi ích & Hạn chế</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 class="font-semibold text-green-600 dark:text-green-400">Lợi ích</h3>
        <ul class="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300 space-y-1 text-sm">
          <li><strong>Tiếp cận dễ dàng:</strong> Giảm rào cản cho người mới bắt đầu hoặc không chuyên về lập trình.</li>
          <li><strong>Tốc độ:</strong> Đẩy nhanh quá trình tạo mẫu và phát triển sản phẩm.</li>
          <li><strong>Sáng tạo:</strong> Giải phóng lập trình viên khỏi các chi tiết cú pháp, cho phép họ tập trung vào ý tưởng lớn.</li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold text-red-600 dark:text-red-400">Hạn chế</h3>
        <ul class="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300 space-y-1 text-sm">
          <li><strong>Thiếu chính xác:</strong> Không phù hợp cho các hệ thống phức tạp đòi hỏi độ chính xác tuyệt đối.</li>
          <li><strong>Khó gỡ lỗi:</strong> Việc tìm và sửa lỗi trong code do AI tạo ra có thể phức tạp hơn.</li>
          <li><strong>"Ảo giác" (Hallucinations):</strong> AI có thể tạo ra code không chính xác hoặc không hoạt động.</li>
        </ul>
      </div>
    </div>
  </div>
</div>
`,
'pe-vibe-build': `
<div class="space-y-6">
    <h2 class="text-2xl font-bold text-gray-900 dark:text-foreground">Các bước xây dựng dự án Vibe Coding</h2>
    <p class="text-gray-600 dark:text-muted-foreground">Quy trình này cấu trúc hóa việc biến một ý tưởng "vibe" thành một sản phẩm hoàn chỉnh thông qua AI.</p>
    
    <div class="p-5 bg-gray-50 dark:bg-secondary/40 rounded-lg border dark:border-border">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-foreground">1. Metaprompt (Tầm nhìn)</h3>
      <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">Metaprompt là bản thiết kế tổng thể của ứng dụng. Nó trả lời các câu hỏi cốt lõi:</p>
      <ul class="list-disc pl-6 mt-3 space-y-2 text-sm">
          <li><strong>Mục đích:</strong> Ứng dụng này để làm gì?</li>
          <li><strong>Đối tượng:</strong> Ai sẽ sử dụng nó?</li>
          <li><strong>Tính năng:</strong> Các chức năng chính là gì?</li>
          <li><strong>Thiết kế:</strong> Giao diện và trải nghiệm người dùng được định hướng như thế nào?</li>
      </ul>
      <div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md border border-blue-200 dark:border-blue-500/30">
          <p class="text-sm text-blue-800 dark:text-blue-200"><strong class="font-semibold">Ví dụ:</strong> Metaprompt cho một "ứng dụng học ngôn ngữ cho khách du lịch" có thể mô tả một giao diện đơn giản, tập trung vào các cụm từ giao tiếp thông dụng, và có các bài quiz ngắn.</p>
      </div>
    </div>

    <div class="p-5 bg-gray-50 dark:bg-secondary/40 rounded-lg border dark:border-border">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-foreground">2. Product Requirements Prompt (PRP)</h3>
      <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">PRP là phiên bản "prompt" của một tài liệu yêu cầu sản phẩm (PRD). Nó được sinh ra từ Metaprompt, cung cấp cho AI Agent một bộ yêu cầu chi tiết, đảm bảo Agent hiểu rõ "cần xây dựng cái gì" trước khi bắt đầu.</p>
    </div>

    <div class="p-5 bg-gray-50 dark:bg-secondary/40 rounded-lg border dark:border-border">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-foreground">3. Implementation (Thực thi)</h3>
      <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">Giai đoạn Agent thực thi dựa trên PRP, chuyển hóa yêu cầu thành sản phẩm cụ thể. Các hoạt động có thể bao gồm viết code, xây dựng giao diện, tạo dữ liệu, v.v. Đây là một quá trình tương tác: Agent có thể hỏi để làm rõ yêu cầu hoặc đưa ra các lựa chọn, cho phép bạn định hướng quá trình phát triển mà không cần đi sâu vào chi tiết kỹ thuật.</p>
    </div>

    <div class="p-5 bg-gray-50 dark:bg-secondary/40 rounded-lg border dark:border-border">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-foreground">4. Debugging & Review (Gỡ lỗi & Rà soát)</h3>
      <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">Kiểm tra và rà soát để loại bỏ lỗi, tối ưu hiệu năng và đảm bảo hệ thống hoạt động ổn định. Điểm đặc biệt của Vibe Coding là bạn có thể yêu cầu chính AI agent rà soát lại code, xác định các lỗi tiềm ẩn, hoặc thậm chí đề xuất các phương án tối ưu hóa.</p>
    </div>

    <div class="p-5 bg-gray-50 dark:bg-secondary/40 rounded-lg border dark:border-border">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-foreground">5. Deployment (Triển khai)</h3>
      <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">Đưa sản phẩm ra môi trường thực tế: triển khai cho người dùng, tích hợp vào hệ thống, hoặc xuất bản kết quả.</p>
    </div>
</div>
`,
'pe-vibe-ideas': `
<div class="space-y-6">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-foreground">Ý tưởng cho Vibe Coding</h2>
  <p class="text-gray-600 dark:text-muted-foreground">Các lĩnh vực mà phương pháp Vibe Coding phát huy hiệu quả nhất.</p>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
    
    <div class="p-5 bg-gray-50 dark:bg-secondary/40 rounded-lg border dark:border-border">
      <h3 class="font-semibold text-gray-900 dark:text-foreground">1. Database / Data management</h3>
      <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">Dựng nhanh API/CRUD, auto-generate query, hoặc giao diện no-code để quản lý dữ liệu. <br/> <strong>Ví dụ:</strong> "Tìm tất cả khách hàng mua hàng trong 3 tháng gần nhất" → tự dịch sang SQL.</p>
    </div>

    <div class="p-5 bg-gray-50 dark:bg-secondary/40 rounded-lg border dark:border-border">
      <h3 class="font-semibold text-gray-900 dark:text-foreground">2. Dashboards</h3>
      <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">Người dùng chỉ cần "nói" hoặc "gõ" → AI tự sinh dashboard trực quan. <br/> <strong>Ví dụ:</strong> "Tạo dashboard doanh thu theo vùng trong 6 tháng qua".</p>
    </div>

    <div class="p-5 bg-gray-50 dark:bg-secondary/40 rounded-lg border dark:border-border">
      <h3 class="font-semibold text-gray-900 dark:text-foreground">3. Chatbot / Assistants</h3>
      <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">Dựng chatbot nhanh để hỗ trợ CSKH, QA nội bộ, hoặc trợ lý cá nhân. <br/> <strong>Ví dụ:</strong> Bot trả lời về dữ liệu nội bộ công ty (RAG).</p>
    </div>

    <div class="p-5 bg-gray-50 dark:bg-secondary/40 rounded-lg border dark:border-border">
      <h3 class="font-semibold text-gray-900 dark:text-foreground">4. Coaches / Learning agents</h3>
      <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">Xây agent hỗ trợ học tập hoặc huấn luyện kỹ năng. <br/> <strong>Ví dụ:</strong> "English Speaking Coach" giúp luyện tập hội thoại.</p>
    </div>

    <div class="p-5 bg-gray-50 dark:bg-secondary/40 rounded-lg border dark:border-border">
      <h3 class="font-semibold text-gray-900 dark:text-foreground">5. Automation / Macros</h3>
      <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">Tạo workflow automation theo prompt, giống RPA nhưng linh hoạt hơn. <br/> <strong>Ví dụ:</strong> "Mỗi sáng 8h, lấy báo cáo doanh thu, gửi mail cho team sale."</p>
    </div>

  </div>
</div>
`,
'pe-reverse': `
<div class="space-y-8">
  <!-- Concept Card -->
  <div class="p-6 bg-gray-50 dark:bg-secondary/40 rounded-lg border dark:border-border">
    <h2 class="text-xl font-bold text-gray-900 dark:text-foreground mb-4">1. Khái niệm cốt lõi</h2>
    <p class="text-sm text-gray-700 dark:text-gray-300 mb-4">
      Prompt đảo ngược là kỹ thuật bắt đầu từ <strong>OUTPUT</strong> (kết quả đã có), sau đó yêu cầu AI suy ngược lại <strong>PROMPT</strong> (lời nhắc đầu vào) có khả năng tạo ra kết quả tương tự.
    </p>
    <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md border border-blue-200 dark:border-blue-500/30 text-sm">
       <span class="font-semibold text-blue-800 dark:text-blue-200">Thay vì hỏi:</span> "Viết cho tôi X"<br/>
       <span class="font-semibold text-blue-800 dark:text-blue-200">Ta hỏi:</span> "Prompt nào đã tạo ra X?"
    </div>
    <p class="text-sm text-gray-600 dark:text-muted-foreground mt-4">
      Bản chất: reverse engineering áp dụng cho ngôn ngữ và tư duy AI.
    </p>
  </div>

  <!-- Why Important Card -->
  <div class="p-6 bg-gray-50 dark:bg-secondary/40 rounded-lg border dark:border-border">
    <h2 class="text-xl font-bold text-gray-900 dark:text-foreground mb-4">2. Vì sao kỹ thuật này quan trọng?</h2>
    <ul class="list-disc pl-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
      <li><strong>Hiểu sâu:</strong> Nắm bắt mối quan hệ giữa prompt và output.</li>
      <li><strong>Tiết kiệm thời gian:</strong> Giảm quá trình thử–sai khi viết prompt.</li>
      <li><strong>Ổn định:</strong> Tái tạo được kết quả chất lượng cao một cách nhất quán.</li>
      <li><strong>Chuẩn hóa:</strong> Biến output tốt thành template hoặc framework để dùng lại.</li>
      <li><strong>Đa năng:</strong> Phù hợp cho mọi đối tượng từ content, kỹ thuật đến marketing.</li>
    </ul>
  </div>

  <!-- Process Card -->
  <div class="p-6 bg-gray-50 dark:bg-secondary/40 rounded-lg border dark:border-border">
    <h2 class="text-xl font-bold text-gray-900 dark:text-foreground mb-4">3. Quy trình 4 bước chuẩn</h2>
    <div class="space-y-4">
      <div>
        <h4 class="font-semibold text-gray-800 dark:text-foreground">Bước 1: Chọn output mẫu</h4>
        <p class="text-sm text-gray-600 dark:text-muted-foreground">Chọn một đoạn văn, bài viết, đoạn code, hoặc câu trả lời AI mà bạn thấy "chuẩn".</p>
      </div>
      <div>
        <h4 class="font-semibold text-gray-800 dark:text-foreground">Bước 2: Phân tích output</h4>
        <p class="text-sm text-gray-600 dark:text-muted-foreground">Xác định các yếu tố: Chủ đề, Mục tiêu, Đối tượng, Giọng điệu, Cấu trúc, và các Ràng buộc (độ dài, định dạng).</p>
      </div>
      <div>
        <h4 class="font-semibold text-gray-800 dark:text-foreground">Bước 3: Yêu cầu AI tạo prompt</h4>
        <p class="text-sm text-gray-600 dark:text-muted-foreground">Cung cấp output mẫu cho AI và yêu cầu nó đóng vai "Prompt Engineer" để viết lại prompt chi tiết tạo ra output đó.</p>
      </div>
      <div>
        <h4 class="font-semibold text-gray-800 dark:text-foreground">Bước 4: Kiểm tra và tinh chỉnh</h4>
        <p class="text-sm text-gray-600 dark:text-muted-foreground">Dùng prompt vừa tạo để test. So sánh output mới với output gốc và điều chỉnh cho đến khi đạt độ tương đồng mong muốn.</p>
      </div>
    </div>
  </div>

  <!-- Tips & Comparison Card -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="p-6 bg-gray-50 dark:bg-secondary/40 rounded-lg border dark:border-border">
      <h2 class="text-lg font-bold text-gray-900 dark:text-foreground mb-3">Mẹo thực hành</h2>
      <ul class="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
        <li>Thiết lập rõ <strong>System Role</strong> cho AI trước khi đảo prompt.</li>
        <li>Cung cấp đầy đủ <strong>bối cảnh</strong>, không chỉ mỗi nội dung.</li>
        <li>Lặp nhiều vòng (iteration) để tối ưu.</li>
        <li>Lưu lại prompt tốt thành thư viện cá nhân.</li>
      </ul>
    </div>
    <div class="p-6 bg-gray-50 dark:bg-secondary/40 rounded-lg border dark:border-border">
      <h2 class="text-lg font-bold text-gray-900 dark:text-foreground mb-3">So sánh tư duy</h2>
      <div class="space-y-3 text-sm">
        <div>
           <strong class="text-gray-800 dark:text-foreground">Prompt thông thường:</strong>
           <p class="text-gray-600 dark:text-muted-foreground">Tư duy từ đầu vào → chờ kết quả.</p>
        </div>
        <div>
           <strong class="text-gray-800 dark:text-foreground">Prompt đảo ngược:</strong>
           <p class="text-gray-600 dark:text-muted-foreground">Tư duy từ kết quả → thiết kế đầu vào. Chủ động, phân tích và chiến lược hơn.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- EXAMPLES CARD (NEW) -->
  <div class="p-6 bg-gray-50 dark:bg-secondary/40 rounded-lg border dark:border-border">
    <h2 class="text-xl font-bold text-gray-900 dark:text-foreground mb-4">5. Ví dụ áp dụng thực tế</h2>
    <div class="space-y-8">
      
      <!-- Example 1 -->
      <div class="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0 last:pb-0">
        <h3 class="font-semibold text-lg text-primary mb-3">Ví dụ 1: Viết bài giải thích kiến thức</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div class="bg-white dark:bg-card p-4 rounded border dark:border-border shadow-sm">
            <span class="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Output Mẫu</span>
            <p class="italic text-gray-700 dark:text-gray-300 font-serif">“Prompt engineering không phải là mẹo vặt, mà là nghệ thuật giao tiếp rõ ràng với một hệ thống xác suất.”</p>
          </div>
          <div class="bg-blue-50 dark:bg-blue-900/10 p-4 rounded border border-blue-100 dark:border-blue-800">
            <span class="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-2">Phân tích Output</span>
            <ul class="list-disc pl-4 text-sm space-y-1 text-gray-700 dark:text-gray-300">
              <li><strong>Chủ đề:</strong> Prompt engineering</li>
              <li><strong>Giọng điệu:</strong> Triết lý, ngắn gọn, súc tích</li>
              <li><strong>Mục tiêu:</strong> Định nghĩa + mở rộng tư duy</li>
              <li><strong>Đối tượng:</strong> Người học AI ở mức cơ bản–trung cấp</li>
            </ul>
          </div>
        </div>
        <div class="bg-gray-800 text-gray-100 p-4 rounded-md font-mono text-sm border-l-4 border-green-500">
          <span class="text-green-400 font-bold block mb-1">PROMPT ĐẢO NGƯỢC:</span>
          “Đóng vai một chuyên gia AI. Viết một câu ngắn mang tính triết lý, giải thích bản chất của prompt engineering cho người mới học, giọng văn súc tích, sâu sắc, dễ nhớ.”
        </div>
        <p class="text-xs text-gray-500 dark:text-muted-foreground mt-2 italic">→ Kết quả: Có thể tạo ra nhiều câu tương tự cùng chất lượng.</p>
      </div>

      <!-- Example 2 -->
      <div class="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0 last:pb-0">
        <h3 class="font-semibold text-lg text-primary mb-3">Ví dụ 2: Prompt đảo ngược cho Code / Kỹ thuật</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div class="bg-white dark:bg-card p-4 rounded border dark:border-border shadow-sm">
            <span class="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Output Mẫu (Code Comment)</span>
            <code class="text-sm text-green-600 dark:text-green-400 block bg-gray-100 dark:bg-black/20 p-2 rounded">“// Tách logic xử lý ra service để dễ test và bảo trì”</code>
          </div>
          <div class="bg-blue-50 dark:bg-blue-900/10 p-4 rounded border border-blue-100 dark:border-blue-800">
            <span class="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-2">Phân tích Output</span>
            <ul class="list-disc pl-4 text-sm space-y-1 text-gray-700 dark:text-gray-300">
              <li><strong>Ngữ cảnh:</strong> Lập trình</li>
              <li><strong>Mục tiêu:</strong> Giải thích quyết định thiết kế</li>
              <li><strong>Phong cách:</strong> Gọn, đúng trọng tâm</li>
              <li><strong>Đối tượng:</strong> Developer</li>
            </ul>
          </div>
        </div>
        <div class="bg-gray-800 text-gray-100 p-4 rounded-md font-mono text-sm border-l-4 border-green-500">
          <span class="text-green-400 font-bold block mb-1">PROMPT ĐẢO NGƯỢC:</span>
          “Đóng vai một senior developer. Viết comment code ngắn gọn giải thích lý do của quyết định thiết kế, tập trung vào khả năng test và bảo trì.”
        </div>
      </div>

      <!-- Example 3 -->
      <div>
        <h3 class="font-semibold text-lg text-primary mb-3">Ví dụ 3: Dùng AI tạo Prompt từ Output (Meta Level)</h3>
        <p class="text-sm text-gray-600 dark:text-muted-foreground mb-4">Dùng AI để bóc tách chính cách AI được điều khiển (Cấp độ cao nhất).</p>
        
        <div class="bg-gray-100 dark:bg-muted p-4 rounded border dark:border-border">
           <span class="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Prompt Template</span>
           <div class="font-mono text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">“Đây là một nội dung mẫu:
[PASTE OUTPUT]

Hãy phân tích và tạo ra một prompt chi tiết có thể dùng để tạo ra những nội dung cùng phong cách, giọng điệu và chất lượng.
Giải thích ngắn gọn vì sao prompt đó hiệu quả.”</div>
        </div>
      </div>

    </div>
  </div>

  <!-- Value Card -->
  <div class="p-6 bg-gray-50 dark:bg-secondary/40 rounded-lg border dark:border-border">
    <h2 class="text-xl font-bold text-gray-900 dark:text-foreground mb-4">6. Giá trị dài hạn</h2>
    <p class="text-sm text-gray-700 dark:text-gray-300">
      Prompt đảo ngược không chỉ là kỹ thuật viết prompt, mà là một cách học AI bằng cách mổ xẻ chính sản phẩm của nó. Ai làm chủ kỹ thuật này sẽ dùng AI như một hệ thống, không phải một chiếc hộp đen may rủi. Nó giúp nâng cấp tư duy, hiểu "cách AI suy nghĩ" và xây dựng hệ prompt chuẩn hoá.
    </p>
  </div>
</div>
`
};
