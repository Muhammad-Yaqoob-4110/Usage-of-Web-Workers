import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    
    <div className="navbar bg-base-100">
      <NavLink to="/without-webworker" className="btn btn-ghost text-xl">WithOut WebWorker</NavLink>
      <NavLink to="/with-webworker" className="btn btn-ghost text-xl">With WebWorker</NavLink>
    </div>
  );
};

export default Navbar;
