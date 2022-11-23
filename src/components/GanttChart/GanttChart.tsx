import React, { FC } from "react";
import Grid from "../Grid/Grid";
import Tasks from "../Tasks/Tasks";
import TimeTable from "../TimeTable/TimeTable";

const GanttChart:FC = () => {
    return (
        <Grid>
            <Tasks />
            <TimeTable />
        </Grid>
    );
};

export default GanttChart;
