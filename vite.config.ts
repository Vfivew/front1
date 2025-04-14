import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const { VITE_PORT } = loadEnv(mode, process.cwd());

  const serverConfig: {
    host: boolean;
    port: number;
  } = {
    host: true,
    port: +VITE_PORT,
  };

  return {
    test: {
      coverage: {
        exclude: [
          'src/test/**/*.{ts,tsx}',
          '**/styles.ts',
          'dist/**',
          'dev-dist/**',
          'src/components/svg-icon/icons',
          'src/models/**',
          'src/themes/**',
        ],
      },
      environment: 'jsdom',
      globals: true,
      setupFiles: ['./src/test/vitest.setup.ts'],
    },
    plugins: [tsconfigPaths(), react()],
    server: serverConfig,
  };
});
