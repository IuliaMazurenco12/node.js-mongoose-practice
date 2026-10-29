import mongoose from 'mongoose';

const actorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  birthdate: {
    type: Date,
  },
  // Массив ссылок на фильмы
  movies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie',
    },
  ],
});

const Actor = mongoose.model('Actor', actorSchema);

export default Actor;