import {
  FETCH_PROJECTS,
  FETCH_PROJECTS_ERROR
} from '../actions/actions.types';

const initialState = {
  data: []
};

const fetchProjects = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return {
        ...state,
        data: action.data
      };
    case FETCH_PROJECTS_ERROR:
      return {
        ...state,
        error: action.message
      };
    default:
      return state
  }
};

export default fetchProjects;
