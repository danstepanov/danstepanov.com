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
                <title>Create Expo Stack</title>
                    <meta
                    property="description"
                    content="My crime is curiosity."
                    />
                    <meta property="og:title" content="Dan Stepanov"></meta>
                    <meta
                    property="og:description"
                    content="My crime is curiosity."
                    />
                    <meta property="og:url" content="https://onlydans.gg"></meta>
                    <meta property="og:image" content="https://onlydans.gg/api/og" />
                    <meta property="og:image:alt" content="Dan Stepanov" />
                    <meta property="og:image:type" content="image/png" />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                    <meta
                    property="twitter:image"
                    content="https://onlydans.gg/api/og"
                    ></meta>
                    <meta property="twitter:card" content="summary_large_image"></meta>
                    <meta property="twitter:title" content="Dan Stepanov"></meta>
                    <meta
                    property="twitter:description"
                    content="My crim is curiosity."
                    ></meta>
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