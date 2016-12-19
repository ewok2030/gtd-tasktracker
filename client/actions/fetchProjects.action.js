import axios from 'axios';
import { FETCH_PROJECTS, FETCH_PROJECTS_ERROR } from './actions.types';

export default function fetchProjects() {
  return (dispatch) => {
    axios.get('/api/projects').then((response) => {
      if (!Object.prototype.hasOwnProperty.call(response.data, 'value') && response.data.data instanceof Array) {
        response.data.value = response.data.data.length.toString();
      }
      dispatch({ type: FETCH_PROJECTS, data: response.data });
    }).catch((response) => {
      dispatch({ type: FETCH_PROJECTS_ERROR, error: response.data });
    });
  };
}
