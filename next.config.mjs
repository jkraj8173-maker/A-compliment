/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    '*.pike.replit.dev',
    '*.janeway.replit.dev',
    '*.riker.replit.dev',
    '*.replit.dev',
    '*.repl.co',
    '*.replit.app',
    'localhost',
    '127.0.0.1',
  ],
  devIndicators: false,
};

export default nextConfig;
