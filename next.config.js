/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
    images: {
        unoptimized: true,
        domains: ['*'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '*',
            },
        ],
    },
    webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
        // Important: return the modified config
        return config
    },
}

module.exports = nextConfig
