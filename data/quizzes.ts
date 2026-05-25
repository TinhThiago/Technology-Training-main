
import type { Quiz } from '../types';
import { modelDrivenAppsQuizzes } from './quizzes/modelDrivenApps';
import { canvasAppsQuizzes } from './quizzes/canvasApps';
import { powerAutomateQuizzes } from './quizzes/powerAutomate';
import { powerQueryQuizzes } from './quizzes/powerQuery';
import { powerBiQuizzes } from './quizzes/powerBi';
import { webResourcesQuizzes } from './quizzes/webResources';
import { aiAgentQuizzes } from './quizzes/aiAgent';
import { promptEngineeringQuizzes } from './quizzes/promptEngineering';
import { otherKnowledgeQuizzes } from './quizzes/otherKnowledge';
import { fabricQuizzes } from './quizzes/fabric';
import { pcfQuizzes } from './quizzes/pcf';
import { pluginQuizzes } from './quizzes/plugin';
import { azurefunctionQuizzes } from './quizzes/azurefunction';

export const TRAINING_QUIZZES: Record<string, Quiz> = {
  ...modelDrivenAppsQuizzes,
  ...canvasAppsQuizzes,
  ...powerAutomateQuizzes,
  ...powerQueryQuizzes,
  ...powerBiQuizzes,
  ...webResourcesQuizzes,
  ...aiAgentQuizzes,
  ...promptEngineeringQuizzes,
  ...otherKnowledgeQuizzes,
  ...fabricQuizzes,
  ...pcfQuizzes,
  ...pluginQuizzes,
  ...azurefunctionQuizzes
};