import axios from 'axios';
import { FETCH_TASKS, FETCH_TASKS_ERROR } from './actions.types';

const fetchTasks = () => (dispatch) => {
  axios.get('/api/tasks').then((response) => {
    dispatch({ type: FETCH_TASKS, data: response.data });
  }).catch((response) => {
    dispatch({ type: FETCH_TASKS_ERROR, error: response.data });
  });
};

export default fetchTasks;
