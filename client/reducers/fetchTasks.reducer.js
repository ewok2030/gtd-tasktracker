import {FETCH_TASKS, FETCH_TASKS_ERROR} from '../actions/actions.types';

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
        default:
            return state
    }
};

export default fetchTasks;
