import React from "react";

export default function Teams({ teams }) {
  return (
    <table className="center">
      <thead>
        <tr>
          <th>Team</th>
          <th>Member Count</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team) => (
          <tr key={team.id}>
            <td>{team.name}</td>
            <td>{team.member_count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
