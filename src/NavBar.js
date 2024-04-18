import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
    <p><Link to="/">Vending Machine</Link></p>
      <p><Link to="/oreo">Oreos</Link></p>
      <p><Link to="/chips">Chips</Link></p>
      <p><Link to="/cherryjuice">Cherry Juice</Link></p>

    </div>
  );
};

export default NavBar;
