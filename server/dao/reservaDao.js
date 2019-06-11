const con = require("../dao/connection.js");

const crearReserva = function(reserva){
    let query = "select FN_CREAR_RESERVA (?,?,?,?,?,?)";
        return new Promise((resolve, reject) => {
            con.query(query, [reserva.fechaInicio, reserva.fechaTermino, reserva.total, reserva.medioPago, reserva.habitacionId, reserva.usuarioId], (error, result, fields) => {
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

const actualizarReserva = function(reserva){
    let query = "select FN_ACTUALIZAR_RESERVA (?,?,?)";
    return new Promise((resolve, reject) => {
        con.query(query, [reserva.id,reserva.fechaInicio,reserva.fechaTermino], (error, result, fields) => {
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

const actualizarEstadoReserva = function(reserva){
    let query = "select FN_ACTUALIZAR_ESTADO_RESERVA (?,?)";
    return new Promise((resolve, reject) => {
        con.query(query, [reserva.id,reserva.estado], (error, result, fields) => {
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

const obtenerReservas = function(){
    let query = "select * from RESERVA";
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


module.exports.crearReserva = crearReserva;
module.exports.actualizarReserva = actualizarReserva;
module.exports.actualizarEstadoReserva = actualizarEstadoReserva;
module.exports.obtenerReservas = obtenerReservas;
