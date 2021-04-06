import Head from "next/head";

import "../styles/globals.css";
import "../App.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="If you invested $100 in bitcoin last year, how much would it be worth today? Find out more about the rise of bitcoin."
        />
        <title>Rise of bitcoin</title>

        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,900"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossorigin="anonymous"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-109872469-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-109872469-1');`,
          }}
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
