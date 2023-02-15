import { ThemeProvider } from "next-themes";
import { type AppType } from "next/dist/shared/lib/utils";
import ThemeHydration from "../components/ThemeHydration";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {

  return (
    <ThemeHydration>
      <ThemeProvider 
        attribute="class"
        enableSystem={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeHydration>
  );
};

export default MyApp;
