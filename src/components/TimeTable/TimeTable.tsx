import { FC, useEffect, useMemo, useState } from "react";
import { getDaysArr, getDaysDiff, getDaysInString, getStartDate, getWeeks, getWeeksDiff } from "../../helpers/dateFunctions";
import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../redux/store";
import { borderColors, levelColors } from "../../const/levelColors";
import "./timeTable.scss";
import TaskBar from "../TaskBar/TaskBar";

const TimeTable:FC = () => {
    const { tasksList, displayedLevels } = useAppSelector((state: RootState) => state.tasks);
    const [weeksArr, setWeeksArr] = useState<any[]>([]);
    const [daysArr, setDaysArr] = useState<number[]>([]);
    const [daysStringArr, setDaysStringArr] = useState<string[]>([]);

    //Get weeks and days number
    useEffect(() => {
        if (tasksList.length > 0) {
            const startDate = getStartDate(new Date(`${tasksList[0].period_start}`));
            const weeks = getWeeks(new Date(startDate), new Date("2022-12-31"));
            const days = getDaysArr(new Date(startDate), new Date("2022-12-31"));
            const stringDays = getDaysInString(new Date(startDate), new Date("2022-12-31"));
            setWeeksArr(weeks);
            setDaysArr(days);
            setDaysStringArr(stringDays);
        }
    }, [tasksList]);

    const displayTasks = () => {
        return tasksList.map((task, index) => {
            if (task.level <= displayedLevels) {
                return (
                    <div
                        key={`task.id${index}`}
                        style={{ gridTemplateColumns: `repeat(${daysArr.length}, 22px)` }}
                        className="time-table__days-container"
                    >
                        {daysStringArr.map((dayString) => {
                            if (dayString === task.period_start) {
                                return (
                                    <TaskBar key={task.id} start={task.period_start} end={task.period_end} title={task.title} level={task.level} />
                                );
                            } else {
                                return <div className="time-table__row"></div>;
                            }
                        })}
                    </div>
                );
            } else {
                return (
                    <div style={{ gridTemplateColumns: `repeat(${daysArr.length}, 22px)` }} className="time-table__days-container">
                        {daysArr.length &&
                            daysArr.map(() => {
                                return <div className="time-table__row"></div>;
                            })}
                    </div>
                );
            }
        });
    };

    return (
        <div className="time-table">
            <div style={{ gridTemplateColumns: `repeat(${weeksArr.length}, 154px)` }} className="time-table__weeks-container">
                {weeksArr.length > 0 &&
                    weeksArr.map((week: { firstDay: string; lastDay: string }) => {
                        return <div key={week.firstDay} className="time-table__week">{`${week.firstDay} - ${week.lastDay}`}</div>;
                    })}
            </div>
            <div style={{ gridTemplateColumns: `repeat(${daysArr.length}, 22px)` }} className="time-table__days-container">
                {daysArr.length > 0 &&
                    daysArr.map((number: number, index) => {
                        return (
                            <div key={`${number}${index}`} className="time-table__day">
                                {number}
                            </div>
                        );
                    })}
            </div>
            <div style={{ gridTemplateColumns: `repeat(${daysArr.length}, 22px)` }} className="time-table__days-container">
                {daysArr.length > 0 &&
                    daysArr.map((number, index) => {
                        return <div key={`${index}${number}`} className="time-table__row"></div>;
                    })}
            </div>
            {tasksList && displayTasks()}
            <div style={{ gridTemplateColumns: `repeat(${daysArr.length}, 22px)` }} className="time-table__empty-container">
                {daysArr.length > 0 &&
                    daysArr.map(() => {
                        return <div className="time-table__column"></div>;
                    })}
            </div>
        </div>
    );
};

export default TimeTable;
