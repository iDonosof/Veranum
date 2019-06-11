const con = require("../dao/connection.js");

const crearProducto = function(producto){
    let query = "select FN_CREAR_PRODUCTO (?,?,?,?,?,?)";
    return new Promise((resolve, reject) => {
        con.query(query, [producto.nombre,producto.descripcion,producto.stockTotal,producto.stockDisponible,producto.ubicacion,producto.hotelId], (error, result, fields) => {
            if(error){
                console.log(error);
                reject(error);
                return;
            }
            let keys = Object.keys(result[0]);
            resolve(result[0][keys[0]]); 
        });
    });
};

const actualizarProducto = function(producto){
    let query = "select FN_ACTUALIZAR_PRODUCTO (?,?,?,?,?,?,?)";
    return new Promise((resolve, reject) => {
        con.query(query, [producto.id,producto.nombre,producto.descripcion,producto.stockTotal,producto.stockDisponible,producto.ubicacion,producto.hotelId], (error, result, fields) => {
            if(error){
                console.log(error);
                reject(error);
                return;
            }
            let keys = Object.keys(result[0]);
            resolve(result[0][keys[0]]); 
        });
    });
};

const actualizarEstadoProducto = function(producto){
    let query = "select FN_ACTUALIZAR_ESTADO_PRODUCTO (?,?)";
    return new Promise((resolve, reject) => {
        con.query(query, [producto.id,producto.estado], (error, result, fields) => {
            if(error){
                console.log(error);
                reject(error);
                return;
            }
            let keys = Object.keys(result[0]);
            resolve(result[0][keys[0]]); 
        });
    });
};

const obtenerProductosPorHotel = function(producto){
    let query = "select * from PRODUCTO where HOTELID = ?";
    return new Promise((resolve, reject) => {
        con.query(query,[producto.hotelId], (error, result, fields) => {
            if(error){
                console.log(error);
                reject(error);
                return;
            }
            let keys = Object.keys(result[0]);
            resolve(result); 
        });
    });
};

const obtenerProductoPorId = function(producto){
    let query = "select * from PRODUCTO where ID = ?";
    return new Promise((resolve, reject) => {
        con.query(query,[producto.id], (error, result, fields) => {
            if(error){
                console.log(error);
                reject(error);
                return;
            }
            resolve(result); 
        });
    });
};

const obtenerProductos = function(){
    let query = "select * from PRODUCTO";
    return new Promise((resolve, reject) => {
        con.query(query, (error, result, fields) => {
            if(error){
                console.log(error);
                reject(error);
                return;
            }
            resolve(result); 
        });
    });
};

module.exports.crearProducto = crearProducto;
module.exports.actualizarProducto = actualizarProducto;
module.exports.actualizarEstadoProducto = actualizarEstadoProducto;
module.exports.obtenerProductosPorHotel = obtenerProductosPorHotel;
module.exports.obtenerProductos = obtenerProductos;
module.exports.obtenerProductoPorId = obtenerProductoPorId;

