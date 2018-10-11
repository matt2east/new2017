import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
          <Link className="text-white"to="/about">
            About
          </Link>{' '}
      Copyright &copy; {new Date().getFullYear()} Matthew Myers
    </footer>
  );
};
