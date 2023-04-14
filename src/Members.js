import React from "react";

export default function Members({ members }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Member Name</th>
          <th>Team Name</th>
        </tr>
      </thead>
      <tbody>
        {members.map((member) => {
          return (
            <tr key={member.id}>
              <td>{`${member.first_name} ${member.last_name}`}</td>
              <td>{member.team.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
