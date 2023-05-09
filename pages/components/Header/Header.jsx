import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import medaversity from "../../assets/images/medaversitylogo-47.png";
import SearchIcon from "../../assets/images/search.png";
import "./style.scss";
// import SpclIcon from "../../assets/images/spcl.png"
// import CariierIcon from "..././assets/images/carrier.png"
import { App_Text } from "../../language/English";
import SignUpApp from "@/pages/SignUP/SignUpApp";
import LoginApp from "@/pages/Login/LoginApp";

function Header() {
  return (
    <Navbar expand="lg" className="header-bg fixed-top">
      <Container className="headContainer">
        <Navbar.Brand href="#home">
          <Image
            src={medaversity}
            alt="Picture of the author"
            width={110}
            height={30}
            style={{ borderRadius: "30px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto headContent">
            <NavDropdown
              title={App_Text["HEADER_TEXT"]["HEADER_LINKS"][0].linkName}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                {App_Text["HEADER_TEXT"]["HEADER_SPCL_LINKS"][0]}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className="ms-lg-3">
              {App_Text["HEADER_TEXT"]["HEADER_LINKS"][1].linkName}
            </Nav.Link>
          </Nav>
          <Nav.Link href="#link">
            <div className="nav-right">
              <div className="search-bg me-3">
                <Image
                  src={SearchIcon}
                  alt="Picture of the author"
                  className="img-fluid  mt-0 searchIcon"
                />
              </div>

              <SignUpApp />

              <LoginApp />
            </div>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
