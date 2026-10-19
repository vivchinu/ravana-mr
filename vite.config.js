import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

// `npm run dev`        -> http://localhost:5173 (use with `adb reverse tcp:5173 tcp:5173`)
// `npm run dev:https`  -> https://<your-LAN-IP>:5173 with a self-signed certificate
export default defineConfig(({ mode }) => ({
  plugins: mode === 'https' ? [basicSsl()] : [],
  server: { host: true, port: Number(process.env.PORT) || 5173 },
  preview: { host: true, port: 4173 },
  build: { target: 'es2020', chunkSizeWarningLimit: 1200 },
}));
