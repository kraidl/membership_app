import React, { useEffect, useState } from "react";
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import Members from "./Members";
import Teams from "./Teams";
import ToDoList from "./ToDoList";

export default function App() {
  const [hotel, setHotel] = useState(undefined);
  const MEMBERS = "members";
  const TEAMS = "teams";
  const TO_DO_LIST = "todolist";
  const [activeTab, setActiveTab] = useState(MEMBERS);
  const activeTabCSS = "border-b-4 text-white border-purple-800";

  useEffect(() => {
    // getHotel().then((data) => {
    //   setHotel(data);
    // });
  }, []);

  return (
    <HashRouter>
      <button className={`${activeTab === MEMBERS ? activeTabCSS : ""}`}>
        <NavLink onClick={() => setActiveTab(MEMBERS)} to="/">
          MEMBERS
        </NavLink>
      </button>
      <button className={`${activeTab === TEAMS ? activeTabCSS : ""}`}>
        <NavLink onClick={() => setActiveTab(TEAMS)} to={`/${TEAMS}`}>
          TEAMS
        </NavLink>
      </button>
      <button className={`${activeTab === TO_DO_LIST ? activeTabCSS : ""}`}>
        <NavLink onClick={() => setActiveTab(TO_DO_LIST)} to={`/${TO_DO_LIST}`}>
          TO-DO LIST
        </NavLink>
      </button>
      <Routes>
        <Route exact path="/" element={<Members text={hotel?.description} />} />
        <Route path={`/${TEAMS}`} element={<Teams items={hotel?.details} />} />
        <Route
          path={`/${TO_DO_LIST}`}
          element={<ToDoList info={hotel?.location} images={hotel?.media} />}
        />
      </Routes>
    </HashRouter>
  );
}
