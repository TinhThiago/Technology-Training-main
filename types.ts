import type React from 'react';

export interface Module {
  id: string;
  title: string;
  icon: React.FC<{className?: string}>;
  description: string;
  subTopics: SubTopic[];
  tasks: Task[];
}

export interface SubTopic {
  id: string;
  title:string;
  keywords: string[];
}

export interface Task {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Quiz {
  topic: string;
  questions: QuizQuestion[];
}

export interface TableColumn {
  id: string;
  name: string;
  type: string;
  description: string;
}

export interface AppTable {
  id: string;
  name: string;
  icon: React.FC<{className?: string}>;
  description: string;
  columns: TableColumn[];
}

export type SelectionType = 'module' | 'table' | 'mockup' | 'none';

// Đã thay đổi: Sử dụng discriminated union cho kiểu Selection
export type Selection = 
  | { type: 'module'; data: Module | null }
  | { type: 'table'; data: AppTable | null }
  | { type: 'mockup'; data: SubTopic | null }
  | { type: 'none'; data: null };