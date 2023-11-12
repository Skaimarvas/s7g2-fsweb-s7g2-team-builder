import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand>Takım Üyeleri</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
