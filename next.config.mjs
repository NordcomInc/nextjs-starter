/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
    trailingSlash: true,
    swcMinify: true,
    productionBrowserSourceMaps: true,
    compress: true,
    experimental: {
        esmExternals: true
    },
    images: {
        minimumCacheTTL: 60,
        domains: ['ladybird.dev', '*.github.io'],
        deviceSizes: [650, 900, 1280, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
    },
    compiler: {
        styledComponents: {
            ssr: true,
            minify: true,
            transpileTemplateLiterals: true,
            pure: true
        }
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    pageExtensions: ['ts', 'tsx']
};

export default config;
