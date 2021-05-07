import React from "react";

const Header = ({ titulo }) => {
  return (
    <nav className="nav ">
      <h1>{titulo}</h1>
    </nav>
  );
};

export default Header;
