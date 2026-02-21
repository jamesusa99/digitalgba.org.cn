import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Scripts: self + inline (Next.js requires) + analytics
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.bilibili.com player.bilibili.com",
      // Styles: self + inline (Tailwind/framer)
      "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
      // Fonts
      "font-src 'self' fonts.gstatic.com",
      // Images
      "img-src 'self' data: blob: images.unsplash.com img2.baidu.com gips1.baidu.com upload.wikimedia.org *.bilibili.com",
      // iframes (Bilibili player)
      "frame-src player.bilibili.com *.bilibili.com",
      // Connections
      "connect-src 'self' *.bilibili.com vitals.vercel-insights.com",
      "media-src 'self' blob: *.bilibili.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Performance: compress responses
  compress: true,

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 86400,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "img2.baidu.com", pathname: "/**" },
      { protocol: "https", hostname: "gips1.baidu.com", pathname: "/**" },
      { protocol: "https", hostname: "upload.wikimedia.org", pathname: "/**" },
    ],
  },

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      // Cache static assets aggressively
      {
        source: "/(.*)\\.(ico|png|jpg|jpeg|gif|webp|avif|svg|woff|woff2|ttf|otf|eot)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Cache Next.js static chunks
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  // Redirects for old routes
  async redirects() {
    return [
      // Root redirect to default locale
      { source: "/", destination: "/zh-CN", permanent: false },
    ];
  },
};

export default withNextIntl(nextConfig);
