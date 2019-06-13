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
            resolve(result); 
        });
    });
};

const obtenerReservasPorUsuario = function ( rut ) {
    let query = "select reserva.ID, reserva.FECHA_INICIO, reserva.FECHA_TERMINO, reserva.TOTAL, reserva.MEDIO_PAGO, reserva.HABITACIONID, reserva.USUARIOID from reserva where reserva.USUARIOID = ? and reserva.ESTADO = 1";
    return new Promise (( resolve, reject ) => {
        con.query(query, [ rut ], (error, result, fields) => {
            if( error ) {
                console.log( error );
                reject( error );
                return;
            }
            resolve( result );
        });
    });
}

const obtenerReservasPorId = function ( id ) {
    let query = "select reserva.ID, reserva.FECHA_INICIO, reserva.FECHA_TERMINO, reserva.TOTAL, reserva.MEDIO_PAGO, reserva.HABITACIONID, reserva.USUARIOID from reserva where reserva.ID = ?";
    return new Promise( ( resolve, reject ) => {
        con.query( query, [ id ], ( error, result, fields ) => {
            if( error ) {
                console.log( error );
                reject( error );
                return;
            }
            resolve ( result );
        });
    });
}


module.exports.crearReserva = crearReserva;
module.exports.actualizarReserva = actualizarReserva;
module.exports.actualizarEstadoReserva = actualizarEstadoReserva;
module.exports.obtenerReservas = obtenerReservas;
module.exports.obtenerReservasPorUsuario = obtenerReservasPorUsuario;
module.exports.obtenerReservasPorId = obtenerReservasPorId;
