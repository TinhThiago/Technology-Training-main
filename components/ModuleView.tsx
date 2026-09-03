import React, { useState } from 'react';
import type { Module, SubTopic } from '../types';
import { ChevronIcon } from './icons/ChevronIcon';
import { QuizItem } from './QuizItem';
import { TRAINING_MATERIALS } from '../data/materials';
import { TRAINING_QUIZZES } from '../data/quizzes';
import DOMPurify from 'dompurify';

interface ModuleViewProps {
  module: Module;
}

export const ModuleView: React.FC<ModuleViewProps> = ({ module }) => {
  const [activeTopic, setActiveTopic] = useState<SubTopic | null>(null);

  const handleTopicSelect = (topic: SubTopic) => {
    setActiveTopic(topic.id === activeTopic?.id ? null : topic);
  };

  return (
    <div>
      <header className="mb-8">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-white dark:bg-secondary rounded-lg shadow-md">
            <module.icon className="h-10 w-10 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-foreground">{module.title}</h1>
            <p className="text-gray-500 dark:text-muted-foreground mt-1">{module.description}</p>
          </div>
        </div>
      </header>

      <div className="space-y-4">
        {module.subTopics.map((topic) => (
          <div key={topic.id} className="bg-white dark:bg-secondary rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <button
              onClick={() => handleTopicSelect(topic)}
              className="w-full text-left p-4 flex justify-between items-center bg-gray-100 hover:bg-gray-200 dark:bg-muted dark:hover:bg-muted/80 focus:outline-none transition-colors"
            >
              <h2 className="text-lg font-semibold text-gray-800 dark:text-foreground">{topic.title}</h2>
              <ChevronIcon
                className={`w-5 h-5 text-gray-500 transform transition-transform ${activeTopic?.id === topic.id ? 'rotate-180' : ''}`}
              />
            </button>
            {activeTopic?.id === topic.id && <TopicContent topic={activeTopic} />}
          </div>
        ))}
      </div>
    </div>
  );
};



const formatInlineMarkdown = (text: string) => {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(
      /`([^`]+)`/g,
      '<code class="bg-gray-100 rounded px-1 py-0.5 text-sm font-mono">$1</code>'
    );
};

const formatMarkdown = (text: string) => {
  const lines = text.split('\n');
  let html = '';
  let inUl = false;
  let inOl = false;
  let inTable = false;

  const closeLists = () => {
    if (inUl) {
      html += '</ul>';
      inUl = false;
    }
    if (inOl) {
      html += '</ol>';
      inOl = false;
    }
  };

  const closeTable = () => {
    if (inTable) {
      html += '</tbody></table></div>';
      inTable = false;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    if (!line) {
      closeLists();
      closeTable();
      continue;
    }
    if (line.startsWith('<')) {
      closeLists();
      closeTable();
      html += rawLine;
      continue;
    }
    if (line.startsWith('|') && line.endsWith('|')) {
      closeLists();

      const cells = line
        .split('|')
        .slice(1, -1)
        .map((cell) => cell.trim());

      const isSeparator = cells.every((cell) => /^:?-{3,}:?$/.test(cell));

      if (isSeparator) {
        continue;
      }

      const nextLine = lines[i + 1]?.trim() || '';
      const nextCells = nextLine
        .split('|')
        .slice(1, -1)
        .map((cell) => cell.trim());

      const nextIsSeparator =
        nextLine.startsWith('|') &&
        nextLine.endsWith('|') &&
        nextCells.every((cell) => /^:?-{3,}:?$/.test(cell));

      if (!inTable) {
        html +=
          '<div class="my-4 overflow-x-auto"><table class="w-full border-collapse text-sm">';
        inTable = true;
      }

      if (nextIsSeparator) {
        html += '<thead><tr>';
        cells.forEach((cell) => {
          html += `<th class="border border-gray-300 bg-gray-50 px-3 py-2 text-left font-semibold">${formatInlineMarkdown(cell)}</th>`;
        });
        html += '</tr></thead><tbody>';
        i++;
      } else {
        html += '<tr>';
        cells.forEach((cell) => {
          html += `<td class="border border-gray-300 px-3 py-2">${formatInlineMarkdown(cell)}</td>`;
        });
        html += '</tr>';
      }

      continue;
    }

    closeTable();

    if (line.startsWith('### ')) {
      closeLists();
      html += `<h3 class="mt-8 mb-3 text-lg font-bold text-gray-900">${formatInlineMarkdown(line.replace(/^### /, ''))}</h3>`;
      continue;
    }

    if (line.startsWith('## ')) {
      closeLists();
      html += `<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">${formatInlineMarkdown(line.replace(/^## /, ''))}</h2>`;
      continue;
    }

    if (line.startsWith('# ')) {
      closeLists();
      html += `<h1 class="mt-8 mb-4 text-2xl font-bold text-gray-900">${formatInlineMarkdown(line.replace(/^# /, ''))}</h1>`;
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      closeTable();
      if (!inUl) {
        closeLists();
        html += '<ul class="my-4 list-disc space-y-3 pl-6">';
        inUl = true;
      }
      html += `<li>${formatInlineMarkdown(line.replace(/^[-*]\s+/, ''))}</li>`;
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      closeTable();
      if (!inOl) {
        closeLists();
        html += '<ol class="my-4 list-decimal space-y-2 pl-6">';
        inOl = true;
      }
      html += `<li>${formatInlineMarkdown(line.replace(/^\d+\.\s+/, ''))}</li>`;
      continue;
    }

    closeLists();
    html += `<p class="mb-4 leading-7 text-gray-800">${formatInlineMarkdown(line)}</p>`;
  }

  closeLists();
  closeTable();

  return html;
};

const TopicContent: React.FC<{ topic: SubTopic }> = ({ topic }) => {
  const [activeTab, setActiveTab] = useState<'material' | 'quiz'>('material');

  const materialContent = TRAINING_MATERIALS[topic.id] || '<p>Nội dung cho chủ đề này hiện không có sẵn.</p>';
  const quiz = TRAINING_QUIZZES[topic.id];
  // Logic kiểm tra xem nội dung có cần được coi là preformatted hay không.
  // Ví dụ: các ID bắt đầu bằng 'pe-' được coi là preformatted.
  const isPreformatted = topic.id.startsWith('pe-');

  // Sanitize nội dung HTML bằng DOMPurify nếu nó không phải là preformatted
  const sanitizedMaterialHtml = isPreformatted
    ? DOMPurify.sanitize(materialContent)
    : DOMPurify.sanitize(formatMarkdown(materialContent));

  return (
    <div className="p-6 bg-white border-t border-gray-200 dark:bg-secondary dark:border-border">
      <div className="border-b border-gray-200 dark:border-border mb-4">
        <nav className="-mb-px flex space-x-6" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('material')}
            className={`${activeTab === 'material'
              ? 'border-primary text-primary'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-muted-foreground dark:hover:text-foreground'
              } whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm`}
          >
            Documents
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`${activeTab === 'quiz'
              ? 'border-primary text-primary'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-muted-foreground dark:hover:text-foreground'
              } whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm`}
          >
            Quizzes
          </button>
        </nav>
      </div>

      <div>
        {activeTab === 'material' && (
          <div
            className="max-w-none text-gray-900"
            dangerouslySetInnerHTML={{ __html: sanitizedMaterialHtml }}
          />
        )}
        {activeTab === 'quiz' && (
          <div>
            {quiz ? (
              <div className="space-y-6">
                {quiz.questions.map((q, index) => (
                  <QuizItem key={index} question={q} index={index} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 dark:text-muted-foreground p-4">Quizzes for this topic are not available.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
