
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ModuleView } from './components/ModuleView';
import { TableView } from './components/TableView';
import { MockupView } from './components/MockupView';
import type { Module, AppTable, SubTopic, Selection, SelectionType } from './types';
import { MODULES, TABLES, MOCKUP_APP_MODULE } from './constants';

const App: React.FC = () => {
  const [selection, setSelection] = useState<Selection>({ type: 'none', data: null });

  const handleSelect = (type: SelectionType, data: Module | AppTable | SubTopic | null) => {
    if (selection.type === type) {
      if (selection.data === null && data === null) {
        return;
      }
      if (selection.data?.id === data?.id) {
        return;
      }
    }
    setSelection({ type, data });
  };

  const renderContent = () => {
    switch (selection.type) {
      case 'table':
        return <TableView table={selection.data as AppTable} key={(selection.data as AppTable).id} />;
      case 'mockup':
        return <MockupView module={MOCKUP_APP_MODULE} activeSubTopic={selection.data as SubTopic} key={(selection.data as SubTopic).id} />;
      case 'module':
        return <ModuleView
                    module={selection.data as Module}
                    key={(selection.data as Module).id}
                />;
      default:
        return <WelcomeScreen />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-background text-gray-800 dark:text-foreground">
      <Sidebar
        modules={MODULES}
        tables={TABLES}
        mockupApp={MOCKUP_APP_MODULE}
        selection={selection}
        onSelect={handleSelect}
      />
      <main className="flex-1 flex flex-col overflow-y-auto p-6 md:p-8 lg:p-10">
        <div className="flex-1 flex flex-col min-h-0">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

const WelcomeScreen: React.FC = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-foreground mb-4 shrink-0">
          Chào mừng bạn đến với Power Platform Trainer
        </h1>
        <div
          className="w-full flex-1 min-h-0 bg-white dark:bg-card rounded-xl shadow-xl overflow-hidden mb-4 border border-gray-200 dark:border-border p-2 flex items-center justify-center cursor-zoom-in hover:shadow-2xl transition-all hover:scale-[1.01]"
          onClick={() => setIsFullScreen(true)}
          title="Bấm để xem toàn màn hình"
        >
           <img
              src="https://i.postimg.cc/rwpnkZfs/Power-App-Overview.jpg"
              alt="Tổng quan Microsoft Power Platform"
              className="w-full h-full object-contain rounded-lg"
           />
        </div>
        <p className="text-lg text-gray-600 dark:text-muted-foreground max-w-2xl shrink-0">
          Chọn một học phần từ thanh điều hướng để bắt đầu hành trình học tập.
        </p>
      </div>

      {isFullScreen && (
        <div
          className="fixed inset-0 z-[100] bg-black bg-opacity-95 flex items-center justify-center p-4 backdrop-blur-sm transition-all animate-in fade-in duration-200"
          onClick={() => setIsFullScreen(false)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src="https://i.postimg.cc/rwpnkZfs/Power-App-Overview.jpg"
              alt="Microsoft Power Platform Stack Overview Fullscreen"
              className="max-w-full max-h-full object-contain shadow-2xl rounded-sm"
            />
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-colors focus:outline-none"
              onClick={(e) => {
                e.stopPropagation();
                setIsFullScreen(false);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
