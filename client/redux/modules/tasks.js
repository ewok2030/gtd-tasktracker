import axios from 'axios';

// Action types
const GET_TASK = 'gtd/tasks/GET_TASK';
const GET_TASK_ERROR = 'gtd/tasks/GET_TASK_ERROR';
const UPDATE_TASK = 'gtd/tasks/UPDATE_TASK';
const UPDATE_TASK_ERROR = 'gtd/tasks/UPDATE_TASK_ERROR';
const FETCH_TASKS = 'gtd/tasks/FETCH_TASKS';
const FETCH_TASKS_ERROR = 'gtd/tasks/FETCH_TASKS_ERROR';


// Initial state
const initialState = {
  active: null,
  data: [],
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_TASK:
      return {
        ...state,
        active: action.data,
      };
    case GET_TASK_ERROR:
      return {
        ...state,
        active: null,
        error: action.error,
      };
    case FETCH_TASKS:
      return {
        ...state,
        data: action.data,
      };
    case FETCH_TASKS_ERROR:
      return {
        ...state,
        data: null,
        error: action.error,
      };
    case UPDATE_TASK: {
      // If the updated task is in the state, update it
      const oldTaskIndex = state.data.findIndex(t => t._id === action.data._id);
      if (oldTaskIndex !== -1) {
        const tasks = state.data.slice();
        tasks[oldTaskIndex] = action.data;
        return {
          ...state,
          data: tasks,
        };
      }
      return state;
    }
    default:
      return state;
  }
}

// Action Creators
export const getTask = id => (dispatch) => {
  axios.get(`/api/tasks/${id}`).then((response) => {
    dispatch({ type: GET_TASK, data: response.data });
  }).catch((response) => {
    dispatch({ type: GET_TASK_ERROR, error: response.data });
  });
};

export const updateTask = (id, newProps) => (dispatch) => {
  axios.put(`/api/tasks/${id}`, { ...newProps, lastUpdated: new Date() }).then((response) => {
    dispatch({ type: UPDATE_TASK, data: response.data });
  }).catch((response) => {
    dispatch({ type: UPDATE_TASK_ERROR, error: response.data });
  });
};

export function fetchTasks() {
  return (dispatch) => {
    axios.get('/api/tasks').then((response) => {
      dispatch({ type: FETCH_TASKS, data: response.data });
    }).catch((response) => {
      dispatch({ type: FETCH_TASKS_ERROR, error: response.data });
    });
  };
}
