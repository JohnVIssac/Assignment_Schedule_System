import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserhItem = ({ userh: { cname, batch, studno } }) => {
  return (
    <div className="profile bg-light">
      <div>
        <h2>{cname}</h2>
        <p>{batch}</p>
        <p>{studno}</p>
      </div>
    </div>
  );
};

UserhItem.propTypes = {
  userh: PropTypes.object.isRequired
};

export default UserhItem;
