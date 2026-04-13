/* global process */
import mongoose from 'mongoose';

export async function connectDB() {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error('Falta la variable MONGO_URI en el entorno.');
  }

  await mongoose.connect(mongoUri);
  console.log('MongoDB Atlas conectado.');
}
