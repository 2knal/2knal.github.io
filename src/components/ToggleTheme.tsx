import { useTheme } from 'next-themes';
import { useState, useEffect } from "react";
import { isDayTime } from '../lib/utils';

import Moon from './icons/Moon';
import Sun from './icons/Sun';

export default function ToggleTheme() {
  const [ mounted, setMounted ] = useState(false);
  const { theme, setTheme } = useTheme();
  const defaultPositionForToggle = theme === 'light' ? 'translate-x-0' : 'translate-x-3/4';

  useEffect(() => {    
    const theme = isDayTime() ? 'light' : 'dark';
    setTheme(theme);
    setMounted(true);
  }, [setTheme]);

  if (!mounted) {
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleTheme = (event: React.MouseEvent<HTMLInputElement>) => {
    const toggleCircle = document.getElementById('toggle-circle');

    if (theme === 'light') {
      setTheme('dark');
      if (toggleCircle?.classList.contains('translate-x-0')) {        
        toggleCircle?.classList.remove('translate-x-0');
      }
      toggleCircle?.classList.add('translate-x-3/4');
    } else {
      setTheme('light');
      if (toggleCircle?.classList.contains('translate-x-3/4')) {        
        toggleCircle?.classList.remove('translate-x-3/4');
      }
      toggleCircle?.classList.add('translate-x-0');
    }
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">         
      <label htmlFor="toggle-theme" className="block relative bg-purple-100 w-28 h-16 rounded-full cursor-pointer xs:scale-75 md:scale-90 lg:scale-100 dark:bg-purple-800">
        <input onClick={toggleTheme} type="checkbox" name="toggle-theme" id="toggle-theme" className="sr-only" />
        <span id="toggle-circle" className={defaultPositionForToggle + " flex flex-col justify-center items-center absolute bg-cream-100 w-14 h-14 left-2 top-1 rounded-full transition-all duration-500 dark:bg-purple-700"}>
          { theme === 'light' ?  <Sun /> : <Moon /> }
        </span>
      </label>
    </div>
  );
}
