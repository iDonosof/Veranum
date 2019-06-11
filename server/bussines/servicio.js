const servicioDao = require("../dao/servicioDao.js");

const crearServicio = function(req, res){
    let servicio = 
    {
        nombre:  req.body.nombre,
        descripcion: req.body.descripcion,
        hotelId: parseInt(req.body.hotelId)
    };
    servicioDao.crearServicio(servicio).then((success) => {
        res.send(success.toString());
    }).catch((error) => {
        console.log(error);
    });
};

const actualizarServicio  = function(req, res){
    let servicio = 
    {
        id: parseInt(req.body.id),
        nombre:  req.body.nombre,
        descripcion: req.body.descripcion,
        hotelId: parseInt(req.body.hotelId)
    };
    servicioDao.actualizarServicio(servicio).then((success) => {
        res.send(success.toString());
    }).catch((error) => {
        console.log(error);
    });
};


const actualizarEstadoServicio= function(req, res){
    let servicio = 
    {
        id : parseInt(req.body.id),
        estado : parseInt(req.body.estado)
    };
    servicioDao.actualizarEstadoServicio(servicio).then((success) => {
        res.send(success.toString());
    }).catch((error) => {
        console.log(error);
    });
};


const obtenerServiciosPorHotel = function(req, res){
    let servicio = 
    {
        hotelId : parseInt(req.body.hotelId)
    };
    servicioDao.obtenerServiciosPorHotel(servicio).then((success) => {
        res.send(success);
    }).catch((error) => {
        console.log(error);
    });
};
const obtenerServicios = function(req, res){
    servicioDao.obtenerServicios().then((success) => {
        res.send(success);
    }).catch((error) => {
        console.log(error);
    });
};

module.exports.crearServicio = crearServicio;
module.exports.actualizarServicio = actualizarServicio;
module.exports.actualizarEstadoServicio = actualizarEstadoServicio;
module.exports.obtenerServiciosPorHotel = obtenerServiciosPorHotel;
module.exports.obtenerServicios = obtenerServicios;
