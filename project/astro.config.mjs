import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import node from '@astrojs/node';
import auth from 'auth-astro';

export default defineConfig({
  integrations: [tailwind(), react(), auth()],
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
});