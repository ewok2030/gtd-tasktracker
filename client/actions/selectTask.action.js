import {SELECT_TASK} from "./actions.types";

export const selectTask = (taskId) => {
    return {
        type: SELECT_TASK,
        data: {
            taskId: taskId
        }
    }
}
