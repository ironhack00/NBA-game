const { Router } = require('express');
const { postUsers, log } = require('../controllers/postUser');
const axios = require('axios');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);    

router.post('/user', postUsers)
router.get('/user', log)


module.exports = router;
