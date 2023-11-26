import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Members = ({ member, setDuzenlenecekuye }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            <h3> {member.name} </h3>{" "}
          </Card.Title>
          <Card.Text>
            {" "}
            <p> {member.email}</p>{" "}
          </Card.Text>
          <Card.Text>
            {" "}
            <p> {member.rol}</p>{" "}
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              setDuzenlenecekuye(member);
              console.log("Member Güncelle Butonu", member);
            }}
          >
            Güncelle
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Members;
