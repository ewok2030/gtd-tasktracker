import { SELECT_PROJECT } from './actions.types';

const selectProject = projectId => ({
  type: SELECT_PROJECT,
  data: {
    projectId,
  },
});

export default selectProject;
