import { useEffect, useState } from 'react';

export const useTimer = (
  start: { second: number; minute: number } = {
    second: 0,
    minute: 0,
  },
) => {
  const [second, setSecond] = useState(start.second);
  const [minute, setMinute] = useState(start.minute);

  const tick = () => {
    setSecond((s) => {
      if (s + 1 === 60) {
        setMinute(minute + 1);
        return 0;
      } else {
        return s + 1;
      }
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => tick(), 1000);
    return () => clearInterval(intervalId);
  });

  return [zeroPad(second), zeroPad(minute)];
};

const zeroPad = (number: number) => String(number).padStart(2, '0');
