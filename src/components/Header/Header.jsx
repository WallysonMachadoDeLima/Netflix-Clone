import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
          />
        </a>
      </div>
      <div className="header--user">
        <Link to="/">
          <img
            src="https://tudorondonia.com/uploads/30-05-22-kmsl0elnrpff1zr.jpg"
            alt="Usuário"
          />
        </Link>
      </div>
    </header>
  );
};
