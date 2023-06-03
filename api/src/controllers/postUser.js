const { User } = require('../db')

const postUsers = async function (req, res) {
    console.log(req.body)
    let {
        userName,
        password,
        email,
        googleId,
    } = req.body
 
    if (googleId === undefined) {
        googleId = false
    }

    if (googleId === false) {
        let a = await User.findAll();
        //console.log("esto es a ", a)


        let b = a.filter(e => e.userName === userName)
        let c = a.filter(o => o.email === email)



        if (c[0]) {

            return res.send('email ya registrado')
        }

        if (b[0]) {

            return res.status(200).send('ya tenemos creado ese usuario, prueba con otro')

        }
       
        try {
            let userCreated = await User.create({
                userName,
                email,
                password 
            })
            

            res.send('ok')
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }
    else {

        try {
            let userCreated = await User.findOrCreate({
                where: { userName: userName },
                defaults: {
                    password: pas,
                    email: email,
                    image,
                }
            })


            res.send('ok')
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }
}
const log = async function(req, res){
    
    let {
        userName
    } = req.body

    console.log('hola')
    /* try{ */
        let us = await User.find({
            where: { userName: userName },
        })
        console.log(us)
        if(us){
            return res.status(200).send('ok')
        }else{
            return res.status(200).send('no existe el usuario')
        }
        
    /* }catch{
        return res.status(400).json('tenemos un error')
    } */
   

}



module.exports = {postUsers, log}