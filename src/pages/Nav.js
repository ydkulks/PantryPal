import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, {useEffect} from 'react';

const darkModeEnabled = localStorage.getItem('darkModeEnabled');
const body = document.body;
function BNavBar() {
  useEffect(() => {
    if (darkModeEnabled === 'true') {
      body.classList.add('DarkMode');
    } else {
      body.classList.remove('DarkMode');
    }
  }, []);
  const darkMode = () => {
    body.classList.toggle('DarkMode');
    if (darkModeEnabled === 'true') {
      localStorage.setItem('darkModeEnabled', 'false');
    } else {
      localStorage.setItem('darkModeEnabled', 'true');
      //window.location.href="/Login";
    }
  };
  const Logout = () => {
    localStorage.removeItem('token');
    window.location.href='/';
  }
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
            <Nav.Link className="NavBtn" href="/Recipes">
              Recipes
            </Nav.Link>
            <Nav.Link className="NavBtn" href="/ShoppingList">
              ShoppingList
            </Nav.Link>
            <Nav.Link className="NavBtn" href="/Login">
              Login
            </Nav.Link>
            <Nav.Link className="NavBtn" onClick={Logout}>
              Logout
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
