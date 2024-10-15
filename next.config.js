/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["hmlpkncszudwmcswmstp.supabase.co"],
      
    },
    experimental: {
        reactRefresh: true,
        compress:true,
      },
    
};

module.exports = nextConfig;
