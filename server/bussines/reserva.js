const reservaDao = require("../dao/reservaDao.js");

const crearReserva = function(req, res){
    let reserva = 
    {
        fechaInicio: req.body.fechaInicio,
        fechaTermino: req.body.fechaTermino,
        total: parseInt(req.body.total),
        medioPago: req.body.medioPago,
        habitacionId: parseInt(req.body.habitacionId),
        usuarioId:  parseInt(req.body.usuarioId)        
    };
    reservaDao.crearReserva(reserva).then((success) => {
        res.send(success.toString());
    }).catch((error) => {
        console.log(error);
    });
};

const actualizarReserva = function(req, res){
    let reserva = 
    {
        id: parseInt(req.body.id),
        fechaInicio: req.body.fechaInicio,
        fechaTermino: req.body.fechaTermino    
    };
    reservaDao.actualizarReserva(reserva).then((success) => {
        res.send(success.toString());
    }).catch((error) => {
        console.log(error);
    });
};


const actualizarEstadoReserva= function(req, res){
    let reserva = 
    {
        id : parseInt(req.body.id),
        estado : parseInt(req.body.estado)
    };
    reservaDao.actualizarEstadoReserva(reserva).then((success) => {
        res.send(success.toString());
    }).catch((error) => {
        console.log(error);
    });
};

const obtenerReservas = function(req, res){
    reservaDao.obtenerReservas().then((success) => {
        res.send(success);
    }).catch((error) => {
        console.log(error);
    });
};

const obtenerReservasPorUsuario = function ( req, res ) {
    reservaDao.obtenerReservasPorUsuario( req.body.rut ).then( ( success ) => {
        res.send( success );
    }).catch( ( error ) => {
        console.log( error );
    });
};

const obtenerReservasPorId = function ( req, res ) {
    reservaDao.obtenerReservasPorId( req.body.id ).then( ( success ) => {
        res.send( success );
    }).catch( ( error ) => {
        console.log( error );
    });
}

module.exports.crearReserva = crearReserva;
module.exports.actualizarReserva = actualizarReserva;
module.exports.actualizarEstadoReserva = actualizarEstadoReserva;
module.exports.obtenerReservas = obtenerReservas;
module.exports.obtenerReservasPorUsuario = obtenerReservasPorUsuario;
module.exports.obtenerReservasPorId = obtenerReservasPorId;