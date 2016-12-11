import axios from "axios";
import {UPDATE_TASK, UPDATE_TASK_ERROR} from "./actions.types";

export const updateTask = (id, newProps) => {
    return function(dispatch) {
        axios.put('/api/tasks/' + id, newProps).then((response) => {
            dispatch({type: UPDATE_TASK, data: response.data});
        }).catch((response) => {
            dispatch({type: UPDATE_TASK_ERROR, error: response.data});
        })
    };
};
