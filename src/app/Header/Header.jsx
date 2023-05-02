import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from "next/image";
import medaversity from "../assets/images/medaversitylogo-47.png";
import SearchIcon from "../assets/images/search.png"
import "./style.scss";
import SpclIcon from "../assets/images/spcl.png"
import CariierIcon from "../assets/images/carrier.png"

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="headContainer">
        <Navbar.Brand href="#home"><Image
            src={medaversity}
            alt="Picture of the author"
            width={110}
            height={30}
            style={{borderRadius: "30px"}}
          /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto headContent">
            <NavDropdown title="Speciality" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Courses</Nav.Link>
          </Nav>
          <Nav.Link href="#link">
          <div>
            <Image
              src={SearchIcon}
              alt="Picture of the author"
              className="img-fluid me-3 mt-0 searchIcon"
              width={35}
            />
            <button type="button" className="signup">
              Sign up
            </button>
            <button type="button" className="login">
              Login
            </button>
          </div> 
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;