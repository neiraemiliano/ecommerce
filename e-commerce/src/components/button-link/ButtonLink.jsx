import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = ({ label, path }) => {
  return (
    <button className="text-sm font-medium text-gray-700 hover:text-gray-800">
      <Link to={path}>{label}</Link>
    </button>
  );
};

export default ButtonLink;
