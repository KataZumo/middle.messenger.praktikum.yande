import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { engine } from 'express-handlebars';
import { createServer as createViteServer } from 'vite';
import bodyParser from 'body-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Настройка Handlebars
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: false }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/pages'));

// Middleware для обработки данных форм
app.use(bodyParser.urlencoded({ extended: true }));

// Функция для создания Vite сервер и интеграции его с Express
async function createServer() {
  const vite = await createViteServer({
    server: { middlewareMode: 'html' },
    root: path.join(__dirname, 'src'),
  });

  // Используем Vite как middleware
  app.use(vite.middlewares);

  // Настройка статической папки  
  app.use(express.static(path.join(__dirname, '/src/dist')));    


  // Маршруты для страниц

  // app.get('/', (req, res) => {
  //   res.render('login-page/login-page', { error: null });
  // });

  // app.post('/register', (req, res) => {
  //   res.render('register-page/register-page', { error: null });
  // });

  // app.get('/chat', (req, res) => {
  //   res.render('chat-page/chat-page');
  // });

  // app.get('/profile', (req, res) => {
  //   res.render('profile-page/profile-page')
  // });

  // app.get('/edit-profile', (req, res) => {
  //   res.render('edit-profile/edit-profile')
  // });

  // app.get('/change-password', (req, res) => {
  //   res.render('change-password/change-password');
  // });

  // Запуск сервера
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

createServer();
