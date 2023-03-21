import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const darkMode = () => {
  const body = document.body;
  body.classList.toggle('DarkMode');
};

function BNavBar() {
  return (
    <Navbar className="NavBar" expand="lg">
    <Container className="NavContainer">
        <Navbar.Brand>
    <a className="NavBrandA" href="/">
          <p className="NavBrand">Pantry Pal</p>
    </a>
        </Navbar.Brand>
        <Navbar.Toggle className="Toggle" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="NavBtn" href="/#Home">
              Home
            </Nav.Link>
            <Nav.Link className="NavBtn" href="/#About">
              About
            </Nav.Link>
            <Nav.Link className="NavBtn" href="/#Services">
              Services
            </Nav.Link>
            <Nav.Link className="NavBtn" href="/#Contact">
              Contact
            </Nav.Link>
            <Nav.Link className="NavBtn" href="/Signup">
              Signup
            </Nav.Link>
            <Nav.Link className="NavBtn" href="#" onClick={darkMode}>
              <i id="DModeIcon" className="bi bi-circle-half" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}

export default BNavBar;
