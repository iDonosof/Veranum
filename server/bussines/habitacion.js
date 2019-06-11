const habitacionDao = require("../dao/habitacionDao.js");

const crearHabitacion = function(req, res){
    let habitacion = 
    {
        numero: req.body.numero,
        capacidad: parseInt(req.body.capacidad),
        camas:  parseInt(req.body.camas),
        banos:  parseInt(req.body.banos),
        hotelId: parseInt(req.body.hotelId)
    };
    habitacionDao.crearHabitacion(habitacion).then((success) => {
        res.send(success.toString());
    }).catch((error) => {
        console.log(error);
    });
};

const actualizarHabitacion = function(req, res){
    let habitacion = 
    {
        id: parseInt(req.body.id),
        numero: req.body.numero,
        capacidad: parseInt(req.body.capacidad),
        camas:  parseInt(req.body.camas),
        banos:  parseInt(req.body.banos),
        hotelId: parseInt(req.body.hotelId)
    };
    habitacionDao.actualizarHabitacion(habitacion).then((success) => {
        res.send(success.toString());
    }).catch((error) => {
        console.log(error);
    });
};


const actualizarEstadoHabitacion = function(req, res){
    let habitacion = 
    {
        id : parseInt(req.body.id),
        estado : req.body.estado
    };
    habitacionDao.actualizarEstadoHabitacion(habitacion).then((success) => {
        res.send(success.toString());
    }).catch((error) => {
        console.log(error);
    });
};


const obtenerHabitacionPorId = function(req, res){
    let habitacion = 
    {
        id : parseInt(req.body.id)
    };
    habitacionDao.obtenerHabitacionPorId(habitacion).then((success) => {
        res.send(success);
    }).catch((error) => {
        console.log(error);
    });
};
const obtenerHabitaciones = function(req, res){
    habitacionDao.obtenerHabitaciones().then((success) => {
        res.send(success);
    }).catch((error) => {
        console.log(error);
    });
};

module.exports.crearHabitacion = crearHabitacion;
module.exports.actualizarHabitacion = actualizarHabitacion;
module.exports.actualizarEstadoHabitacion = actualizarEstadoHabitacion;
module.exports.obtenerHabitacionPorId = obtenerHabitacionPorId;
module.exports.obtenerHabitaciones = obtenerHabitaciones;
