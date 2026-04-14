import { Nav, Navbar } from "react-bootstrap";
import isotipoAW from "../assets/isotipoAW.png";
import "../styles/headerComponent.css";

export default function HeaderComponent() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar id="header_Container" expand="md" variant="dark">
      <div id="navbar_Container">
        <Navbar.Brand href="#" className="logo_Container">
          <img src={isotipoAW} alt="Isotipo Agro World Argentina" width={"50px"} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="w-100">
          <Nav id="links_Container" className="ms-auto">
            <Nav.Link
              onClick={() => handleScroll("quienesSomos_Seccion")}
              className="navLinks"
            >
              ¿Quiénes Somos?
            </Nav.Link>

            <Nav.Link
              onClick={() => handleScroll("queOfrecemos_Seccion")}
              className="navLinks"
            >
              ¿Qué Ofrecemos?
            </Nav.Link>

            <Nav.Link
              onClick={() => handleScroll("comoFunciona_Seccion")}
              className="navLinks"
            >
              ¿Cómo funciona?
            </Nav.Link>

            <Nav.Link
              onClick={() => handleScroll("OLote_Seccion")}
              className="navLinks"
            >
              Ofrecé tu lote de porotos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
