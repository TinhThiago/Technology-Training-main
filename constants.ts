
import type { Module, AppTable } from './types';
import { PowerAppsIcon } from './components/icons/PowerAppsIcon';
import { PowerAutomateIcon } from './components/icons/PowerAutomateIcon';
import { PowerBIIcon } from './components/icons/PowerBIIcon';
import { TableIcon } from './components/icons/TableIcon';
import { PowerVAgentsIcon } from './components/icons/PowerVAgentsIcon';
import { PromptEngineeringIcon } from './components/icons/PromptEngineeringIcon';
import { MockupAppIcon } from './components/icons/MockupAppIcon';
import { PowerPlatformIcon } from './components/icons/PowerPlatformIcon';
import { FabricIcon } from './components/icons/FabricIcon';
import { modelDrivenAppsTasks } from './data/tasks/modelDrivenAppsTasks';
import { canvasAppsTasks } from './data/tasks/canvasAppsTasks';
import { powerAutomateTasks } from './data/tasks/powerAutomateTasks';
import { powerQueryTasks } from './data/tasks/powerQueryTasks';
import { powerBiTasks } from './data/tasks/powerBiTasks';
import { webResourcesTasks } from './data/tasks/webResourcesTasks';
import { aiAgentTasks } from './data/tasks/aiAgentTasks';
import { promptEngineeringTasks } from './data/tasks/promptEngineeringTasks';
import { otherKnowledgeTasks } from './data/tasks/otherKnowledgeTasks';
import { fabricTasks } from './data/tasks/fabricTasks';
import { pcfTasks } from './data/tasks/pcfTasks';
import { performanceTasks } from './data/tasks/performanceTasks';

export const MOCKUP_APP_MODULE: Module = {
  id: 'mockup-app',
  title: 'Mockup App',
  icon: MockupAppIcon,
  description: 'Xem các bản demo giao diện người dùng cho các ứng dụng mẫu.',
  subTopics: [
    { id: 'mockup-xuat-kho', title: 'Ứng dụng Xuất kho', keywords: ['mockup', 'demo', 'ui', 'xuat kho'] },
    { id: 'mockup-chatbot', title: 'Ứng dụng Chatbot', keywords: ['mockup', 'demo', 'ui', 'chatbot', 'ai'] },
    { id: 'mockup-don-ban-print', title: 'Form in Đơn bán', keywords: ['mockup', 'demo', 'ui', 'print', 'sales order'] },
    { id: 'mockup-xuat-kho-print', title: 'Form in Xuất kho', keywords: ['mockup', 'demo', 'ui', 'print', 'export'] },
  ],
  tasks: [],
};

