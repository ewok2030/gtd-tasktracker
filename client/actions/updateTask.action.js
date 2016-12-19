import axios from 'axios';
import { UPDATE_TASK, UPDATE_TASK_ERROR } from './actions.types';

export default function updateTask(id, newProps) {
  return (dispatch) => {
    axios.put(`/api/tasks/${id}`, { ...newProps, lastUpdated: new Date() }).then((response) => {
      dispatch({ type: UPDATE_TASK, data: response.data });
    }).catch((response) => {
      dispatch({ type: UPDATE_TASK_ERROR, error: response.data });
    });
  };
}
