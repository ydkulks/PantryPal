const darkMode = () => {
  const body = document.body;
  body.classList.toggle('DarkMode');
};

function NavBar() {
  return (
    <div>
      <nav className="NavBar">
        <ul className="NavList">
          <li>
            <a className="NavBtn" href="#Home">
              Home
            </a>
          </li>
          <li>
            <a className="NavBtn" href="#About">
              About
            </a>
          </li>
          <li>
            <a className="NavBtn" href="#recipes">
              Recipes
            </a>
          </li>
          <li>
            <a className="NavBtn" href="#Contact">
              Contact
            </a>
          </li>
          <li>
            <a className="NavBtn" href="#signup">
              Sign up
            </a>
          </li>
          <li>
            <a className="NavDModeBtn" onClick={darkMode}>
              <i id="DModeIcon" className="bi bi-circle-half"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
