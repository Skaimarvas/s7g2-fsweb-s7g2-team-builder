import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">Takım Üyeleri</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink className="nav-link" to="/" exact>
            Ana Sayfa
          </NavLink>
          <NavLink className="nav-link" to="/createform/">
            Takım Üyesi Oluştur
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
