import React, { useState, useEffect } from 'react';

const App = () => {
  const [isQuizAvailable, setIsQuizAvailable] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Set an interval to update the time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Check if current time is after 9 PM
    const checkQuizAvailability = () => {
      const now = new Date();
      const quizStartTime = new Date(now);
      quizStartTime.setHours(22, 51, 0, 0); // Set to 9:00:00 PM

      if (now >= quizStartTime) {
        setIsQuizAvailable(true);
      } else {
        setIsQuizAvailable(false);
      }
    };

    checkQuizAvailability();
  }, [currentTime]); // Recheck every time currentTime updates

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Quiz Application</h1>
      {isQuizAvailable ? (
        <div>
          <h2>The quiz is now available!</h2>
          {/* Add your quiz logic or component here */}
        </div>
      ) : (
        <div>
          <h2>The quiz will start at 9 PM.</h2>
          <p>Current time: {currentTime.toLocaleTimeString()}</p>
        </div>
      )}
    </div>
  );
};

export default App;
