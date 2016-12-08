import {SELECT_TASK, FETCH_TASKS} from "../actions/actions.types"

const initialState = {
    data: {
        id: ""
    }
}

const activeTask = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_TASK:
            return {
                ...state,
                data: { id: action.data.taskId }
            };
        case FETCH_TASKS:
            if (state.data.id === "" && action.data.length > 0) {
                return {
                    ...state,
                    // If tasks have been fetched, make the first one active by default!
                    data: {
                        id: action.data[0]._id
                    }
                }
            }
        default:
            return state
    }
};

export default activeTask
