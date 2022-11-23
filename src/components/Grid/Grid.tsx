import React, { FC } from "react";
import Tasks from "../Tasks/Tasks";
import "./grid.scss";

interface IGridProps {
    children?: React.ReactElement[] | React.ReactElement;
}

const Grid: FC<IGridProps> = ({ children }) => {
    return (
        <div className="container">
            <div className="grid-container">{children}</div>
        </div>
    );
};

export default Grid;
