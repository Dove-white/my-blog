import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <ul className="flex gap-2 text-blue-900">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/message">Completed</Link>
      </li>
      <li>
        <Link to="/contact">Not Completed</Link>
      </li>
    </ul>
  );
};
