const con = require("../dao/connection.js");

const crearPromocion = function(promocion){
    let query = "select FN_CREAR_PROMOCION (?,?,?)";
    return new Promise((resolve, reject) => {
        con.query(query, [promocion.fecha,promocion.precio,promocion.habitacionId], (error, result, fields) => {
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

const actualizarPromocion = function(promocion){
    let query = "select FN_ACTUALIZAR_PROMOCION (?,?,?,?)";
    return new Promise((resolve, reject) => {
        con.query(query, [promocion.id,promocion.fecha,promocion.precio,promocion.habitacionId], (error, result, fields) => {
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

const actualizarEstadoPromocion = function(promocion){
    let query = "select FN_ACTUALIZAR_ESTADO_PROMOCION (?,?)";
    return new Promise((resolve, reject) => {
        con.query(query, [promocion.id,promocion.estado], (error, result, fields) => {
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

const obtenerPromociones = function(){
    console.log('aqui DAO')
    let query = "select * from PROMOCION";
    return new Promise((resolve, reject) => {
        con.query(query,(error, result, fields) => {
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

const obtenerPromocionesPorhabitacion = function(promocion){
    let query = "select * from PROMOCION where HABITACIONID = ?";
    return new Promise((resolve, reject) => {
        con.query(query, [promocion.habitacionId],(error, result, fields) => {
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

module.exports.crearPromocion = crearPromocion;
module.exports.actualizarPromocion = actualizarPromocion;
module.exports.actualizarEstadoPromocion = actualizarEstadoPromocion;
module.exports.obtenerPromocionesPorhabitacion = obtenerPromocionesPorhabitacion;
module.exports.obtenerPromociones = obtenerPromociones;
