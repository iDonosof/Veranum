const con = require("../dao/connection.js");

const crearHotel = function(hotel){
    let query = "select FN_CREAR_HOTEL (?,?,?,?)";
    return new Promise((resolve, reject) => {
        con.query(query, [hotel.direccion,hotel.region,hotel.telefono,hotel.administrador], (error, result, fields) => {
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

const actualizarHotel = function(hotel){
    let query = "select FN_ACTUALIZAR_HOTEL (?,?,?,?,?)";
    console.log(hotel);
    return new Promise((resolve, reject) => {
        con.query(query, [hotel.id,hotel.direccion,hotel.region,hotel.telefono,hotel.administrador], (error, result, fields) => {
            if(error){
                console.log(error);
                reject(error);
                return;
            }
            let keys = Object.keys(result[0]);
            console.log(result);
            resolve(result[0][keys[0]]); 
        });
    });
};

const actualizarEstadoHotel = function(hotel){
    let query = "select FN_ACTUALIZAR_ESTADO_HOTEL (?,?)";
    return new Promise((resolve, reject) => {
        con.query(query, [hotel.id,hotel.estado], (error, result, fields) => {
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

const obtenerHotelPorId = function(hotel){
    let query = "select * from HOTEL where id = ?";
    return new Promise((resolve, reject) => {
        con.query(query,[hotel.id], (error, result, fields) => {
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

const obtenerHoteles = function(){
    let query = "select * from HOTEL";
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

module.exports.crearHotel = crearHotel;
module.exports.actualizarHotel = actualizarHotel;
module.exports.actualizarEstadoHotel = actualizarEstadoHotel;
module.exports.obtenerHoteles = obtenerHoteles;
module.exports.obtenerHotelPorId = obtenerHotelPorId;

