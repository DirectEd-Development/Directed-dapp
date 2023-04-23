import { useState, useEffect } from 'react';

type Props = {
  targetDay: number;
  targetMonth: number;
  targetYear: number;
};

export const Timer: React.FC<Props> = ({ targetDay, targetMonth, targetYear }) => {
  const targetDate = new Date(targetYear, targetMonth - 1, targetDay).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  const [timeRemaining, setTimeRemaining] = useState<number>(getTimeRemaining());

  function getTimeRemaining(): number {
    const currentTime = Date.now();
    const targetTime = Date.UTC(targetYear, targetMonth - 1, targetDay, 20); 
    const timeRemaining = targetTime - currentTime;
    return Math.max(timeRemaining, 0);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.ceil(timeRemaining / (1000 * 60 * 60 * 24));

  return (
    <div>
      <span>Mint for Warriors opens {targetDate} and 24th for Royals and Heros 8:00pm UTC</span>
      {/* <p>{days} days</p> */}
    </div>
  );
};


export default Timer;
