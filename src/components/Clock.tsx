import { useState, useEffect } from 'react';

export default function Clock(){
  const [date, setDate] = useState(new Date());
  
  useEffect(() => {
    const timerId = setInterval(() => setDate(new Date()), 30 * 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <p className="text-cream-100">
      {date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
    </p>
  );
}