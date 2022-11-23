import { FC, useLayoutEffect, useState } from "react";
import { borderColors, levelColors } from "../../const/levelColors";
import { getDaysDiff } from "../../helpers/dateFunctions";

interface ITaskBarProps {
    start: string;
    end: string;
    title: string;
    level: number;
}
const TaskBar: FC<ITaskBarProps> = ({ start, end, title, level }) => {
    const [barWidth, setBarWidth] = useState<number>();

    useLayoutEffect(() => {
        setBarWidth(getDaysDiff(new Date(start), new Date(end)));
    }, []);

    return (
        <div className="time-table__row start">
            <div
                style={{
                    width: `calc(${barWidth} * 22px)`,
                    background: `${levelColors[level - 1]}`,
                    border: `1px solid ${borderColors[level - 1]}`,
                }}
                className="time-table__task"
            >
                <div
                    style={{
                        left: `calc(${barWidth} * 22px + 10px)`,
                    }}
                    className="time-table__task__title"
                >
                    {title}
                </div>
            </div>
        </div>
    );
};

export default TaskBar;
