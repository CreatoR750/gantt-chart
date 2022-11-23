import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header/Header";
import GanttChart from "./components/GanttChart/GanttChart";

function App() {
    return (
        <>
            <Header />
            <GanttChart />
        </>
    );
}

export default App;
