import { defineConfig } from 'vite'
import EnvironmentPlugin from 'vite-plugin-environment'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
const commonSettings = {
  plugins: [
    EnvironmentPlugin(
      {
        //sample
        'SAMPLE': 'sample!',
      }
    ),
    vue(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    }
  },
  server: {
    https: true,
  }
}

export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    return {
      ...commonSettings
    }
  }
  return {
    ...commonSettings
  }
})
