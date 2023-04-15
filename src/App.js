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

  const [memberList, setMemberList] = useState([]);
  const [teamList, setTeamList] = useState([]);
  const [teamDetails, setTeamDetails] = useState({});
  const [activeTab, setActiveTab] = useState(members);
  const [showDetails, toggleShowDetails] = useState(false);
  const [currentTeamId, setCurrentTeamId] = useState(null);
  const [toDoListItems, setToDoListItems] = useState([]);

  const activeTabCSS = "activeTabCSS";
  const inactiveTabCSS = "inactiveTabCSS";

  const changeTab = (tab) => {
    setActiveTab(tab);
    toggleShowDetails(false);
  };

  useEffect(() => {
    getMembers().then((data) => {
      setMemberList(data.members);

      let newTeamDetails = {};
      data.members.forEach((member) => {
        if (newTeamDetails[member.team.id])
          newTeamDetails[member.team.id].members.push(
            member.first_name + " " + member.last_name
          );
        else
          newTeamDetails = Object.assign(newTeamDetails, {
            [member.team.id]: {
              name: member.team.name,
              members: [member.first_name + " " + member.last_name],
            },
          });
      });
      setTeamDetails(newTeamDetails);
    });

    getTeams().then((data) => {
      setTeamList(data.teams);
    });
  }, []);

  return (
    <HashRouter>
      <button className={activeTab === members ? activeTabCSS : inactiveTabCSS}>
        <NavLink onClick={() => changeTab(members)} to="/">
          MEMBERS
        </NavLink>
      </button>
      <button className={activeTab === teams ? activeTabCSS : inactiveTabCSS}>
        <NavLink onClick={() => changeTab(teams)} to={`/${teams}`}>
          TEAMS
        </NavLink>
      </button>
      <button
        className={activeTab === toDoList ? activeTabCSS : inactiveTabCSS}
      >
        <NavLink onClick={() => changeTab(toDoList)} to={`/${toDoList}`}>
          TO-DO LIST
        </NavLink>
      </button>
      <Routes>
        <Route
          exact
          path="/"
          element={
            showDetails ? (
              <TeamDetails team={teamDetails[currentTeamId]} />
            ) : (
              <Members
                members={memberList}
                toggleTeamDetails={(teamId) => {
                  setCurrentTeamId(teamId);
                  toggleShowDetails(true);
                }}
              />
            )
          }
        />
        <Route path={`/${teams}`} element={<Teams teams={teamList} />} />
        <Route
          path={`/${toDoList}`}
          element={
            <ToDoList
              items={toDoListItems}
              setItems={(items) => setToDoListItems(items)}
            />
          }
        />
      </Routes>
    </HashRouter>
  );
}
