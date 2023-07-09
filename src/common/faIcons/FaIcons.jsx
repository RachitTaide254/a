import React from 'react';
import PropTypes from 'prop-types';
import * as FaIcons from 'react-icons/fa';

const FaIcon = ({ icon }) => {
  const Icon = FaIcons[icon];
  return (
      <Icon />
  );
};

FaIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export { FaIcon };
