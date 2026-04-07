/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: process.env.NEXT_PUBLIC_WORDPRESS_API_HOSTNAME || "admin.truepath406.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: process.env.NEXT_PUBLIC_WORDPRESS_API_HOSTNAME || "admin.truepath406.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "admin.truepath406.com",
                port: "",
            },
        ],
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    // Prevent clickjacking — disallow site from being embedded in iframes
                    { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
                    // Prevent MIME type sniffing
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    // Control referrer info sent to external sites
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                    // Basic XSS protection for older browsers
                    { key: 'X-XSS-Protection', value: '1; mode=block' },
                    // Restrict powerful features to first-party only
                    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
                ],
            },
        ];
    },
};

module.exports = nextConfig;

