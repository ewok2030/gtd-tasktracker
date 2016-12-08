import axios from "axios";
import {FETCH_TASKS, FETCH_TASKS_ERROR} from "./actions.types";

export const fetchTasks = () => {
    return function(dispatch) {
        axios.get("/api/tasks").then((response) => {
            if (!response.data.hasOwnProperty("value") && response.data.data instanceof Array) {
                response.data.value = response.data.data.length.toString();
            }
            dispatch({type: FETCH_TASKS, data: response.data});
        }).catch((response) => {
            dispatch({type: FETCH_TASKS_ERROR, error: response.data});
        })
    };
};
