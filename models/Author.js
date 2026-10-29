import mongoose from 'mongoose';

// Схема 
const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    default: '',
  },
});

// Модель
const Author = mongoose.model('Author', authorSchema);

export default Author;