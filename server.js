const express = require("express");
const app = express();

// Middleware personalizado: se ejecuta entre la petición y la respuesta
app.use((req, res, next) => {
  console.log(`Petición recibida: ${req.method} ${req.url}`);
  next(); // pasa al siguiente middleware o ruta
});

// Ruta principal con HTML estilizado
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Middleware Demo</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        
        .container {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          padding: 50px;
          max-width: 600px;
          width: 100%;
          text-align: center;
          animation: fadeIn 0.8s ease-in;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .logo {
          font-size: 80px;
          margin-bottom: 20px;
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        h1 {
          color: #667eea;
          font-size: 2.5em;
          margin-bottom: 15px;
          font-weight: 700;
        }
        
        .subtitle {
          color: #666;
          font-size: 1.2em;
          margin-bottom: 30px;
          line-height: 1.6;
        }
        
        .badge {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 10px 25px;
          border-radius: 25px;
          font-weight: 600;
          margin: 10px 5px;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }
        
        .api-button {
          display: inline-block;
          margin: 20px 10px;
          padding: 15px 30px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
          text-decoration: none;
          border-radius: 30px;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(245, 87, 108, 0.4);
        }
        
        .api-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(245, 87, 108, 0.6);
        }
        
        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px;
          margin-top: 30px;
        }
        
        .feature {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          padding: 20px;
          border-radius: 15px;
          transition: transform 0.3s ease;
        }
        
        .feature:hover {
          transform: scale(1.05);
        }
        
        .feature-icon {
          font-size: 40px;
          margin-bottom: 10px;
        }
        
        .feature-text {
          color: #555;
          font-weight: 600;
        }
        
        .footer {
          margin-top: 40px;
          color: #999;
          font-size: 0.9em;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="logo">🌐</div>
        <h1>Middleware Demo</h1>
        <p class="subtitle">Sistema de middleware funcionando en Render</p>
        
        <div>
          <span class="badge">✓ Express.js</span>
          <span class="badge">✓ Middleware Activo</span>
          <span class="badge">✓ API REST</span>
        </div>
        
        <a href="/saludo" class="api-button">🚀 Probar API</a>
        
        <div class="features">
          <div class="feature">
            <div class="feature-icon">⚡</div>
            <div class="feature-text">Rápido</div>
          </div>
          <div class="feature">
            <div class="feature-icon">🔒</div>
            <div class="feature-text">Seguro</div>
          </div>
          <div class="feature">
            <div class="feature-icon">📊</div>
            <div class="feature-text">Escalable</div>
          </div>
        </div>
        
        <div class="footer">
          <p>Servidor corriendo en puerto ${process.env.PORT || 3000}</p>
        </div>
      </div>
      
      <script>
        // Añadir interactividad
        document.querySelector('.api-button').addEventListener('click', async (e) => {
          e.preventDefault();
          try {
            const response = await fetch('/saludo');
            const data = await response.json();
            alert('✅ ' + data.mensaje);
          } catch (error) {
            alert('❌ Error al conectar con la API');
          }
        });
      </script>
    </body>
    </html>
  `);
});

app.get("/saludo", (req, res) => {
  res.json({ mensaje: "¡Hola desde el middleware!" });
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));

