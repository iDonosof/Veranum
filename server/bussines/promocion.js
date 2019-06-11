const promocionDao = require("../dao/promocionDao.js");

const crearPromocion = function(req, res){
    let promocion = 
    {
        fecha:  req.body.fecha,
        precio: parseInt(req.body.precio),
        habitacionId: parseInt(req.body.habitacionId)
    };
    promocionDao.crearPromocion(promocion).then((success) => {
        res.send(success.toString());
    }).catch((error) => {
        console.log(error);
    });
};

const actualizarPromocion = function(req, res){
    let promocion = 
    {
        id:     parseInt(req.body.id),
        fecha:  req.body.fecha,
        precio: parseInt(req.body.precio),
        habitacionId: parseInt(req.body.habitacionId)
    };
    promocionDao.actualizarPromocion(promocion).then((success) => {
        res.send(success.toString());
    }).catch((error) => {
        console.log(error);
    });
};


const actualizarEstadoPromocion= function(req, res){
    let promocion = 
    {
        id : parseInt(req.body.id),
        estado : parseInt(req.body.estado)
    };
    promocionDao.actualizarEstadoPromocion(promocion).then((success) => {
        res.send(success.toString());
    }).catch((error) => {
        console.log(error);
    });
};


const obtenerPromocionesPorHabitacion = function(req, res){
    let promocion = 
    {
        habitacionId : parseInt(req.body.habitacionId)
    };
    promocionDao.obtenerPromocionesPorhabitacion(promocion).then((success) => {
        res.send(success);
    }).catch((error) => {
        console.log(error);
    });
};
const obtenerPromociones = function(req, res){
    console.log('aqui bussines')
    promocionDao.obtenerPromociones().then((success) => {
        res.send(success);
    }).catch((error) => {
        console.log(error);
    });
};

module.exports.crearPromocion = crearPromocion;
module.exports.actualizarPromocion = actualizarPromocion;
module.exports.actualizarEstadoPromocion = actualizarEstadoPromocion;
module.exports.obtenerPromocionesPorHabitacion = obtenerPromocionesPorHabitacion;
module.exports.obtenerPromociones = obtenerPromociones;
