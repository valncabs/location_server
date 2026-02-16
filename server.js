require('dotenv').config();
const pool = require('./app/db');
const app = require('./app/main');  // 👈 IMPORTAMOS EL APP CONFIGURADO

const PORT = process.env.PORT || 3000;

pool.query('SELECT NOW()')
    .then(() => {
        console.log('Base de datos conectada correctamente');
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en puerto ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error conectando a la base de datos:', err);
    });
