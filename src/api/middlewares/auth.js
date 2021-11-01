const jwt = require('jsonwebtoken');
const authConfig = require('../../../auth.js');

module.exports =  async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader)
        return res.status(401).send({ error: 'Token não enviado' });


    const parts = authHeader.split(' ');

    if(!parts.length === 2)
        return res.status(401).send({error: 'Token error'});

    const [ scheme, token ] = parts

    if (!/^Bearer$/i.test(scheme))
        return res.status(401).send({error: 'Token sem formato desejado'})

    jwt.verify(token, authConfig.secret, (err) => {
        console.log(err);
        if (err) res.status(401).send({ error: "Token invalido!"})

        return next();
    })
}
