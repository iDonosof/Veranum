const empresaDao = require("../dao/empresaDao.js");

const crearEmpresa = function(req, res){
    console.log(req.body.rut);
    let empresa = 
    {
        rut : parseInt(req.body.rut),
        nombre : req.body.nombre,
        direccion : req.body.direccion,
        telefono : req.body.telefono
    };
    empresaDao.crearEmpresa(empresa).then((success) => {
        console.log(success.toString());
        res.send(success.toString());
    }).catch((error) => {
        console.log(error);
    });
};

const actualizarEmpresa = function(req, res){
    let empresa = 
    {
        rut : parseInt(req.body.rut),
        nombre : req.body.nombre,
        direccion : req.body.direccion,
        telefono : req.body.telefono
    };
    empresaDao.actualizarEmpresa(empresa).then((success) => {
        res.send(success.toString());
    }).catch((error) => {
        console.log(error);
    });
};


const actualizarEstadoEmpresa = function(req, res){
    let empresa = 
    {
        rut : req.body.rut,
        estado : req.body.estado
    };
    empresaDao.actualizarEstadoEmpresa(empresa).then((success) => {
        res.send(success.toString());
    }).catch((error) => {
        console.log(error);
    });
};

const obtenerEmpresaPorId = function(req, res){
    let empresa = 
    {
        rut : req.body.rut
    };
    empresaDao.obtenerEmpresaPorId(empresa).then((success) => {
        res.send(success);
    }).catch((error) => {
        console.log(error);
    });
};

const obtenerEmpresas = function(req, res){
    empresaDao.obtenerEmpresas().then((success) => {
        res.send(success);
    }).catch((error) => {
        console.log(error);
    });
};

module.exports.crearEmpresa = crearEmpresa;
module.exports.actualizarEmpresa = actualizarEmpresa;
module.exports.actualizarEstadoEmpresa = actualizarEstadoEmpresa;
module.exports.obtenerEmpresas = obtenerEmpresas;
module.exports.obtenerEmpresaPorId = obtenerEmpresaPorId;
