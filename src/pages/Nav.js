import React, {useEffect, useRef, useState} from 'react';

const darkModeEnabled = localStorage.getItem('darkModeEnabled');
const body = document.body;
const NavBar = () => {
  const navStyle = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (darkModeEnabled === 'true') {
      body.classList.add('DarkMode');
    } else {
      body.classList.remove('DarkMode');
    }

    window.onscroll = function () {
      scrollFunction();
    };

    const scrollFunction = () => {
      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        navStyle.current.style.backgroundColor = '#ff5757';
        navStyle.current.style.position = 'fixed';
      } else {
        navStyle.current.style.backgroundColor = 'transparent';
        navStyle.current.style.position = 'absolute';
      }
    };
  }, []);
  const darkMode = () => {
    body.classList.toggle('DarkMode');
    if (darkModeEnabled === 'true') {
      localStorage.setItem('darkModeEnabled', 'false');
    } else {
      localStorage.setItem('darkModeEnabled', 'true');
    }
  };
  const Logout = () => {
    localStorage.removeItem('token');
    //window.location.href = "/";
  };
  const menuDropdown = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div ref={navStyle} id="NavBar">
      <a href="/" className="Logo">
        <h6>PantryPal</h6>
      </a>
      <ul className="Menu">
        <li>
          <a href="/Recipes">Recipes</a>
        </li>
        <li>
          <a href="/ShoppingList">Shopping List</a>
        </li>
        <li>
          <a href="/Login">Login</a>
        </li>
      </ul>
      <a href="#/">
        <button onClick={menuDropdown}>
          <i className="bi bi-list"></i>
        </button>
      </a>
      <div
        className={isVisible ? 'menuDropdown show' : 'menuDropdown'}
        id="menuDropdown"
      >
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Recipes">Recipes</a>
          </li>
          <li>
            <a href="/ShoppingList">Shopping List</a>
          </li>
          <li>
            <a href="/Login">Login</a>
          </li>
          <li>
            <a href="/" onClick={Logout}>
              Logout
            </a>
          </li>
          <li>
            <a href="/Signup">Signup</a>
          </li>
          <li>
            <a href="/Terms">Terms & Conditions</a>
          </li>
          <li>
            <a href="#/" onClick={darkMode}>
              <i id="DModeIcon" className="bi bi-circle-half" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
