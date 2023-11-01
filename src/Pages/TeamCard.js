import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const TeamCard = ({ teamlistdizi, setTeamlist }) => {
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    rol: "",
  });

  const { name, email, rol } = newMember;
  console.log("TeamCard", teamlistdizi);
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("İsim Soyisim", name);
    console.log("Email", email);
    console.log("Rol", rol);

    console.log("handleTeamlist", teamlistdizi);

    const newTeamMember = { name, email, rol };
    console.log("handleTeamlist NewTeam", newTeamMember);

    setTeamlist([...teamlistdizi, newTeamMember]);
    setNewMember({
      name: "",
      email: "",
      rol: "",
    });
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setNewMember({
      ...newMember,
      [name]: value,
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">İsim Soyisim</Form.Label>
          <Form.Control
            id="name"
            name="name"
            type="text"
            value={teamlistdizi.name}
            onChange={inputChangeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            id="email"
            name="email"
            type="email"
            value={teamlistdizi.email}
            onChange={inputChangeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="rol">Rol</Form.Label>
          <Form.Control
            id="rol"
            name="rol"
            type="text"
            value={teamlistdizi.rol}
            onChange={inputChangeHandler}
          />
        </Form.Group>
        <button className="btn btn-primary" type="submit">
          Kaydet
        </button>
      </Form>
    </div>
  );
};

export default TeamCard;
