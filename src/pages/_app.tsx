import { ThemeProvider } from "next-themes";
import { type AppType } from "next/dist/shared/lib/utils";
import Script from "next/script";
import ThemeHydration from "../components/ThemeHydration";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {

  return (
    <>
    <Script id="gtag" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
    <Script id="gtag-script" strategy="lazyOnload">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
        });
      `}
    </Script>
    <ThemeHydration>
      <ThemeProvider 
        attribute="class"
        enableSystem={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeHydration>
    </>
  );
};

export default MyApp;
