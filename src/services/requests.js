export async function getTeams() {
  const data = await fetch(
    `${process.env.PUBLIC_URL}/api/membership/teams.json`
  );
  return await data.json();
}

export async function getMembers() {
  const data = await fetch(
    `${process.env.PUBLIC_URL}/api/membership/members.json`
  );
  return await data.json();
}
