import React from "react";

export default function Teams({ teams }) {
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
