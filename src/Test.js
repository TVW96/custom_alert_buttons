import React from 'react';
import Counter from './Counter';
import ToggleVisibility from './ToggleVisibility';

function Test() {
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "white",
                color: "black"
            }}>
            <h4>testing toggle visiblity:</h4>
            <ToggleVisibility />
            <h2>Assignment: Create a Counter Component with State Management:</h2>
            <Counter />
        </div>
    )
}

export default Test