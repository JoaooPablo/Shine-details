const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para servir archivos estáticos (CSS, imágenes, JS, etc.)
app.use(express.static('public'));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Ruta para "Arreglos Florales"
app.get('/Arreglos-florales', (req, res) => {
    res.sendFile(__dirname + '/views/Arreglos-florales.html');
});


// Iniciar el servidor en el puerto 3000
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
