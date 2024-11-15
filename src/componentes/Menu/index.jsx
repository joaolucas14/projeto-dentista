import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Menu.module.css";
import whatsapp from "./whatsapp.png";
import instagram from "./instagram.png";
import facebook from "./facebook.png";
import logo from "./logo.png";
import LinkPersonalizado from "../LinkPersonalizado/index.jsx";
function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" className={styles.menu}>
      <Container>
        <Navbar.Brand href="#">
          <div>
            <img src={logo} alt="Logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Páginas</Nav.Link>
            <Nav.Link href="#">Procedimentos</Nav.Link>
            <Nav.Link href="#">Sobre</Nav.Link>
            <Nav.Link href="#">Depoimentos</Nav.Link>
            <Nav.Link href="#">Contato</Nav.Link>
            <Nav.Link href="#">Mapa</Nav.Link>
          </Nav>
          <Nav>
            <div className={styles.contatos}>
              <LinkPersonalizado url={"#"}>
                21 99999-9999 <img src={whatsapp} alt="" />
              </LinkPersonalizado>
              <img className={styles.icone} src={instagram} alt="" />
              <img className={styles.icone} src={facebook} alt="" />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
