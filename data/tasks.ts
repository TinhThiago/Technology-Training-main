
import { modelDrivenAppsTasks } from './tasks/modelDrivenAppsTasks';
import { canvasAppsTasks } from './tasks/canvasAppsTasks';
import { powerAutomateTasks } from './tasks/powerAutomateTasks';
import { powerQueryTasks } from './tasks/powerQueryTasks';
import { powerBiTasks } from './tasks/powerBiTasks';
import { webResourcesTasks } from './tasks/webResourcesTasks';
import { aiAgentTasks } from './tasks/aiAgentTasks';
import { promptEngineeringTasks } from './tasks/promptEngineeringTasks';
import { otherKnowledgeTasks } from './tasks/otherKnowledgeTasks';
import { fabricTasks } from './tasks/fabricTasks';
import { pcfTasks } from './tasks/pcfTasks';
import type { Task } from '../types';

export const ALL_TASKS: Task[] = [
  ...modelDrivenAppsTasks,
  ...canvasAppsTasks,
  ...powerAutomateTasks,
  ...powerQueryTasks,
  ...powerBiTasks,
  ...webResourcesTasks,
  ...aiAgentTasks,
  ...promptEngineeringTasks,
  ...otherKnowledgeTasks,
  ...fabricTasks,
  ...pcfTasks,
];