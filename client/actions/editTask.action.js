import { EDIT_TASK } from './actions.types';

export default function editTask(id, prop) {
  return {
    type: EDIT_TASK,
    data: {
      _id: id,
      ...prop,
    },
  };
}
