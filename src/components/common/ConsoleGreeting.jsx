'use client';

import { useEffect } from 'react';

let logged = false;

const ConsoleGreeting = () => {
  useEffect(() => {
    if (logged) return;
    logged = true;
    console.log(
      '%cReading the code? I like you already. keshav@kunver.com',
      'color: #ededed; font-size: 14px; font-weight: 600;'
    );
  }, []);

  return null;
};

export default ConsoleGreeting;
