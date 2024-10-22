/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8000', // Use the port your server is running on
                pathname: '/media/products/**', // Adjust the path as necessary
            },
            {
                protocol: 'https',
                hostname: 'localhost',
                port: '8000', // If you are using HTTPS, specify the port
                pathname: '/media/products/**', // Adjust the path as necessary
            },
        ],
    },
};

export default nextConfig;
