import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: { domains: ['fakestoreapi.com'] },
    webpack(config, { isServer }) {
        if (!isServer) {
          config.optimization.minimize = false;
        }
        return config;
      },
};

export default nextConfig;
