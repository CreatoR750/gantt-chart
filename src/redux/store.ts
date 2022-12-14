import { configureStore, combineReducers } from "@reduxjs/toolkit";
import tasks from "./tasksSlice";
import project from "./projectSlice";

const rootReducer = combineReducers({ tasks: tasks, project: project });

export const store = configureStore({ reducer: rootReducer });
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
