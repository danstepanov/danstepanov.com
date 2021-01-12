import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="/static/favicon.png" />
                    <meta charSet="utf-8" />
                    <meta property="og:image" content="/static/simple.png" key="ogimageurl" />
                    <meta property="og:image:secure_url" content="/static/simple.png" key="ogimagesecureurl" />
                    <meta property="og:image:type" content="image/png" key="ogimagetype" />
                    <meta property="og:image:width" content="1200" key="ogiamgewidth" />
                    <meta property="og:image:height" content="627" key="ogimageheight" />
                    <meta property="og:type" content="website" key="ogtype" />
                    <meta property="og:url" content="danstepanov.com" key="ogurl" />
                    <meta property="og:title" content="Dan Stepanov" key="ogtitle" />
                    <meta property="og:description" content="My crime is curiosity." key="ogdescription" />
                    <meta name="twitter:card" content="summary" key="twcard" />
                    <meta name="twitter:creator" content="@danstepanov" key="twhandle" />
                </Head>
                <body className="bg-white dark:bg-black text-white dark:text-black">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument