import { useState, useEffect } from 'react';

function parseDate(inputDate: string): Date | null {
  const parts = inputDate.split('/');
  if (parts.length === 3) {
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Months are zero-based
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }
  return null;
}

function calculateTimeDifference(targetDate: Date): { days: number, hours: number, minutes: number, seconds: number } {
  const now = new Date();
  const timeDifference = Math.max(targetDate.getTime() - now.getTime(), 0); // Ensure it's not negative

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export function useCountdown(targetDateStr: string) {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = parseDate(targetDateStr);
    if (targetDate) {
      const intervalId = setInterval(() => {
        const timeDifference = calculateTimeDifference(targetDate);
        setCountdown(timeDifference);

        if (timeDifference.days === 0 && timeDifference.hours === 0 && timeDifference.minutes === 0 && timeDifference.seconds === 0) {
          clearInterval(intervalId);
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [targetDateStr]);

  return countdown;
}
