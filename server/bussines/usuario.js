const usuarioDao = require("../dao/usuarioDao.js");

const login = function(req, res){
    let usuario = 
    {
        nombreUsuario : req.body.nombreUsuario,
        contrasena : req.body.contrasena
    };
    usuarioDao.login(usuario).then((success) => {
        res.send(success.toString());
    }).catch((error) => {
        console.log(error);
    });
};

const crearUsuario = function(req, res){
    let usuario = 
    {
        rut : parseInt(req.body.rut),
        nombre : req.body.nombre,
        apellido : req.body.apellido,
        telefono : req.body.telefono,
        direccion : req.body.direccion,
        correo : req.body.correo,
        nombreUsuario : req.body.nombreUsuario,
        contrasena : req.body.contrasena,
        empresaid : parseInt(req.body.empresaid)
    };
    usuarioDao.crearUsuario(usuario).then((success) => {
        res.send(success.toString());
    }).catch((error) => {
        console.log(error);
    });
};

const actualizarUsuario = function(req, res){
    let usuario = 
    {
        rut : req.body.rut,
        nombre : req.body.nombre,
        apellido : req.body.apellido,
        telefono : req.body.telefono,
        direccion : req.body.direccion,
        correo : req.body.correo,
        nombreUsuario : req.body.nombreUsuario,
        contrasena : req.body.contrasena,
        empresaid : req.body.empresaid
    };
    usuarioDao.actualizarUsuario(usuario).then((success) => {
        res.send(success.toString());
    }).catch((error) => {
        console.log(error);
    });
};


const actualizarEstadoUsuario = function(req, res){
    let usuario = 
    {
        rut : req.body.rut,
        estado : req.body.estado
    };
    usuarioDao.actualizarEstadoUsuario(usuario).then((success) => {
        res.send(success.toString());
    }).catch((error) => {
        console.log(error);
    });
};

const obtenerUsuarioPorId = function(req, res){
    let usuario = 
    {
        rut : req.body.rut
    };
    usuarioDao.obtenerUsuarioPorId(usuario).then((success) => {
        res.send(success);
    }).catch((error) => {
        console.log(error);
    });
};

const obtenerUsuarios = function(req, res){
    usuarioDao.obtenerUsuarios().then((success) => {
        res.send(success);
    }).catch((error) => {
        console.log(error);
    });
};


const loginDatos = function (req, res) {
    let usuario = {
        username: req.body.username,
        contrasena: req.body.contrasena
    }
    usuarioDao.loginDatos( usuario ).then( ( success ) => {
        res.send(success);
    }).catch( ( error ) => {
        console.log(error);
    });
};



module.exports.login = login;
module.exports.crearUsuario = crearUsuario;
module.exports.actualizarUsuario = actualizarUsuario;
module.exports.actualizarEstadoUsuario = actualizarEstadoUsuario;
module.exports.obtenerUsuarioPorId = obtenerUsuarioPorId;
module.exports.obtenerUsuarios = obtenerUsuarios;
module.exports.loginDatos = loginDatos;