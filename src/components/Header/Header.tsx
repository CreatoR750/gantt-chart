import { FC, useEffect, useState } from "react";
import "./header.scss";
import download from "../../assets/svg/download.svg";
import { getProjectInfo } from "../../redux/projectSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../redux/store";

const Header:FC = () => {
    const dispatch = useAppDispatch();
    const { info } = useAppSelector((state: RootState) => state.project);

    useEffect(() => {
        dispatch(getProjectInfo());
    }, []);


    return (
        <header className="container">
            <div className="header">
                <h1>
                    {info.project} / {info && info.period.split("-")[0]} - {info.period.split("-")[1]}
                </h1>
                <button className="header__button">
                    <img src={download} />
                    Export
                </button>
            </div>
        </header>
    );
};

export default Header;
