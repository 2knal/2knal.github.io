import { useEffect, useState } from "react";
import HydrationContext from "../lib/HydrationContext";
import ThemeContext from "../lib/ThemeContext";
import { getTheme } from "../lib/utils";

interface IThemeHydration {
  children: React.ReactNode
}

export default function ThemeHydration({ children }: IThemeHydration) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  // Will be returned for the first render
  // Return loader
  if (!hydrated) {
    return null;
  }

  return (
    <HydrationContext.Provider value={hydrated}>
      <ThemeContext.Provider value={getTheme()}>
        {children}
      </ThemeContext.Provider>
    </HydrationContext.Provider>
  );
}
