const express = require("express");
const app = express();

// Middleware personalizado: se ejecuta entre la petición y la respuesta
app.use((req, res, next) => {
  console.log(`Petición recibida: ${req.method} ${req.url}`);
  next(); // pasa al siguiente middleware o ruta
});

// Ruta principal
app.get("/", (req, res) => {
  res.send("Hola, soy un middleware en Render 🌐");
});

app.get("/saludo", (req, res) => {
  res.json({ mensaje: "¡Hola desde el middleware!" });
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));

