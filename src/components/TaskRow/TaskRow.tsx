import { FC } from "react";
import chevron from "../../assets/svg/chevron.svg";
import "./taskRow.scss";
import { levelColors, borderColors } from "../../const/levelColors";

interface ITaskRowProps {
    id: number | null;
    title: string;
    level: number;
    sub?: number;
    displayedLevels: number;
    handleLevel: (level: number) => void;
}

const TaskRow: FC<ITaskRowProps> = ({ title, sub, level, handleLevel, displayedLevels }) => {
    return (
        <>
            {level <= displayedLevels && (
                <div style={{ paddingLeft: `${20 * level!}px` }} className="task-row">
                    {level !== 5 && <img className="task-row__chevron" src={chevron} alt="Chevron" onClick={() => handleLevel(level + 1)} />}
                    <div
                        style={{ background: levelColors[level - 1], border: `1px solid ${borderColors[level - 1]}` }}
                        className="task-row__circle"
                    ></div>
                    <span className="task-row__count">{sub}</span>
                    <span className="task-row__title">{title}</span>
                </div>
            )}
        </>
    );
};

export default TaskRow;
