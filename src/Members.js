import React from "react";

export default function Members({ members, toggleTeamDetails }) {
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
              <td>
                <button onClick={() => toggleTeamDetails(member.team.id)}>
                  {member.team.name}
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
