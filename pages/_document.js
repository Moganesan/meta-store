import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="02master.com is a best platform for learning programming and web development."
          />
          <meta
            name="keywords"
            content="HTML,CSS,JavaScript,Web Development,Programming"
          />
          <meta name="author" content="Moganesan" />
          <meta property="og:site_name" content="02master.com" />
          <meta property="og:title" content="Learn Programming in Tamil" />
          <meta
            property="og:description"
            content="02master.com is a best platform for learning programming and web development by building real time projects."
          />
          <meta property="og:type" content="website" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@300;400;500;700&family=Rubik+Mono+One&family=Russo+One&family=Secular+One&family=Varela+Round&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
