import React, { useState, useEffect } from 'react';
import './Counter.css';

function Counterfunction() {
    const [count, setCount] = useState(0);
    const [increment, setIncrement] = useState(1);
    const [isDecrementMode, setIsDecrementMode] = useState(false);
    const [bgColor, setBgColor] = useState('white');
    const [showPopup, setShowPopup] = useState('');
  
    useEffect(() => {
      setShowPopup('Welcome to the counter Page');
    }, []);
  
    useEffect(() => {
      if (count === 10 || count === 100 || count === 1000) {
        setBgColor(count === 10 ? '#5F9EA0' : count === 100 ? '#7393B3' : '#088F8F');
        setShowPopup(`You've reached ${count}!`);
      }
    }, [count]);
  
    const handleButtonClick = () => {
      if (count < 1000) {
        setCount(count + increment);
        if (count + increment >= 10 && count + increment < 100) {
          setIncrement(10);
        } else if (count + increment >= 100 && count + increment < 1000) {
          setIncrement(100);
        }
      } else {
        setIsDecrementMode(true);
      }
    };
  
    const handleDecrementClick = () => {
        if (count > 0) {
            setCount(count - increment);
            if (count - increment <= 100 && count - increment > 10) {
              setIncrement(10);
            } else if (count - increment <= 10 && count - increment > 0) {
              setIncrement(1);
            }
            if (count - increment === 0) {
              setIsDecrementMode(false);
            }}
    };
  
    const closePopup = () => {
      setShowPopup('');
    };

    return (
        <div className="counterPop" style={{ backgroundColor: bgColor }}>
            <h1>Counter: {count}</h1>
            {showPopup && (
                <div className="popUp">
                    <p>{showPopup}</p>
                    <button onClick={closePopup}>Close</button>
                </div>
            )}
            {!isDecrementMode ? (
                <button onClick={handleButtonClick}>Increase the Counter</button>
            ) : (
                <button onClick={handleDecrementClick}>Decrease the Counter</button>
            )}
        </div>
    );
}
  
export default Counterfunction;
