const express = require('express');
const app = express();

// Middleware opcional
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor funcionando en Railway 🚀');
});

// Puerto dinámico (Railway inyecta PORT)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});