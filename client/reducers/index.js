import {combineReducers} from "redux";
import fetchTasks from './fetchTasks.reducer';
import activeTask from './activeTask.reducer';
import fetchProjects from './fetchProjects.reducer';

export default combineReducers({fetchTasks, activeTask, fetchProjects});
