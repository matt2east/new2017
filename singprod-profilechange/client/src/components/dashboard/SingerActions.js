import React from 'react';
import { Link } from 'react-router-dom';

const SingerActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-singer" className="btn btn-light">
        <i className="fas fa-microphone text-info mr-1" /> Edit Singer
      </Link>
      {/* <Link to="/add-experience" className="btn btn-light">
        <i className="fab fa-black-tie text-info mr-1" />
        Add Experience
      </Link> */}
      {/* <Link to="/add-education" className="btn btn-light">
        <i className="fas fa-graduation-cap text-info mr-1" />
        Add Education */}
      {/* </Link> */}
    </div>
  );
};

export default SingerActions;