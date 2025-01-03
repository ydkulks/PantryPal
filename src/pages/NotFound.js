import React from 'react';
import './style/Root/NotFound.css';
//import NF from '../assets/404.png';

const NotFound = () => {
  return (
    <div className="NFContainer">
      <div className="row">
        <div className="col-lg">
          <h2 className="NFTitle">
            404 <br />
            Page Not Found
          </h2>
        </div>
      </div>
      <div className="row">
        {/*<div className="col-lg">
          <img className="NFImg" src={NF} />
        </div>*/}
        <div>
          <p className="NFMessage">
    Oops! It looks like you are lost.
          </p>
          <br />
          <a className="FNLink" href="/">
            <button className="NFBtn">Go to Home page</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
