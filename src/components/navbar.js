import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <Link to="/" className="pages">
          Custom Counter
        </Link>
        <Link to="/CounterReducer" className="pages">
          useReducer Counter
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
