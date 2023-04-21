import React, { useState, useEffect } from 'react';


type TimeLeft = {
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
}


  const CountdownTimer: React.FC<{ expiryTimestamp: number }> = ({ expiryTimestamp }) => {
    const calculateTimeLeft = (): TimeLeft => {
      const totalSecondsLeft = Math.floor((expiryTimestamp - Date.now()) / 1000);
      const days = Math.floor(totalSecondsLeft / 86400);
      const hours = Math.floor((totalSecondsLeft % 86400) / 3600);
      const minutes = Math.floor((totalSecondsLeft % 3600) / 60);
      const seconds = Math.floor(totalSecondsLeft % 60);
   

      return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearInterval(intervalId);
    }, [expiryTimestamp]);
  
  return (
    <div>
      {timeLeft.days > 0 && 
      <div>  
         {timeLeft.days} days
      </div>}
      <div>
        {timeLeft.hours.toString().padStart(2, '0')}:{timeLeft.minutes.toString().padStart(2, '0')}:{timeLeft.seconds.toString().padStart(2, '0')}
        </div>
    </div>
  );
  };
export default CountdownTimer ;
