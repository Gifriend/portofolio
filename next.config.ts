import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "cdn-icons-png.flaticon.com",
      "cdn.iconscout.com",
      "cdn.icon-icons.com",
      "cdn.worldvectorlogo.com",
      "cdn4.iconfinder.com",
      "upload.wikimedia.org",
      "getbootstrap.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/inspire",
        destination:
          "https://github.com/Gifriend/inspire/releases/latest/download/app-release.apk",
        permanent: false,
      },
    ];
  },
};
export default nextConfig;
