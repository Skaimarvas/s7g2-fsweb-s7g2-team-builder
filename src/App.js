import React from "react";
import "./App.css";
import Header from "./Layout/Header";
import TeamCard from "./Pages/TeamCard";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";

import Members from "./components/Members";

function App() {
  const [teamlist, setTeamlist] = useState([]);
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" exact>
          {teamlist?.map((member, index) => (
            <Members key={index} list={member} />
          ))}
        </Route>
        <Route path="/createform/" exact>
          <TeamCard teamlistdizi={teamlist} setTeamlist={setTeamlist} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
