const { Router } = require('express');
const { getAllTeams, getTeam } = require('./controllers/getAllTeams');
const { getType } = require('./controllers/getType');
const { postPokemon } = require('./controllers/postPokemon');
const { getNamePokemon } = require('./controllers/getNamePokemon')
const axios = require('axios');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/teams', async(req, res)=> {
        try{
            res.status(200).json(await getAllTeams());
        }catch{
            res.status(404).json(console.log('Disculpa, andamos con problemas tecnicos o.O'));
        }
})

router.get('/team/:idTeam', async(req, res)=> {
    const { idTeam } = req.params;
    try{
          res.status(200).json(await getTeam(idTeam));
      }catch{
          res.status(404).json(console.log('Disculpa, andamos con problemas tecnicos'));
      } 
})

router.get('/type', async(req, res)=> {

  try{
        res.status(200).json(await getType());
    }catch{
        res.status(404).json(console.log('Disculpa, andamos con problemas tecnicos'))
    } 

})

  router.post('/pokemons', async(req, res)=> {

    console.log(req.body)

    try{
        res.status(200).json(await postPokemon(req.body));
    }catch{
        res.status(404).json(console.log('estamos tendiendo problemas tecnicos, sepa disculpar'));
    }

})
module.exports = router;
