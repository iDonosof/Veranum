const precioDiaDao = require("../dao/precioDiaDao.js");

const crearPrecioDia = function(req, res){
    let precioDia = 
    {
        fecha:  req.body.fecha,
        precio: parseInt(req.body.precio),
        habitacionId: parseInt(req.body.habitacionId)
    };
    precioDiaDao.crearPrecioDia(precioDia).then((success) => {
        res.send(success.toString());
    }).catch((error) => {
        console.log(error);
    });
};

const actualizarPrecioDia = function(req, res){
    let precioDia = 
    {
        id:     parseInt(req.body.id),
        fecha:  req.body.fecha,
        precio: parseInt(req.body.precio),
        habitacionId: parseInt(req.body.habitacionId)
    };
    precioDiaDao.actualizarPrecioDia(precioDia).then((success) => {
        res.send(success.toString());
    }).catch((error) => {
        console.log(error);
    });
};

const obtenerPrecioDiaPorFechaYHabitacionId = function(req, res){
    let precioDia = 
    {
        fecha:  req.body.fecha,
        habitacionId: parseInt(req.body.habitacionId)
    };
    precioDiaDao.obtenerPrecioDiaPorFechaYHabitacionId(precioDia).then((success) => {
        res.send(success);
    }).catch((error) => {
        console.log(error);
    });
};

const obtenerPrecioDiaPorFecha = function(req, res){
    let precioDia = 
    {
        fecha:  req.body.fecha
    };
    precioDiaDao.obtenerPrecioDiaPorFecha(precioDia).then((success) => {
        res.send(success);
    }).catch((error) => {
        console.log(error);
    });
};

module.exports.crearPrecioDia = crearPrecioDia;
module.exports.actualizarPrecioDia = actualizarPrecioDia;
module.exports.obtenerPrecioDiaPorFecha = obtenerPrecioDiaPorFecha;
module.exports.obtenerPrecioDiaPorFechaYHabitacionId = obtenerPrecioDiaPorFechaYHabitacionId;