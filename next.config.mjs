/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/testimonials', destination: '/reviews/', permanent: true },
      { source: '/our-team/:path*', destination: '/team/:path*', permanent: true },
      { source: '/sobre', destination: '/about/', permanent: true },
      { source: '/servicos', destination: '/services/', permanent: true },
      { source: '/avaliacoes', destination: '/reviews/', permanent: true },
      { source: '/equipe/:path*', destination: '/team/:path*', permanent: true },
      { source: '/orcamento', destination: '/request-a-quote/', permanent: true },
      { source: '/contato', destination: '/contact/', permanent: true },
      { source: '/dicas/:path*', destination: '/blog/:path*', permanent: true },
      { source: '/roofing-services', destination: '/services/', permanent: true },
      { source: '/tile-and-ridge-tile-repairs', destination: '/roof-repairs/', permanent: true },
      { source: '/roof-leak-repairs', destination: '/roof-repairs/', permanent: true },
      { source: '/roof-maintenance', destination: '/roof-repairs/', permanent: true },
      { source: '/flat-roofing', destination: '/roof-replacement/', permanent: true },
      { source: '/slate-and-tile-roofing', destination: '/roof-repairs/', permanent: true },
      { source: '/roof-replacements', destination: '/roof-replacement/', permanent: true },
      { source: '/gutter-repairs', destination: '/services/', permanent: true },
      { source: '/chimney-repairs', destination: '/roof-repairs/', permanent: true },
      { source: '/general-plumbing', destination: '/roof-repairs/', permanent: true },
      { source: '/hot-water-systems', destination: '/services/', permanent: true },
      { source: '/blocked-drains', destination: '/roof-repairs/', permanent: true },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
