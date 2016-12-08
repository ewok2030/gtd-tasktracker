import {SELECT_PROJECT} from "./actions.types";

export const selectProject = (projectId) => {
    return {
        type: SELECT_PROJECT,
        data: {
            projectId: projectId
        }
    }
}
