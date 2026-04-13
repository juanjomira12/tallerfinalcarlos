/* global process */
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

function createToken(userId) {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error('Falta la variable JWT_SECRET en el entorno.');
  }

  return jwt.sign({ userId }, secret, { expiresIn: '7d' });
}

function formatUser(user) {
  return {
    id: user._id,
    name: user.name,
    email: user.email,
  };
}

export async function register(req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
  }

  const normalizedName = name.trim();
  const normalizedEmail = email.trim().toLowerCase();

  if (!normalizedName) {
    return res.status(400).json({ message: 'El nombre es obligatorio.' });
  }

  if (password.trim().length < 6) {
    return res.status(400).json({ message: 'La contrasena debe tener al menos 6 caracteres.' });
  }
  const existingUser = await User.findOne({ email: normalizedEmail });

  if (existingUser) {
    return res.status(409).json({ message: 'Ya existe una cuenta con este correo.' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    name: normalizedName,
    email: normalizedEmail,
    password: hashedPassword,
  });

  return res.status(201).json({
    message: 'Cuenta creada correctamente.',
    token: createToken(user._id.toString()),
    user: formatUser(user),
  });
}

export async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Correo y contrasena son obligatorios.' });
  }

  const normalizedEmail = email.trim().toLowerCase();
  const user = await User.findOne({ email: normalizedEmail });

  if (!user) {
    return res.status(401).json({ message: 'Credenciales invalidas.' });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({ message: 'Credenciales invalidas.' });
  }

  return res.json({
    message: 'Inicio de sesion correcto.',
    token: createToken(user._id.toString()),
    user: formatUser(user),
  });
}
