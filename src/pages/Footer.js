import React from 'react';

function Footer() {
  /*const ref = useRef(null);

  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      ref.current.style.display = 'block';
    } else {
      ref.current.style.display = 'none';
    }
  }*/
  const Top = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <footer>
      <button onClick={Top} id="TopBtn">
        <i className="bi bi-arrow-up-short" />
      </button>
      <div className="FooterSection">
        <h4 className="FooterTitle">PantryPal</h4>
        <ul className="FooterNav">
          <li>
            <div className="DropDown">
              <button className="FooterBtn">Home</button>
              <div className="DropDownContent">
                <a href="/#About">About</a>
                <br />
                <a href="/#Contact">Contact</a>
              </div>
            </div>
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
            <a href="/Signup">SignUp</a>
          </li>
          <li>
            <a href="/Terms">Terms & Conditions</a>
          </li>
        </ul>
        <hr />
        <p>
          By accessing and using this web app, you agree to be bound by our
          Terms & Conditions, Privacy Policy, Cookie Policy, and Content
          Policies. All trademarks, logos, and names are the property of their
          respective owners. This web app is provided on an "as is" and "as
          available" basis, without any warranties or representations, and we
          shall not be liable for any damages arising out of or in connection
          with your use of the app. © 2023 PantryPal™. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
