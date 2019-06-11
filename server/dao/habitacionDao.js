const con = require("../dao/connection.js");

const crearHabitacion = function(habitacion){
    console.log(habitacion);
    let query = "select FN_CREAR_HABITACION (?,?,?,?,?)";
    return new Promise((resolve, reject) => {
        con.query(query, [habitacion.numero,habitacion.capacidad,habitacion.camas,habitacion.banos,habitacion.hotelId], (error, result, fields) => {
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

const actualizarHabitacion = function(habitacion){
    let query = "select FN_ACTUALIZAR_HABITACION (?,?,?,?,?,?)";
    return new Promise((resolve, reject) => {
        con.query(query, [habitacion.id,habitacion.numero,habitacion.capacidad,habitacion.camas,habitacion.banos,habitacion.hotelId], (error, result, fields) => {
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

const actualizarEstadoHabitacion = function(habitacion){
    let query = "select FN_ACTUALIZAR_ESTADO_HABITACION (?,?)";
    return new Promise((resolve, reject) => {
        con.query(query, [habitacion.id,habitacion.estado], (error, result, fields) => {
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

const obtenerHabitaciones = function(){
    let query = "select * from HABITACION where ESTADO != 0";
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

const obtenerHabitacionPorId = function(habitacion){
    let query = "select * from HABITACION where ID = ?";
    return new Promise((resolve, reject) => {
        con.query(query,[habitacion.id], (error, result, fields) => {
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

module.exports.crearHabitacion = crearHabitacion;
module.exports.actualizarHabitacion = actualizarHabitacion;
module.exports.actualizarEstadoHabitacion = actualizarEstadoHabitacion;
module.exports.obtenerHabitaciones = obtenerHabitaciones;
module.exports.obtenerHabitacionPorId = obtenerHabitacionPorId;

