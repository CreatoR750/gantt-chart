import { createSlice } from "@reduxjs/toolkit";
import { recurseAdd } from "../helpers/recurseAdd";
import { ITask } from "../models/task";
import DataService from "../services/data.service";
import { AppDispatch } from "./store";

interface ITasksSlice {
    tasksList: ITask[];
    displayedLevels: number;
    error: string | null;
}

const initial: ITasksSlice = {
    tasksList: [],
    displayedLevels: 1,
    error: null,
};

const slice = createSlice({
    name: "tasks",
    initialState: initial,
    reducers: {
        getTasksListSuccess: (state, action) => {
            state.tasksList = action.payload;
            state.error = null;
        },
        getTasksListError: (state, action) => {
            state.error = action.payload;
        },
        updateDisplayedLevels: (state, action) => {
            state.displayedLevels = action.payload;
        },
    },
});

export default slice.reducer;

const { getTasksListError, getTasksListSuccess, updateDisplayedLevels } = slice.actions;

export const getTasksList = () => async (dispatch: AppDispatch) => {
    try {
        const response = await DataService.getTasks();
        let tasksArray = [];
        tasksArray.push({
            id: response.id,
            title: response.title,
            period_start: response.period_start,
            period_end: response.period_end,
            level: 1,
            sub: response.sub.length,
        });
        if (response.sub) recurseAdd(tasksArray, response.sub, 2);
        dispatch(getTasksListSuccess(tasksArray));
    } catch (error) {
        dispatch(getTasksListError((error as Error).message));
    }
};

export const updateLevels = (level: number) => (dispatch: AppDispatch) => {
    dispatch(updateDisplayedLevels(level));
};


