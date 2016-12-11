import {SELECT_TASK, FETCH_TASKS, UPDATE_TASK} from "../actions/actions.types"

const initialState = {
    data: null
}

const activeTask = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_TASK:
            return {
                ...state,
                data: action.data
            };
        case FETCH_TASKS:
            if (state.data == null && action.data.length > 0) {
                return {
                    ...state,
                    // If tasks have been fetched, make the first one active by default!
                    data: action.data[0]
                }
            }
        case UPDATE_TASK:
            if (state.data != null && state.data._id === action.data._id) {
                return {
                    ...state,
                    // If the active task has been updated...
                    data: action.data
                }
            }
        default:
            return state
    }
};

export default activeTask
