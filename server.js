const axios = require('axios');

const NEON_API = "https://ep-patient-leaf-anrbfho5.apirest.c-6.us-east-1.aws.neon.tech/neondb/rest/v1";
const NEON_TOKEN = process.env.NEON_TOKEN; // guarda tu token en Railway
const express = require('express');
const app = express();

// Middleware opcional
app.use(express.json());

// Listar usuarios
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Osvaldo' },
    { id: 2, name: 'Valeria' }
  ]);
});

// Crear usuario
app.post('/api/users', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Usuario ${name} creado` });
});

// Actualizar usuario
app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  res.json({ message: `Usuario ${id} actualizado a ${name}` });
});

// Eliminar usuario
app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Usuario ${id} eliminado` });
});

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor funcionando en Railway 🚀');
});

// Puerto dinámico (Railway inyecta PORT)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});