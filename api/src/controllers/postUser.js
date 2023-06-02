const { User } = require('../db')

const postUsers = async function (req, res) {

    let {
        userName,
        password,
        email,
        googleId,
    } = req.body
    console.log(password)
    if (googleId === undefined) {
        googleId = false
    }

    if (googleId === false) {
        let a = await allUsers();

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
                password,
                email,
            })
            console.log(userCreated.dataValues)

            res.send('OK')
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
                }
            })
            console.log('find ', userCreated )

            res.send(OK2)
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }
}

module.exports = {postUsers}