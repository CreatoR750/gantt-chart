import { FC, useEffect} from "react";
import "./tasks.scss";
import TaskRow from "../TaskRow/TaskRow";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../redux/store";
import { getTasksList, updateLevels } from "../../redux/tasksSlice";

const Tasks:FC = () => {
    const dispatch = useAppDispatch();
    const { tasksList, displayedLevels } = useAppSelector((state: RootState) => state.tasks);

    useEffect(() => {
        dispatch(getTasksList());
    }, []);

    const levelHandler = (level: number) => {
        if (level > displayedLevels) dispatch(updateLevels(level));
        else {
            dispatch(updateLevels(level - 1));
        }
    };

    return (
        <div className="tasks">
            <div className="tasks__header">Work item</div>
            <div className="tasks__empty-row"></div>
            {tasksList.length > 0
                ? tasksList.map((task) => {
                      return (
                          <TaskRow
                              key={task.id}
                              id={task.id}
                              title={task.title}
                              sub={task.sub!}
                              level={task.level}
                              displayedLevels={displayedLevels}
                              handleLevel={levelHandler}
                          />
                      );
                  })
                : null}
        </div>
    );
};

export default Tasks;
