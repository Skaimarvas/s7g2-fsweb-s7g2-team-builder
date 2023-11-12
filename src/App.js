import React, { useEffect } from "react";
import "./App.css";
import Header from "./Layout/Header";
import TeamCard from "./Pages/TeamCard";
import { useState } from "react";

import Members from "./components/Members";

function App() {
  const [teamlist, setTeamlist] = useState([]);
  const [duzenlenecekuye, setDuzenlenecekuye] = useState();

  const uyeDuzenle = (duzenlenecekuye) => {
    const updatedMember = teamlist.map((member) =>
      member.email === duzenlenecekuye.email ? duzenlenecekuye : member
    );
    setTeamlist(updatedMember);
  };

  return (
    <div className="App">
      <Header />
      <TeamCard
        teamlistdizi={teamlist}
        setTeamlist={setTeamlist}
        duzenlenecekuye={duzenlenecekuye}
        uyeDuzenle={uyeDuzenle}
      />

      <h1> Takım Üyeleri</h1>
      {teamlist?.map((member, index) => (
        <Members
          key={index}
          member={member}
          duzenlenecekuye={duzenlenecekuye}
          setDuzenlenecekuye={setDuzenlenecekuye}
        />
      ))}
    </div>
  );
}

export default App;
