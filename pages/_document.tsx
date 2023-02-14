import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="./favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
            rel="stylesheet"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-C0JTNSKJN1`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-C0JTNSKJN1', {
                            page_path: window.location.pathname,
                            });
                        `,
            }}
          />
        </Head>
        <body>
          <Main />
          <script>
  if ((window as any).netlifyIdentity) {
    (window as any).netlifyIdentity.on("init", (user: any) => {
      if (!user) {
        (window as any).netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    })
  }
</script>
        </body>
        <NextScript />
      </Html>
    )
  }
}
