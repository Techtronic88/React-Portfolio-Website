import React from "react";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
  const style = {
    display: "inline-block",
    margin: 10,
    marginBottom: 30
  };

  const linkStyle = {
    textDecoration: "none"
  };

  return (
    <div>
      <div className="navBar">
        <h3 style={style}>
          <Link style={linkStyle} to="/">
            Home
          </Link>
        </h3>
        <h3 style={style}>
          <Link style={linkStyle} to="/jokes">
            Jokes
          </Link>
        </h3>
        <h3 style={style}>
          <Link style={linkStyle} to="/music-master">
            Star Sound
          </Link>
        </h3>
      </div>
      {children}
    </div>
  );
};

export default Header;
