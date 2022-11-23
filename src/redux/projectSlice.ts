import { createSlice } from "@reduxjs/toolkit";
import DataService from "../services/data.service";
import { AppDispatch } from "./store";

const initial = {
    info: { project: "", period: "" },
};

const slice = createSlice({
    name: "project",
    initialState: initial,
    reducers: {
        getProjectInfoSuccess: (state, action) => {
            state.info = action.payload;
        },
    },
});

export default slice.reducer;

const { getProjectInfoSuccess } = slice.actions;

export const getProjectInfo = () => async (dispatch: AppDispatch) => {
    try {
        const response = await DataService.getInfo();
        dispatch(getProjectInfoSuccess(response));
    } catch (error) {
        console.log(error);
    }
};
