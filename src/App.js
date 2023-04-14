import React, { useEffect, useState } from "react";
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import { getMembers } from "./services/requests";
import { getTeams } from "./services/requests";
import Members from "./Members";
import Teams from "./Teams";
import ToDoList from "./ToDoList";
import TeamDetails from "./TeamDetails";

export default function App() {
  const members = "members";
  const teams = "teams";
  const toDoList = "todolist";
  const teamDetails = "teamdetails";

  const [memberList, setMemberList] = useState([]);
  const [teamList, setTeamList] = useState([]);
  const [teamDetailList, setTeamDetailList] = useState({});
  const [activeTab, setActiveTab] = useState(members);

  const activeTabCSS = "activeTabCSS";
  const inactiveTabCSS = "inactiveTabCSS";

  useEffect(() => {
    getMembers().then((data) => {
      setMemberList(data.members);

      let newTeamDetails = {};
      data.members.forEach((member) => {
        if (newTeamDetails[member.team.id])
          newTeamDetails[member.team.id].push(
            member.first_name + " " + member.last_name
          );
        else
          newTeamDetails = Object.assign(newTeamDetails, {
            [member.team.id]: [member.first_name + " " + member.last_name],
          });
      });
      setTeamDetailList(newTeamDetails);
    });

    getTeams().then((data) => {
      setTeamList(data.teams);
    });
  }, []);

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
        <Route exact path="/" element={<Members members={memberList} />} />
        <Route path={`/${teams}`} element={<Teams teams={teamList} />} />
        <Route path={`/${toDoList}`} element={<ToDoList />} />
        <Route
          path={`/${teamDetails}`}
          element={<TeamDetails teamDetails={teamDetailList} />}
        />
      </Routes>
    </HashRouter>
  );
}