export const MODULES: Module[] = [
  {
    id: 'model-driven-apps',
    title: 'Model-driven Apps',
    icon: PowerAppsIcon,
    description: 'Xây dựng ứng dụng nghiệp vụ dựa trên dữ liệu Dataverse.',
    subTopics: [
      { id: 'mda-intro', title: 'Tìm hiểu về Model-driven App', keywords: ['Model-driven App fundamentals', 'Dataverse', 'solutions', 'power app'] },
      { id: 'mda-data-model', title: 'Tạo Solution, Table, Form, View', keywords: ['Solutions', 'Tables (Entities)', 'Columns (Fields)', 'Forms', 'Views', 'data model'] },
      { id: 'mda-relationships', title: 'Các loại Relationships', keywords: ['Relationships', '1:N', 'N:1', 'N:N', 'one-to-many', 'many-to-one', 'many-to-many'] },
      { id: 'mda-columns', title: 'Làm việc với Cột Lookup, Calculated, Rollup', keywords: ['Lookup columns', 'Calculated columns', 'Rollup columns', 'Relationships', 'parent information'] },
      { id: 'mda-keys', title: 'Định nghĩa Alternate Keys', keywords: ['Alternate Keys', 'duplicate detection', 'unique constraint', 'data integration'] },
      { id: 'mda-app-design', title: 'Tạo và cấu trúc App Model-driven', keywords: ['App Designer', 'Site Map', 'Grouping tables', 'add tables to app'] },
      { id: 'mda-business-rules', title: 'Tạo Business Rules', keywords: ['Business Rules', 'logic', 'no-code', 'form logic', 'validation'] },
      { id: 'mda-charts', title: 'Tạo và sử dụng Charts', keywords: ['Charts', 'data visualization', 'dashboards', 'visualizations'] },
    ],
    tasks: modelDrivenAppsTasks,
  },
  {
    id: 'canvas-apps',
    title: 'Canvas Apps',
    icon: PowerAppsIcon,
    description: 'Thiết kế giao diện tùy chỉnh và kết nối nhiều nguồn dữ liệu.',
    subTopics: [
      { id: 'ca-intro', title: 'Tìm hiểu về Canvas App', keywords: ['Canvas App fundamentals', 'Controls', 'Screens', 'Formulas', 'connectors'] },
      { id: 'ca-common-functions', title: 'Các hàm Power Fx thông dụng', keywords: ['Power Fx', 'functions', 'formulas', 'Filter', 'Patch', 'Navigate', 'Collect'] },
      { id: 'ca-export-app', title: 'Tạo App Xuất kho tổng hợp', keywords: ['UI Design from template', 'Load related data (Sales Orders)', 'Data input', 'Patch function', 'write code for button'] },
      { id: 'ca-chatbot', title: 'Tạo App "Chat bot"', keywords: ['Chat interface UI', 'Connect to Power Automate Flow', 'Call external API (GPT)', 'display API response'] },
      { id: 'ca-performance', title: 'Tối ưu hóa hiệu năng', keywords: ['Performance', 'optimization', 'delegation', 'Concurrent', 'OnStart', 'collections'] },
      { id: 'ca-tips-tricks', title: 'Mẹo và thủ thuật', keywords: ['Tips', 'tricks', 'components', 'responsive design', 'error handling'] },
    ],
    tasks: canvasAppsTasks,
  },
  {
    id: 'power-automate',
    title: 'Power Automate',
    icon: PowerAutomateIcon,
    description: 'Tự động hóa các quy trình và luồng công việc.',
    subTopics: [
        { id: 'pa-intro', title: 'Giới thiệu về Power Automate', keywords: ['Power Automate fundamentals', 'cloud flows', 'desktop flows', 'triggers', 'actions', 'connectors'] },
        { id: 'pa-triggers', title: 'Sử dụng Triggers (Automated Flows)', keywords: ['Automated cloud flow', 'Dataverse Triggers', 'Update row action', 'inventory calculation', 'update stock'] },
        { id: 'pa-scheduled', title: 'Tạo Flow theo lịch (Scheduled Flows)', keywords: ['Scheduled cloud flow', 'Recurrence trigger', 'calculate sales revenue', 'send email notification'] },
        { id: 'pa-expressions', title: 'Làm chủ Biểu thức (Expressions)', keywords: ['Expressions', 'WDL', 'functions', 'formatDateTime', 'concat', 'variables'] },
        { id: 'pa-error-handling', title: 'Xử lý lỗi nâng cao', keywords: ['Error handling', 'try-catch', 'run after', 'scopes', 'terminate'] },
        { id: 'pa-best-practices', title: 'Mẹo và Tối ưu hóa hiệu năng', keywords: ['Best practices', 'performance', 'optimization', 'concurrency', 'filtering', 'variables'] },
    ],
    tasks: powerAutomateTasks,
  },
  {
    id: 'power-query',
    title: 'Power Query',
    icon: PowerBIIcon,
    description: 'Chuẩn bị, làm sạch và chuyển đổi dữ liệu.',
    subTopics: [
        { id: 'pq-intro', title: 'Giới thiệu Power Query & Ngôn ngữ M', keywords: ['Power Query', 'ETL', 'M Language', 'data transformation', 'introduction'] },
        { id: 'pq-common-transforms', title: 'Các kỹ thuật transform dữ liệu cơ bản', keywords: ['transformations', 'filter', 'remove columns', 'change type', 'split column'] },
        { id: 'pq-advanced-transforms', title: 'Các kỹ thuật transform nâng cao', keywords: ['group by', 'unpivot', 'pivot', 'custom column', 'conditional column'] },
        { id: 'pq-merge-append', title: 'Kết hợp Queries (Merge & Append)', keywords: ['merge queries', 'append queries', 'join', 'union'] },
        { id: 'pq-query-folding', title: 'Chủ đề chuyên sâu: Query Folding', keywords: ['performance', 'optimization', 'query folding', 'native query', 'sql'] },
        { id: 'pq-in-power-bi', title: 'Ứng dụng trong Power BI (Dataflows & Linked Tables)', keywords: ['Power BI', 'Dataflow', 'linked tables', 'linked entities', 'ETL'] },
        { id: 'pq-in-power-apps', title: 'Ứng dụng trong Power Apps', keywords: ['Power Apps', 'read-only', 'data shaping', 'canvas apps'] },
        { id: 'pq-in-excel', title: 'Ứng dụng trong Excel (Get & Transform)', keywords: ['Excel', 'Get & Transform', 'data automation', 'spreadsheets'] },
        { id: 'pq-best-practices', title: 'Mẹo & Tối ưu hóa khác', keywords: ['best practices', 'organize queries', 'renaming steps', 'documentation'] },
    ],
    tasks: powerQueryTasks,
  },
  {
    id: 'power-bi',
    title: 'Power BI',
    icon: PowerBIIcon,
    description: 'Phân tích dữ liệu và tạo báo cáo, dashboard tương tác.',
    subTopics: [
        { id: 'pbi-intro', title: 'Giới thiệu Power BI & Workflow', keywords: ['Power BI Desktop', 'Power BI Service', 'workflow', 'get data', 'transform', 'model', 'visualize', 'publish'] },
        { id: 'pbi-data-modeling', title: 'Data Modeling & Star Schema', keywords: ['data model', 'relationships', 'cardinality', 'star schema', 'fact table', 'dimension table', 'performance'] },
        { id: 'pbi-dax-intro', title: 'Giới thiệu về DAX', keywords: ['DAX', 'Data Analysis Expressions', 'Measures', 'Calculated Columns', 'CALCULATE', 'SUM', 'RELATED'] },
        { id: 'pbi-report-design', title: 'Thiết kế Báo cáo Tương tác Nâng cao', keywords: ['report design', 'bookmarks', 'tooltips', 'drillthrough', 'conditional formatting', 'interactive reports'] },
        { id: 'pbi-service', title: 'Power BI Service (Publish, Share, Refresh)', keywords: ['Power BI Service', 'publish', 'share', 'workspace', 'app', 'dashboard', 'report', 'scheduled refresh'] },
        { id: 'pbi-report-agg', title: 'Tạo report Aggregated data', keywords: ['Load data from Aggregated table', 'Slicer visualization', 'Column chart', 'Doughnut chart', 'Table visualization'] },
        { id: 'pbi-report-detail', title: 'Tạo report Detail data (Đơn bán chi tiết)', keywords: ['Cumulative calculation in Power Query', 'Table detail view', 'Product ENV'] },
        { id: 'pbi-report-margin', title: 'Tạo report Margin', keywords: ['Slicer for product', 'Table for margin details', 'Interaction between visuals', 'auto load SOD BOD'] },
    ],
    tasks: powerBiTasks,
  },
  {
    id: 'web-resources',
    title: 'Web Resources',
    icon: PowerAppsIcon,
    description: 'Tùy chỉnh Model-driven app nâng cao bằng JavaScript và HTML.',
    subTopics: [
        { id: 'wr-js', title: 'Sử dụng JavaScript trong Form (Event onChange)', keywords: ['JavaScript web resource', 'Form event handlers', 'onChange event', 'Client API object model', 'show notification', 'validate stock'] },
        { id: 'wr-html', title: 'Tạo Command và Form in (HTML)', keywords: ['HTML web resource', 'Command bar customization', 'Ribbon Workbench', 'custom print form'] },
    ],
    tasks: webResourcesTasks,
  },
  {
    id: 'ai-agent',
    title: 'AI, Agent & Agentic AI',
    icon: PowerVAgentsIcon,
    description: 'Tích hợp AI, xây dựng các Agent thông minh và khám phá các hệ thống Agentic AI.',
    subTopics: [
      { id: 'ai-concepts', title: 'Các khái niệm về AI', keywords: ['AI', 'Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Generative AI'] },
      { id: 'agent-concepts', title: 'Khái niệm về Agent', keywords: ['AI Agent', 'intelligent agent', 'sensors', 'actuators', 'framework', 'perception', 'action'] },
      { id: 'agentic-ai-concepts', title: 'Khái niệm Agentic AI', keywords: ['Agentic AI', 'multi-agent systems', 'planning', 'memory', 'tool use', 'AutoGPT', 'CrewAI'] },
      { id: 'ai-builder', title: 'AI Builder', keywords: ['AI Builder', 'prediction models', 'object detection', 'form processing', 'pre-built models'] },
      { id: 'copilot-studio', title: 'Copilot Studio', keywords: ['Copilot Studio', 'Power Virtual Agents', 'chatbots', 'topics', 'triggers', 'entities', 'actions'] },
      { id: 'prompt-builder', title: 'Prompt Builder', keywords: ['Prompt Builder', 'AI Builder', 'prompts', 'generative AI', 'dynamic prompts', 'Power Fx'] },
      { id: 'agent-best-practices', title: 'Best Practices', keywords: ['AI Agent', 'best practices', 'Responsible AI', 'human-in-the-loop', 'cost management'] },
    ],
    tasks: aiAgentTasks,
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering',
    icon: PromptEngineeringIcon,
    description: 'Kỹ thuật thiết kế câu lệnh cho các mô hình AI.',
    subTopics: [
      { id: 'pe-basics', title: 'Nguyên tắc cơ bản của Prompt', keywords: ['Prompt Engineering', 'LLM', 'instructions', 'context', 'persona'] },
      { id: 'pe-advanced', title: 'Kỹ thuật Prompt nâng cao', keywords: ['Few-shot prompting', 'Chain of Thought', 'ReAct', 'prompt chaining'] },
      { id: 'pe-vibe-coding', title: 'Khái niệm Vibe Coding', keywords: ['Prompt Engineering', 'vibe coding', 'code generation', 'intuitive prompting', 'creative'] },
      { id: 'pe-vibe-build', title: 'Các bước xây dựng dự án Vibe Coding', keywords: ['Vibe Coding', 'project', 'build', 'metaprompt', 'PRP', 'implementation', 'debugging', 'deployment'] },
      { id: 'pe-vibe-ideas', title: 'Ý tưởng cho Vibe Coding', keywords: ['Vibe Coding', 'ideas', 'projects', 'inspiration', 'database', 'dashboard', 'chatbot'] },
      { id: 'pe-reverse', title: 'Reverse Prompt Engineering', keywords: ['Reverse Prompt Engineering', 'Prompt Analysis', 'Optimization', 'Deconstruction'] },
    ],
    tasks: promptEngineeringTasks,
  },
  {
    id: 'other-knowledge',
    title: 'Kiến thức bổ trợ',
    icon: PowerPlatformIcon,
    description: 'Các kiến thức bổ trợ, kỹ năng mềm và tối ưu hóa chuyên sâu.',
    subTopics: [
      { id: 'ok-performance', title: 'Tối ưu hiệu năng ứng dụng lớn', keywords: ['Performance', 'Large Apps', 'Architecture', 'Best Practices', 'Monitoring'] },
      { id: 'ok-fabric-db', title: 'Storage data - Fabric', keywords: ['Fabric', 'Warehouse', 'Lakehouse', 'Eventhouse', 'SQL Database', 'Cosmos DB'] },
      { id: 'ok-pcf', title: 'Power Apps Code Components (PCF)', keywords: ['PCF', 'Control', 'Lifecycle', 'Tooling', 'Dataset', 'Architecture'] },
      { id: 'ok-git', title: 'Quản lý phiên bản với Git', keywords: ['Git', 'Version Control', 'CI/CD', 'Repository'] },
      { id: 'ok-agile', title: 'Agile và Scrum', keywords: ['Agile', 'Scrum', 'Project Management', 'Sprints'] },
    ],
    tasks: [...otherKnowledgeTasks, ...pcfTasks, ...fabricTasks, ...performanceTasks],
  },
];

