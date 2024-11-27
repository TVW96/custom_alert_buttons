import React from 'react';
import AlertButton from './AlertButton';
import PropTypes from 'prop-types';

function Toolbar({ message, children }) {

    const buttons = [
        { id: 1, message: "Downloading!", children: "File MP3" },
        { id: 2, message: "Sharing!", children: "Document PDF" },
        { id: 3, message: "Downloading!", children: "File MP4" },
        { id: 3, message: "Sharing!", children: "Document DocX" },
    ];

    return (
        <div>
            <h1>Toolbar component renders 2 AlertButton components with different messages and children.</h1>
            {buttons.map(props => (
                props.message.includes("Downloading") && (
                    < div className='downloading' >
                        <h4>Downloads:</h4>
                        <AlertButton key={props.id} message={props.message}>

                            {props.children}
                        </AlertButton>
                    </div>
                )
            ))}
            {buttons.map(props => (
                props.message.includes("Sharing") && (
                    <div className='sharing'>
                        <h4>Shares:</h4>
                        <AlertButton key={props.id} message={props.message}>

                            {props.children}

                        </AlertButton>
                    </div>
                )
            ))}
        </div >
    );
}

Toolbar.propTypes = {
    message: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

export default Toolbar;