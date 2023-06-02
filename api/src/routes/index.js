const { Router } = require('express');
const { postUser } = require('../controllers/postUser');
const axios = require('axios');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post('/user', async(req, res)=> {
    console.log('holaaaa ',req.body)
    try{
        res.status(200).json(await postUser(req.body));
    }catch{
        res.status(404).json(console.log('estamos tendiendo problemas tecnicos, sepa disculpar'));
    }

})
module.exports = router;
