const productoDao = require("../dao/productoDao.js");

const crearProducto = function(req, res){
    let producto = 
    {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        stockTotal: parseInt(req.body.stockTotal),
        stockDisponible: parseInt(req.body.stockDisponible),
        ubicacion: req.body.ubicacion,
        hotelId: parseInt(req.body.hotelId)
    };
    productoDao.crearProducto(producto).then((success) => {
        res.send(success.toString());
    }).catch((error) => {
        console.log(error);
    });
};

const actualizarProducto = function(req, res){
    let producto = 
    {
       id: parseInt(req.body.id),
       nombre: req.body.nombre,
       descripcion: req.body.descripcion,
       stockTotal: parseInt(req.body.stockTotal),
       stockDisponible: parseInt(req.body.stockDisponible),
       ubicacion: req.body.ubicacion,
       hotelId: parseInt(req.body.hotelId)
    };
    productoDao.actualizarProducto(producto).then((success) => {
        res.send(success.toString());
    }).catch((error) => {
        console.log(error);
    });
};


const actualizarEstadoProducto = function(req, res){
    let producto = 
    {
        id : parseInt(req.body.id),
        estado : req.body.estado
    };
    productoDao.actualizarEstadoProducto(producto).then((success) => {
        res.send(success.toString());
    }).catch((error) => {
        console.log(error);
    });
};

const obtenerProductosPorHotel = function(req, res){
    let producto = 
    {
        hotelId : parseInt(req.body.hotelId)
    };
    productoDao.obtenerProductosPorHotel(producto).then((success) => {
        res.send(success);
    }).catch((error) => {
        console.log(error);
    });
};

const obtenerProductoPorId = function(req, res){
    let producto = 
    {
        id : parseInt(req.body.id)
    };
    productoDao.obtenerProductoPorId(producto).then((success) => {
        res.send(success);
    }).catch((error) => {
        console.log(error);
    });
};
const obtenerProductos = function(req, res){
    productoDao.obtenerProductos().then((success) => {
        res.send(success);
    }).catch((error) => {
        console.log(error);
    });
};

module.exports.crearProducto = crearProducto;
module.exports.actualizarProducto = actualizarProducto;
module.exports.actualizarEstadoProducto = actualizarEstadoProducto;
module.exports.obtenerProductosPorHotel = obtenerProductosPorHotel;
module.exports.obtenerProductos = obtenerProductos;
module.exports.obtenerProductoPorId = obtenerProductoPorId;