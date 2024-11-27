import { React, useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const incrementAfterDelay = () => {
        setTimeout(() => {
            setCount(prevCount => prevCount + 1);
        }, 2000);
    }
    const incrementTwice = () => {
        setCount(count + 1);
        setCount(count + 1);
    }
    const correctlyIncrementTwice = () => {
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>
                Increment
            </button>
            <button onClick={incrementAfterDelay}>
                Increment After Delay
            </button>
            <button onClick={incrementTwice}>
                (batching) Increment Twice
            </button>
            <button onClick={correctlyIncrementTwice}>
                Correctly Increment Twice
            </button>
        </div>
    )
}

export default Counter