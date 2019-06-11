const con = require("../dao/connection.js");

const crearServicio = function(servicio){
    let query = "select FN_CREAR_SERVICIO (?,?,?)";
    return new Promise((resolve, reject) => {
        con.query(query, [servicio.nombre,servicio.descripcion,servicio.hotelId], (error, result, fields) => {
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

const actualizarServicio = function(servicio){
    let query = "select FN_ACTUALIZAR_SERVICIO(?,?,?,?)";
    return new Promise((resolve, reject) => {
        con.query(query, [servicio.id,servicio.nombre,servicio.descripcion,servicio.hotelId], (error, result, fields) => {
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

const actualizarEstadoServicio = function(servicio){
    let query = "select FN_ACTUALIZAR_ESTADO_SERVICIO(?,?)";
    return new Promise((resolve, reject) => {
        con.query(query, [servicio.id,servicio.estado], (error, result, fields) => {
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

const obtenerServiciosPorHotel = function(servicio){
    let query = "select * from SERVICIO where HOTELID = ?";
    return new Promise((resolve, reject) => {
        con.query(query,[servicio.hotelId], (error, result, fields) => {
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

const obtenerServicios = function(){
    let query = "select * from SERVICIO";
    return new Promise((resolve, reject) => {
        con.query(query, (error, result, fields) => {
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

module.exports.crearServicio = crearServicio;
module.exports.actualizarServicio = actualizarServicio;
module.exports.actualizarEstadoServicio = actualizarEstadoServicio;
module.exports.obtenerServiciosPorHotel = obtenerServiciosPorHotel;
module.exports.obtenerServicios = obtenerServicios;


