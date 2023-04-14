export async function getTeams() {
  const data = await fetch(`${process.env.PUBLIC_URL}/api/teams/index`);
  return await data.json();
}

export async function getMembers() {
  const data = await fetch(`${process.env.PUBLIC_URL}/api/teams/members`);
  return await data.json();
}
