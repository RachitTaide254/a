import React from 'react';
import PropTypes from 'prop-types';
import FaIcon from '../faIcons';

const Button = ({ text, icon, textColor, bgColor, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`justify-center text-${textColor} bg-${bgColor} hover:bg-${bgColor}-dark font-semibold py-2 px-2 gap-2 rounded flex items-center`}
        >
            {icon && <FaIcon icon={icon} className="mr-2" />}
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
};

export default Button;
