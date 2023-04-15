import React from "react";

export default function TeamDetails({ team }) {
  return (
    <React.Fragment>
      <div>{team.name}</div>
      <ul>
        {team.members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}
