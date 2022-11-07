import React from "react";
import { Link } from "react-router-dom";
const NotFound = (props) => {
  return (
    <div className="notfound">
      <h2>Sorry!</h2>
      <h1>
        <strong>404! </strong>
        {}Page Not Found
      </h1>
      <Link to="/">Go back to the CustomCounter</Link>
    </div>
  );
};
export default NotFound;
