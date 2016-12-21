import axios from 'axios';
import { FETCH_PROJECTS, FETCH_PROJECTS_ERROR } from './actions.types';

export const fetchProjects = () => (dispatch) => {
  axios.get('/api/projects').then((response) => {
    dispatch({ type: FETCH_PROJECTS, data: response.data });
  }).catch((response) => {
    dispatch({ type: FETCH_PROJECTS_ERROR, error: response.data });
  });
};

export default fetchProjects;
