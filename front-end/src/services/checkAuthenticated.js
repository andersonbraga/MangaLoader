var jwt = require('jwt-simple');
var moment = require('moment');

module.exports = function checkAuthenticated(req, res, next) {
    if(!req.header('Authorization')) {
        return res.status(401).send({message: 'Verifique seu cabeçalho'});
    }

    var token = req.header('Authorization').split(' ')[1];

    var payload = jwt.decode(token, 'secret');

    if(payload.exp <= moment().unix()){
        return res.status(401).send({message: 'Token invalido'});
    }

    req.user = payload.sub;

    next();
}
