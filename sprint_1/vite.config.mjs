import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  plugins: [handlebars({
    partialDirectory: path.resolve(__dirname, 'src/components'),
  })],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/assets/variables.scss";`
      }
    }
  },
  build: {
    outDir: path.resolve(__dirname, 'public'),
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        login: path.resolve(__dirname, 'src/pages/login/login.hbs'),
        register: path.resolve(__dirname, 'src/pages/register/register.hbs'),
        chat: path.resolve(__dirname, 'src/pages/chat/chat.hbs')
      }
    }
  }
});
