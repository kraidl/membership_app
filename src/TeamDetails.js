import React from "react";

export default function TeamDetails({ team }) {
  return (
    <table className="center">
      <thead>
        <tr>
          <th>{team.name}</th>
        </tr>
      </thead>
      <tbody>
        {team.members.map((member, index) => (
          <tr key={index}>
            <td>{member}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
