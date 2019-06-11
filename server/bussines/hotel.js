const hotelDao = require("../dao/hotelDao.js");

const crearHotel = function(req, res){
    let hotel = 
    {
        direccion : req.body.direccion,
        region : req.body.region,
        telefono : req.body.telefono,
        administrador : parseInt(req.body.administrador)
    };
    hotelDao.crearHotel(hotel).then((success) => {
        res.send(success.toString());
    }).catch((error) => {
        console.log(error);
    });
};

const actualizarHotel = function(req, res){
    let hotel = 
    {
        id : parseInt(req.body.id),
        direccion : req.body.direccion,
        region : req.body.region,
        telefono : req.body.telefono,
        administrador : parseInt(req.body.administrador)
    };
    hotelDao.actualizarHotel(hotel).then((success) => {
        res.send(success.toString());
    }).catch((error) => {
        console.log(error);
    });
};


const actualizarEstadoHotel = function(req, res){
    let hotel = 
    {
        id : parseInt(req.body.id),
        estado : req.body.estado
    };
    hotelDao.actualizarEstadoHotel(hotel).then((success) => {
        res.send(success.toString());
    }).catch((error) => {
        console.log(error);
    });
};

const obtenerHotelPorId = function(req, res){
    let hotel = 
    {
        id : parseInt(req.body.id)
    };
    hotelDao.obtenerHotelPorId(hotel).then((success) => {
        res.send(success);
    }).catch((error) => {
        console.log(error);
    });
};

const obtenerHoteles = function(req, res){
    hotelDao.obtenerHoteles().then((success) => {
        res.send(success);
    }).catch((error) => {
        console.log(error);
    });
};

module.exports.crearHotel = crearHotel;
module.exports.actualizarHotel = actualizarHotel;
module.exports.actualizarEstadoHotel = actualizarEstadoHotel;
module.exports.obtenerHoteles = obtenerHoteles;
module.exports.obtenerHotelPorId = obtenerHotelPorId;