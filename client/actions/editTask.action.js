import { EDIT_TASK } from './actions.types';

const editTask = (id, prop) => ({
  type: EDIT_TASK,
  data: {
    _id: id,
    ...prop,
  },
});

export default editTask;
