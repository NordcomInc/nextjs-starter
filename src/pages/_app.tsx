import 'destyle.css';
import '@/styles/app.scss';

import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { Noto_Sans } from 'next/font/google';
import SEO from 'nextseo.config';
import isPropValid from '@emotion/is-prop-valid';
import { useDomClean } from '@/hooks/use-dom-clean';
import { useRouter } from 'next/router';

const font = Noto_Sans({
    weight: ['400', '500', '800'],
    subsets: ['latin'],
    display: 'swap',
    preload: true
});

const NextApp = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();

    useDomClean();

    return (
        <>
            <style jsx global>{`
                html,
                body,
                .application {
                    font-family:
                        ${font.style.fontFamily},
                        -apple-system,
                        BlinkMacSystemFont,
                        'Segoe UI',
                        Roboto,
                        Oxygen,
                        Ubuntu,
                        Cantarell,
                        sans-serif;
                }
            `}</style>

            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="apple-mobile-web-app-title" content="Brandly by Nordcom Group Inc." />
                <link rel="icon" type="image/png" href="https://brandly.nordcom.io/favicon.png" />
                <link rel="icon" type="image/x-icon" href="https://brandly.nordcom.io/favicon.ico" />
                <link rel="apple-touch-icon" href="https://brandly.nordcom.io/favicon.png" />
            </Head>
            <DefaultSeo {...SEO} />

            {/* Page */}
            <StyleSheetManager shouldForwardProp={isPropValid}>
                <ThemeProvider theme={{}}>
                    <Component key={router.asPath} {...pageProps} />
                </ThemeProvider>
            </StyleSheetManager>
        </>
    );
};

export function reportWebVitals({ id, name, value, label }: NextWebVitalsMetric) {
    if (process.env.NODE_ENV !== 'production') return;

    (window as any)?.dataLayer?.push({
        event: 'web-vital',
        event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
        event_action: name,
        // Google Analytics metrics must be integers, so the value is rounded.
        // For CLS the value is first multiplied by 1000 for greater precision
        // (note: increase the multiplier for greater precision if needed).
        event_value: Math.round(name === 'CLS' ? value * 1000 : value),
        // The 'id' value will be unique to the current page load. When sending
        // multiple values from the same page (e.g. for CLS), Google Analytics can
        // compute a total by grouping on this ID (note: requires `eventLabel` to
        // be a dimension in your report).
        event_label: id
    });
}

export default NextApp;
