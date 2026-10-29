import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});