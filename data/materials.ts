
import { modelDrivenAppsMaterials } from './materials/modelDrivenApps';
import { canvasAppsMaterials } from './materials/canvasApps';
import { powerAutomateMaterials } from './materials/powerAutomate';
import { powerQueryMaterials } from './materials/powerQuery';
import { powerBiMaterials } from './materials/powerBi';
import { webResourcesMaterials } from './materials/webResources';
import { aiAgentMaterials } from './materials/aiAgent';
import { promptEngineeringMaterials } from './materials/promptEngineering';
import { otherKnowledgeMaterials } from './materials/otherKnowledge';
import { fabricMaterials } from './materials/fabric';
import { pcfMaterials } from './materials/pcf';
import { pluginMaterials } from './materials/plugin';
import { azurefunctionMaterials } from './materials/azurefunction';

export const TRAINING_MATERIALS: Record<string, string> = {
  ...modelDrivenAppsMaterials,
  ...canvasAppsMaterials,
  ...powerAutomateMaterials,
  ...powerQueryMaterials,
  ...powerBiMaterials,
  ...webResourcesMaterials,
  ...aiAgentMaterials,
  ...promptEngineeringMaterials,
  ...otherKnowledgeMaterials,
  ...fabricMaterials,
  ...pcfMaterials,
  ...pluginMaterials,
  ...azurefunctionMaterials,
};