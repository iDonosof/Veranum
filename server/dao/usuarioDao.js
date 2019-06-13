const con = require("../dao/connection.js");

const login = function(usuario){
    let query = "select FN_LOGIN(?, ?) ";
    return new Promise((resolve, reject) => {
        con.query(query, [usuario.nombreUsuario,usuario.contrasena], (error, result, fields) => {
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

const loginDatos = function( usuario ) {
    let query = "select RUT, NOMBREUSUARIO, TIPO from USUARIO where USUARIO.NOMBREUSUARIO = ? and USUARIO.CONTRASENA = ?";
    return new Promise( (resolve, reject) => {
        con.query(query, [usuario.username, usuario.contrasena], (error, result, fields) => {
            if(error) {
                console.log(error);
                reject(error);
                return;
            }
            resolve(result);
        });
    });
};

const crearUsuario = function(usuario){
    let query = "select FN_CREAR_USUARIO (?,?,?,?,?,?,?,?,?)";
    return new Promise((resolve, reject) => {
        con.query(query, [usuario.rut, usuario.nombre, usuario.apellido, usuario.telefono, usuario.direccion, usuario.correo, usuario.nombreUsuario, usuario.contrasena,usuario.empresaId], (error, result, fields) => {
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

const actualizarUsuario = function(usuario){
    let query = "select FN_ACTUALIZAR_USUARIO (?,?,?,?,?,?,?,?,?)";
    return new Promise((resolve, reject) => {
        con.query(query, [usuario.rut, usuario.nombre, usuario.apellido, usuario.telefono, usuario.direccion, usuario.correo, usuario.nombreUsuario, usuario.contrasena,usuario.empresaid], (error, result, fields) => {
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

const actualizarEstadoUsuario = function(usuario){
    let query = "select FN_ACTUALIZAR_ESTADO_USUARIO (?,?)";
    return new Promise((resolve, reject) => {
        con.query(query, [usuario.rut, usuario.tipo], (error, result, fields) => {
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

const obtenerUsuarioPorId = function(usuario){
    let query = "select * from USUARIO where RUT = ?";
    return new Promise((resolve, reject) => {
        con.query(query,[usuario.rut], (error, result, fields) => {
            if(error){
                console.log(error);
                reject(error);
                return;
            }
            resolve(result); 
        });
    });
};

const obtenerUsuarios = function(){
    let query = "select * from USUARIO";
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

module.exports.login = login;
module.exports.crearUsuario = crearUsuario;
module.exports.actualizarUsuario = actualizarUsuario;
module.exports.actualizarEstadoUsuario = actualizarEstadoUsuario;
module.exports.obtenerUsuarioPorId = obtenerUsuarioPorId;
module.exports.obtenerUsuarios = obtenerUsuarios;
module.exports.loginDatos = loginDatos;