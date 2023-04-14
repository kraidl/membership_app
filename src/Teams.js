import React, { useEffect, useState } from "react";
import { getTeams } from "./services/requests";

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams().then((data) => {
      setTeams(data.teams);
    });
  }, []);

  return <div></div>;
}
