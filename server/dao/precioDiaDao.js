const con = require("../dao/connection.js");

const crearPrecioDia = function(precioDia){
    let query = "select FN_CREAR_PRECIODIA (?,?,?)";
    return new Promise((resolve, reject) => {
        con.query(query, [precioDia.fecha,precioDia.precio,precioDia.habitacionId], (error, result, fields) => {
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

const actualizarPrecioDia = function(precioDia){
    let query = "select FN_ACTUALIZAR_PRECIODIA (?,?,?,?)";
    return new Promise((resolve, reject) => {
        con.query(query, [precioDia.id,precioDia.fecha,precioDia.precio,precioDia.habitacionId], (error, result, fields) => {
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

const obtenerPrecioDiaPorFecha = function(precioDia){
    let query = "select PRECIO, HABITACIONID from PRECIODIA where FECHA = ?";
    return new Promise((resolve, reject) => {
        con.query(query, [precioDia.fecha], (error, result, fields) => {
            if(error){
                console.log(error);
                reject(error);
                return;
            }
            resolve(result); 
        });
    });
};

const obtenerPrecioDiaPorFechaYHabitacionId = function(precioDia){
    let query = "select * from PRECIODIA where FECHA = ? AND HABITACIONID = ?";
    return new Promise((resolve, reject) => {
        con.query(query, [precioDia.fecha,precioDia.habitacionId], (error, result, fields) => {
            if(error){
                console.log(error);
                reject(error);
                return;
            }
            // let keys = Object.keys(result[0]);
            resolve(result); 
        });
    });
};

module.exports.crearPrecioDia = crearPrecioDia;
module.exports.actualizarPrecioDia = actualizarPrecioDia;
module.exports.obtenerPrecioDiaPorFecha = obtenerPrecioDiaPorFecha;
module.exports.obtenerPrecioDiaPorFechaYHabitacionId = obtenerPrecioDiaPorFechaYHabitacionId;