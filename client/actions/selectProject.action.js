import { SELECT_PROJECT } from './actions.types';

export default function selectProject(projectId) {
  return {
    type: SELECT_PROJECT,
    data: {
      projectId,
    },
  };
}
