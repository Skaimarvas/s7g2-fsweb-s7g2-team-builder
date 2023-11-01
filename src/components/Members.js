import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Members = ({ list }) => {
  console.log("Props", list);
  console.log("Deneme");
  return (
    <Card style={{ width: "90%", margin: "0 auto" }}>
      <Card.Body>
        <Card.Title>
          <h3> {list.name} </h3>{" "}
        </Card.Title>
        <Card.Text>
          {" "}
          <p> {list.email}</p>{" "}
        </Card.Text>
        <Card.Text>
          {" "}
          <p> {list.rol}</p>{" "}
        </Card.Text>
        <Button variant="primary">Güncelle</Button>
      </Card.Body>
    </Card>
  );
};

export default Members;
