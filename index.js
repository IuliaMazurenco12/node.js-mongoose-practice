// 1. Импорт модулей
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

// 2. Загружаем переменные из .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Server is running' });
});

// 3. Обработка событий подключения
mongoose.connection.on('error', (error) => {
  console.error('Ошибка MongoDB:', error.message);
});

mongoose.connection.on('disconnected', () => {
  console.log('Соединение с MongoDB разорвано');
});

// 4. сначала подключаюсь к Mongodb и только потом запускаю сервер
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Успешное подключение к MongoDB');

    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Не удалось подключиться к MongoDB:', error.message);
    process.exit(1);
  });