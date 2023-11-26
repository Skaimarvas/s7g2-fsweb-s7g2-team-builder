import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const TeamCard = ({
  teamlistdizi,
  setTeamlist,
  duzenlenecekuye,
  uyeDuzenle,
  setDuzenlenecekuye,
}) => {
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    rol: "",
  });

  const { name, email, rol } = newMember;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTeamMember = { name, email, rol };

    if (duzenlenecekuye) {
      uyeDuzenle(newTeamMember);
      setNewMember({
        name: "",
        email: "",
        rol: "",
      });
      setDuzenlenecekuye("");
    } else {
      setTeamlist([...teamlistdizi, newTeamMember]);
      setNewMember({
        name: "",
        email: "",
        rol: "",
      });
    }
    // Submit edildikten sonra form sıfırlanıyor
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setNewMember({
      ...newMember,
      [name]: value,
    });
  };

  useEffect(() => {
    duzenlenecekuye && setNewMember(duzenlenecekuye);
    console.log("Düzenlenecek Uye ", duzenlenecekuye);
  }, [duzenlenecekuye]);

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">İsim Soyisim</Form.Label>
          <Form.Control
            id="name"
            name="name"
            type="text"
            value={newMember.name}
            onChange={inputChangeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            id="email"
            name="email"
            type="email"
            value={newMember.email}
            onChange={inputChangeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="rol">Rol</Form.Label>
          <Form.Control
            id="rol"
            name="rol"
            type="text"
            value={newMember.rol}
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
