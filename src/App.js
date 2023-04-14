import React, { useState } from "react";
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import Members from "./Members";
import Teams from "./Teams";
import ToDoList from "./ToDoList";

export default function App() {
  const members = "members";
  const teams = "teams";
  const toDoList = "todolist";
  const [activeTab, setActiveTab] = useState(members);
  const activeTabCSS = "activeTabCSS";
  const inactiveTabCSS = "inactiveTabCSS";

  return (
    <HashRouter>
      <button
        type="button"
        className={activeTab === toDoList ? activeTabCSS : inactiveTabCSS}
      >
        <NavLink onClick={() => setActiveTab(members)} to="/">
          MEMBERS
        </NavLink>
      </button>
      <button
        type="button"
        className={activeTab === toDoList ? activeTabCSS : inactiveTabCSS}
      >
        <NavLink onClick={() => setActiveTab(teams)} to={`/${teams}`}>
          TEAMS
        </NavLink>
      </button>
      <button
        type="button"
        className={activeTab === toDoList ? activeTabCSS : inactiveTabCSS}
      >
        <NavLink onClick={() => setActiveTab(toDoList)} to={`/${toDoList}`}>
          TO-DO LIST
        </NavLink>
      </button>
      <Routes>
        <Route exact path="/" element={<Members />} />
        <Route path={`/${teams}`} element={<Teams />} />
        <Route path={`/${toDoList}`} element={<ToDoList />} />
      </Routes>
    </HashRouter>
  );
}
