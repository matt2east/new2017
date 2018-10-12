import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center footer">
          {/* <Link className="text-white"to="/about">
            About This Project
          </Link> */}
      <div>Copyright &copy; {new Date().getFullYear()} Matthew Myers</div>
    </footer>
  );
};
