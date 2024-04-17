/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["hmlpkncszudwmcswmstp.supabase.co"],
        minimumCacheTTL: 100,
    },
    experimental: {
        reactRefresh: true,
        compress:true,
      },
    
};

module.exports = nextConfig;
