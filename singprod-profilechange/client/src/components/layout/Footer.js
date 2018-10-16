import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center footer">
      <Link className="nav-link text-white" to="/about">
        {" "}
        About Vox:Mix
      </Link>{" "}
      {/* Copyright &copy; {new Date().getFullYear()} Matthew Myers */}
    </footer>
  );
};
