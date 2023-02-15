import { useTheme } from 'next-themes';
import { useEffect, useContext } from "react";
import ThemeContext from '../lib/ThemeContext';

import Moon from './icons/Moon';
import Sun from './icons/Sun';

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const defaultTheme = useContext(ThemeContext);
  const defaultPositionForToggle = defaultTheme === 'light' ? 'translate-x-0' : 'translate-x-3/4';

  useEffect(() => {
    setTheme(defaultTheme);
  }, [defaultTheme, setTheme]);

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
        <label htmlFor="toggle-theme" className="sr-only">Theme switch</label>
        <input onClick={toggleTheme} type="checkbox" name="toggle-theme" id="toggle-theme" className="sr-only" />
        <span id="toggle-circle" className={defaultPositionForToggle + " flex flex-col justify-center items-center absolute bg-cream-100 w-14 h-14 left-2 top-1 rounded-full transition-all duration-500 dark:bg-purple-700"}>
          { theme === 'light' ?  <Sun /> : <Moon /> }
        </span>
      </label>
    </div>
  );
}
