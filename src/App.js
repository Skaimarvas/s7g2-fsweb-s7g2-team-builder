import React, { useEffect } from "react";
import "./App.css";
import Header from "./Layout/Header";
import TeamCard from "./Pages/TeamCard";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";

import Members from "./components/Members";

function App() {
  const [teamlist, setTeamlist] = useState([]);
  const [duzenlenecekuye, setDuzenlenecekuye] = useState();

  const frontendDev = teamlist.filter(
    (front) => front.rol === "Frontend Developer"
  );
  const backendDev = teamlist.filter(
    (back) => back.rol === "Backend Developer"
  );
  const DataDev = teamlist.filter((data) => data.rol === "Data Analist");

  const uyeDuzenle = (duzen) => {
    const updatedMember = teamlist.map((member) =>
      member.id === duzen.id ? duzen : member
    );

    setTeamlist(updatedMember);
  };

  return (
    <div className="App">
      <Header />
      <div>
        <TeamCard
          teamlistdizi={teamlist}
          setTeamlist={setTeamlist}
          duzenlenecekuye={duzenlenecekuye}
          setDuzenlenecekuye={setDuzenlenecekuye}
          uyeDuzenle={uyeDuzenle}
        />
      </div>
      <h1> Frontend Developer</h1>
      <Row>
        {frontendDev?.map((member, index) => (
          <Members
            key={index}
            member={member}
            setDuzenlenecekuye={setDuzenlenecekuye}
          />
        ))}
      </Row>
      <div>
        <h1> Backend Developer</h1>
        <Row>
          {backendDev?.map((member, index) => (
            <Members
              key={index}
              member={member}
              setDuzenlenecekuye={setDuzenlenecekuye}
            />
          ))}
        </Row>
      </div>
      <div>
        <h1> Data Analist</h1>
        <Row>
          {DataDev?.map((member, index) => (
            <Members
              key={index}
              member={member}
              setDuzenlenecekuye={setDuzenlenecekuye}
            />
          ))}
        </Row>
      </div>
    </div>
  );
}

export default App;
