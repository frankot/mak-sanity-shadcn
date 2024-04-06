/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io", port: "" },
    ],
    domains: ["images.unsplash.com", "arenamakak.pl"],
  },
};

export default nextConfig;
