import React, { useEffect, useState } from "react";
import { getMembers } from "./services/requests";

export default function Members() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getMembers().then((data) => {
      setMembers(data.members);
    });
  }, []);

  return <div></div>;
}
