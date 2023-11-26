import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap";
import { nanoid } from "nanoid";
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
      <Form className="formclass" onSubmit={handleSubmit}>
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
          <Form.Select
            className="option"
            value={rol}
            defaultValue="..."
            onChange={(e) =>
              setNewMember({ ...newMember, rol: e.target.value })
            }
          >
            <option value="...">...</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Data Analist">Data Analist</option>
          </Form.Select>
        </Form.Group>
        <button className="btn btn-primary" type="submit">
          Kaydet
        </button>
      </Form>
    </div>
  );
};

export default TeamCard;