export const TABLES: AppTable[] = [
  {
    id: 'nhom-san-pham',
    name: 'Nhóm sản phẩm',
    icon: TableIcon,
    description: 'Quản lý các nhóm sản phẩm.',
    columns: [
      { id: 'nsp-ten', name: 'Tên Nhóm sản phẩm', type: 'Text', description: 'Tên của nhóm sản phẩm.' },
      { id: 'nsp-so-sp', name: 'Số sp trong nhóm', type: 'Number', description: 'Rollup column (sản phẩm).' },
      { id: 'nsp-source', name: 'Source phụ trách', type: 'Text', description: 'Người hoặc bộ phận phụ trách.' },
    ],
  },
  {
    id: 'san-pham',
    name: 'Sản phẩm',
    icon: TableIcon,
    description: 'Quản lý thông tin chi tiết các sản phẩm.',
    columns: [
      { id: 'sp-ten', name: 'Tên sản phẩm', type: 'Calculate', description: 'Ghép từ (Nhóm sp + thương hiệu + quy cách).' },
      { id: 'sp-nhom', name: 'Nhóm sản phẩm', type: 'Lookup', description: 'Nhóm sản phẩm.' },
      { id: 'sp-don-vi', name: 'Don vị chuẩn', type: 'Text', description: 'Đơn vị chuẩn.' },
      { id: 'sp-quy-cach', name: 'Quy cách', type: 'Text', description: 'Quy cách đóng gói sản phẩm.' },
      { id: 'sp-thuong-hieu', name: 'Thương hiệu', type: 'Text', description: 'Thương hiệu của sản phẩm.' },
      { id: 'sp-so-don-mua', name: 'Số đơn hàng mua', type: 'Number', description: 'Rollup column (Mua table).' },
      { id: 'sp-so-don-ban', name: 'Số đơn hàng bán', type: 'Number', description: 'Rollup column (Bán table).' },
    ],
  },
  {
    id: 'ty-le-chuyen-doi',
    name: 'Tỷ lệ chuyển đổi',
    icon: TableIcon,
    description: 'Quản lý tỷ lệ quy đổi đơn vị cho sản phẩm.',
    columns: [
        { id: 'tlcd-ten', name: 'Tên tỷ lệ CD', type: 'Calculate', description: 'Ghép từ (Sản phẩm + đơn vị).' },
        { id: 'tlcd-san-pham', name: 'Sản phẩm', type: 'Lookup', description: 'Sản phẩm.' },
        { id: 'tlcd-don-vi-chuan', name: 'Don vị chuẩn', type: 'Text', description: 'Calculate (sản phẩm).' },
        { id: 'tlcd-don-vi-chuyen-doi', name: 'Đơn vị chuyển đổi', type: 'Text', description: 'Đơn vị được quy đổi.' },
        { id: 'tlcd-ty-le', name: 'Tỷ lệ chuyển đổi', type: 'Number', description: 'Hệ số quy đổi.' },
    ],
  },
  {
    id: 'nhom-khach-hang',
    name: 'Nhóm khách hàng',
    icon: TableIcon,
    description: 'Quản lý các nhóm khách hàng (Nhà máy, Bán lẻ).',
    columns: [
        { id: 'nkh-ten-nhom', name: 'Tên nhóm (Nhà máy, Bán lẻ)', type: 'Text', description: 'Tên nhóm khách hàng.' },
        { id: 'nkh-so-kh', name: 'Số KH trong nhóm', type: 'Number', description: 'Rollup column (Khách hàng).' },
        { id: 'nkh-sale-phu-trach', name: 'Sale phụ trách', type: 'Text', description: 'Nhân viên sale phụ trách nhóm.' },
    ],
  },
  {
    id: 'khach-hang',
    name: 'Khách hàng',
    icon: TableIcon,
    description: 'Quản lý thông tin chi tiết của khách hàng.',
    columns: [
        { id: 'kh-ten', name: 'Tên KH', type: 'Text', description: 'Tên đầy đủ của khách hàng.' },
        { id: 'kh-ten-nhom', name: 'Tên nhóm KH', type: 'Lookup', description: 'Liên kết đến Nhóm khách hàng.' },
        { id: 'kh-dia-chi', name: 'Địa chỉ', type: 'Text', description: 'Địa chỉ của khách hàng.' },
        { id: 'kh-sdt', name: 'SĐT', type: 'Number', description: 'Số điện thoại liên lạc.' },
        { id: 'kh-mst', name: 'MST', type: 'Number', description: 'Mã số thuế của khách hàng.' },
        { id: 'kh-so-don-hang', name: 'Số đơn hàng', type: 'Number', description: 'Rollup column (Đơn bán).' },
    ],
  },
  {
    id: 'nhom-nha-cung-cap',
    name: 'Nhóm Nhà cung cấp',
    icon: TableIcon,
    description: 'Quản lý các nhóm nhà cung cấp.',
    columns: [
        { id: 'nncc-ten-nhom', name: 'Tên nhóm (Nhà máy, Bán lẻ)', type: 'Text', description: 'Tên nhóm nhà cung cấp.' },
        { id: 'nncc-so-ncc', name: 'Số NCC trong nhóm', type: 'Number', description: 'Rollup column (Nhà cung cấp).' },
        { id: 'nncc-source', name: 'Source phụ trách', type: 'Text', description: 'Người hoặc bộ phận phụ trách.' },
    ],
  },
   {
    id: 'nha-cung-cap',
    name: 'Nhà cung cấp',
    icon: TableIcon,
    description: 'Quản lý thông tin chi tiết của nhà cung cấp.',
    columns: [
        { id: 'ncc-ten', name: 'Tên Nhà cung cấp', type: 'Text', description: 'Tên đầy đủ của nhà cung cấp.' },
        { id: 'ncc-ten-nhom', name: 'Tên nhóm NCC', type: 'Lookup', description: 'Liên kết đến Nhóm Nhà cung cấp.' },
        { id: 'ncc-dia-chi', name: 'Địa chỉ', type: 'Text', description: 'Địa chỉ của nhà cung cấp.' },
        { id: 'ncc-sdt', name: 'SĐT', type: 'Number', description: 'Số điện thoại liên lạc.' },
        { id: 'ncc-mst', name: 'MST', type: 'Number', description: 'Mã số thuế của nhà cung cấp.' },
        { id: 'ncc-so-don-mua', name: 'Số đơn hàng mua', type: 'Number', description: 'Rollup column (Đơn mua).' },
    ],
  },
  {
    id: 'don-ban',
    name: 'Đơn bán',
    icon: TableIcon,
    description: 'Quản lý các đơn hàng bán ra cho khách hàng.',
    columns: [
        { id: 'db-don-hang', name: 'Đơn hàng', type: 'Autonumber', description: 'Mã đơn hàng tự động tăng.' },
        { id: 'db-khach-hang', name: 'Khách hàng', type: 'Lookup', description: 'Liên kết đến Khách hàng.' },
        { id: 'db-vat-choice', name: 'VAT', type: 'Choice', description: 'Có VAT/Không VAT.' },
        { id: 'db-tong-tien-no-vat', name: 'Tổng tiền không VAT', type: 'Number', description: 'Roll up column thành tiền.' },
        { id: 'db-thue', name: 'Thuế', type: 'Number', description: 'Roll up column vat.' },
        { id: 'db-tong-tien', name: 'Tổng tiền', type: 'Calculate', description: 'Tổng tiền không VAT + Thuế.' },
    ],
  },
  {
    id: 'don-ban-chi-tiet',
    name: 'Đơn bán chi tiết',
    icon: TableIcon,
    description: 'Quản lý các dòng sản phẩm trong một đơn bán.',
    columns: [
        { id: 'dbct-ma-dh', name: 'Mã ĐH chi tiết', type: 'Text', description: 'Mã định danh dòng chi tiết.' },
        { id: 'dbct-don-hang', name: 'Đơn hàng', type: 'Lookup', description: 'Liên kết đến Đơn bán.' },
        { id: 'dbct-san-pham', name: 'Tên sản phẩm', type: 'Lookup', description: 'Liên kết đến Sản phẩm.' },
        { id: 'dbct-so-luong', name: 'Số lượng', type: 'Number', description: 'Số lượng sản phẩm bán.' },
        { id: 'dbct-don-gia', name: 'Đơn giá', type: 'Number', description: 'Đơn giá sản phẩm.' },
        { id: 'dbct-thanh-tien', name: 'Thành tiền', type: 'Calculate', description: 'Số lượng * Đơn giá.' },
        { id: 'dbct-vat', name: 'VAT', type: 'Calculate', description: '(Thành tiền * 10%).' },
    ],
  },
  {
    id: 'don-mua',
    name: 'Đơn mua',
    icon: TableIcon,
    description: 'Quản lý các đơn hàng mua vào từ nhà cung cấp.',
    columns: [
        { id: 'dm-don-hang', name: 'Đơn hàng', type: 'Autonumber', description: 'Mã đơn hàng tự động tăng.' },
        { id: 'dm-nha-cung-cap', name: 'Nhà cung cấp', type: 'Lookup', description: 'Liên kết đến Nhà cung cấp.' },
        { id: 'dm-vat-choice', name: 'VAT', type: 'Choice', description: 'Có VAT/Không VAT.' },
        { id: 'dm-tong-tien-no-vat', name: 'Tổng tiền không VAT', type: 'Number', description: 'Roll up column thành tiền.' },
        { id: 'dm-thue', name: 'Thuế', type: 'Number', description: 'Roll up column vat.' },
        { id: 'dm-tong-tien', name: 'Tổng tiền', type: 'Calculate', description: 'Tổng tiền không VAT + Thuế.' },
    ],
  },
  {
    id: 'don-mua-chi-tiet',
    name: 'Đơn mua chi tiết',
    icon: TableIcon,
    description: 'Quản lý các dòng sản phẩm trong một đơn mua.',
    columns: [
        { id: 'dmct-ma-dh', name: 'Mã ĐH chi tiết', type: 'Text', description: 'Mã định danh dòng chi tiết.' },
        { id: 'dmct-don-hang', name: 'Đơn hàng', type: 'Lookup', description: 'Liên kết đến Đơn mua.' },
        { id: 'dmct-san-pham', name: 'Tên sản phẩm', type: 'Lookup', description: 'Liên kết đến Sản phẩm.' },
        { id: 'dmct-so-luong', name: 'Số lượng', type: 'Number', description: 'Số lượng sản phẩm mua.' },
        { id: 'dmct-don-gia', name: 'Đơn giá', type: 'Number', description: 'Đơn giá sản phẩm.' },
        { id: 'dmct-thanh-tien', name: 'Thành tiền', type: 'Calculate', description: 'Số lượng * Đơn giá.' },
        { id: 'dmct-vat', name: 'VAT', type: 'Calculate', description: '(Thành tiền * 10%).' },
    ],
  },
  {
    id: 'xuat-kho',
    name: 'Xuất kho',
    icon: TableIcon,
    description: 'Ghi nhận các hoạt động xuất kho.',
    columns: [
        { id: 'xk-ma-xuat-kho', name: 'Mã xuất kho', type: 'Autonumber', description: 'Mã phiếu xuất kho.' },
        { id: 'xk-don-ban-ct', name: 'Đơn bán chi tiết', type: 'Lookup', description: 'Liên kết đến Đơn bán chi tiết.' },
        { id: 'xk-ten-sp', name: 'Tên sản phẩm', type: 'Text', description: 'Tên sản phẩm (có thể lấy từ lookup).' },
        { id: 'xk-so-luong', name: 'Số lượng', type: 'Number', description: 'Số lượng thực xuất.' },
    ],
  },
  {
    id: 'nhap-kho',
    name: 'Nhập kho',
    icon: TableIcon,
    description: 'Ghi nhận các hoạt động nhập kho.',
    columns: [
        { id: 'nk-ma-nhap-kho', name: 'Mã nhập kho', type: 'Autonumber', description: 'Mã phiếu nhập kho.' },
        { id: 'nk-don-mua-ct', name: 'Đơn mua chi tiết', type: 'Lookup', description: 'Liên kết đến Đơn mua chi tiết.' },
        { id: 'nk-ten-sp', name: 'Tên sản phẩm', type: 'Text', description: 'Tên sản phẩm (có thể lấy từ lookup).' },
        { id: 'nk-so-luong', name: 'Số lượng', type: 'Number', description: 'Số lượng thực nhập.' },
    ],
  },
  {
    id: 'ton-kho',
    name: 'Tồn kho',
    icon: TableIcon,
    description: 'Quản lý số lượng tồn kho thực tế của sản phẩm.',
    columns: [
        { id: 'tk-san-pham', name: 'Tên sản phẩm', type: 'Lookup', description: 'Liên kết đến Sản phẩm.' },
        { id: 'tk-ton-thuc-te', name: 'Tồn thực tế', type: 'Number', description: 'Số lượng tồn kho hiện tại.' },
        { id: 'tk-don-vi-chuan', name: 'Don vị chuẩn', type: 'Calculate', description: 'Lấy từ Sản phẩm.' },
        { id: 'tk-nhom-san-pham', name: 'Nhóm sản phẩm', type: 'Calculate', description: 'Lấy từ Sản phẩm -> Nhóm SP -> Name.' },
    ],
  },
];
