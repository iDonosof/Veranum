const con = require("../dao/connection.js");

const crearEmpresa = function(empresa){
    let query = "select FN_CREAR_EMPRESA (?,?,?,?)";
    return new Promise((resolve, reject) => {
        con.query(query, [empresa.rut,empresa.nombre,empresa.direccion,empresa.telefono], (error, result, fields) => {
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

const actualizarEmpresa = function(empresa){
    let query = "select FN_ACTUALIZAR_EMPRESA (?,?,?,?)";
    return new Promise((resolve, reject) => {
        con.query(query, [empresa.rut,empresa.nombre,empresa.direccion,empresa.telefono], (error, result, fields) => {
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

const actualizarEstadoEmpresa = function(empresa){
    let query = "select FN_ACTUALIZAR_ESTADO_EMPRESA (?,?)";
    return new Promise((resolve, reject) => {
        con.query(query, [empresa.rut,empresa.estado], (error, result, fields) => {
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

const obtenerEmpresaPorId = function(empresa){
    let query = "select * from EMPRESA where RUT = ?";
    return new Promise((resolve, reject) => {
        con.query(query,[empresa.rut],(error, result, fields) => {
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

const obtenerEmpresas = function(){
    let query = "select * from EMPRESA";
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
module.exports.crearEmpresa = crearEmpresa;
module.exports.actualizarEmpresa = actualizarEmpresa;
module.exports.actualizarEstadoEmpresa = actualizarEstadoEmpresa;
module.exports.obtenerEmpresas = obtenerEmpresas;
module.exports.obtenerEmpresaPorId = obtenerEmpresaPorId;
