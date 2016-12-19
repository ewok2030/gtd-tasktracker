import { EDIT_TASK } from './actions.types';

export const editTask = (id, prop) => {
  return {
    type: EDIT_TASK,
    data: {
      _id: id,
      ...prop,
    },
  };
};
