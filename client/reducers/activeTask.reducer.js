import {SELECT_TASK, FETCH_TASKS, UPDATE_TASK, EDIT_TASK} from "../actions/actions.types"

const initialState = {
    data: null,
    isEditing: false
}

const activeTask = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_TASK:
            return {
                ...state,
                data: action.data,
                isEditing: false
            };
        case FETCH_TASKS:
            if (state.data == null && action.data.length > 0) {
                return {
                    ...state,
                    // If tasks have been fetched, make the first one active by default!
                    data: action.data[0],
                    isEditing: false
                }
            }
        case UPDATE_TASK:
            if (state.data != null && state.data._id === action.data._id) {
                return {
                    ...state,
                    // If the active task has been updated...
                    data: action.data,
                    isEditing: false
                }
            }
        case EDIT_TASK:
            if (state.data != null && state.data._id === action.data._id) {
                return {
                    ...state,
                    data: {
                        ...state.data,
                        ...action.data
                    },
                    isEditing: true
                };
            }
        default:
            return state
    }
};

export default activeTask
