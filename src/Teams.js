import React, { useEffect, useState } from "react";
import { getTeams } from "./services/requests";

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams().then((data) => {
      setTeams(data.teams);
    });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Team Name</th>
          <th>Member Count</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team) => {
          return (
            <tr key={team.id}>
              <td>{team.name}</td>
              <td>{team.member_count}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
