import React from 'react';
import PropTypes from "prop-types";

function AlertButton({ message, children }) {

    const handleClick = () => {
        console.log(typeof message);
        alert(message)
    }

    return (
        <div>
            <button onClick={handleClick}>
                {children}
            </button>
        </div>
    )
}

AlertButton.propTypes = {
    message: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
};

export default AlertButton