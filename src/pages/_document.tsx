import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600&f[]=satoshi@500,400&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" rel="stylesheet"/>
      </Head>
      <body className="bg-purple-100 font-satoshi text-base text-purple-700 w-full h-full dark:bg-purple-800 dark:text-cream-100 selection:bg-purple-100 dark:selection:bg-purple-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
