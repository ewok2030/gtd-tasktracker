import {FETCH_TASKS, FETCH_TASKS_ERROR, UPDATE_TASK} from '../actions/actions.types';

const initialState = {
    data: []
};

const fetchTasks = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TASKS:
            return {
                ...state,
                data: action.data
            };
        case FETCH_TASKS_ERROR:
            return {
                ...state,
                error: action.message
            };
        case UPDATE_TASK:
            // If the updated task is in the state, update it
            const oldTaskIndex = state.data.findIndex(t => t._id == action.data._id);
            if (oldTaskIndex != -1) {
                const tasks = state.data.slice();
                tasks[oldTaskIndex] = action.data;
                return {
                    ...state,
                    data: tasks
                };
            }
        default:
            return state
    }
};

export default fetchTasks;
