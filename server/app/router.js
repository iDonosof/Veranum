const usuario = require("../bussines/usuario.js");
const empresa = require("../bussines/empresa.js");
const hotel = require("../bussines/hotel.js");
const producto = require("../bussines/producto.js");
const habitacion = require("../bussines/habitacion.js");
const promocion = require("../bussines/promocion.js");
const precioDia = require("../bussines/precioDia.js");
const reserva = require("../bussines/reserva.js");
const servicio = require("../bussines/servicio.js");


module.exports = function(app)
{
  app.get("/", (req, res) => {
      res.send("[{funca la wea}]");
  });

  app.post("/crearEmpresa", (req, res) => {
    empresa.crearEmpresa(req, res);
  });
  
  app.post("/actualizarEmpresa", (req, res) => {
    empresa.actualizarEmpresa(req, res);
  });
  
  app.post("/actualizarEstadoEmpresa", (req, res) => {
    empresa.actualizarEstadoEmpresa(req, res);
  });

  app.post("/obtenerEmpresaPorId", (req, res) => {
    empresa.obtenerEmpresaPorId(req, res);
  });

  app.get("/obtenerEmpresas", (req, res) => {
    empresa.obtenerEmpresas(req, res);
  });

  app.post("/login", (req, res) => {
    usuario.login(req, res);
  });

  app.post("/loginDatos", (req, res) => {
    usuario.loginDatos(req, res); 
  });
  
  app.post("/crearUsuario", (req, res) => {
    usuario.crearUsuario(req, res);
  });
  
  app.post("/actualizarUsuario", (req, res) => {
    usuario.actualizarUsuario(req, res);
  });
  
  app.post("/actualizarEstadoUsuario", (req, res) => {
    usuario.actualizarEstadoUsuario(req, res);
  });

  app.post("/obtenerUsuarioPorId", (req, res) => {
    usuario.obtenerUsuarioPorId(req, res);
  });

  app.get("/obtenerUsuarios", (req, res) => {
    usuario.obtenerUsuarios(req, res);
  });

  app.post("/crearHotel", (req, res) => {
    hotel.crearHotel(req, res);
  });
    
  app.post("/actualizarHotel", (req, res) => {
    hotel.actualizarHotel(req, res);
  });
    
  app.post("/actualizarEstadoHotel", (req, res) => {
    hotel.actualizarEstadoHotel(req, res);
  });

  app.post("/obtenerHotelPorId", (req, res) => {
    hotel.obtenerHotelPorId(req, res);
  });

  app.get("/obtenerHoteles", (req, res) => {
    hotel.obtenerHoteles(req, res);
  });

  app.post("/crearProducto", (req, res) => {
    producto.crearProducto(req, res);
  });
      
  app.post("/actualizarProducto", (req, res) => {
    producto.actualizarProducto(req, res);
  });
      
  app.post("/actualizarEstadoProducto", (req, res) => {
    producto.actualizarEstadoProducto(req, res);
  });
  
  app.post("/obtenerProductoPorId", (req, res) => {
    producto.obtenerProductoPorId(req, res);
  });

  app.post("/obtenerProductosPorHotel", (req, res) => {
    producto.obtenerProductosPorHotel(req, res);
  });
  
  app.get("/obtenerProductos", (req, res) => {
    producto.obtenerProductos(req, res);
  });

  app.post("/crearHabitacion", (req, res) => {
    habitacion.crearHabitacion(req, res);
  });
        
  app.post("/actualizarHabitacion", (req, res) => {
    habitacion.actualizarHabitacion(req, res);
  });
        
  app.post("/actualizarEstadoHabitacion", (req, res) => {
    habitacion.actualizarEstadoHabitacion(req, res);
  });
    
  app.post("/obtenerHabitacionPorId", (req, res) => {
    habitacion.obtenerHabitacionPorId(req, res);
  });
    
  app.get("/obtenerHabitaciones", (req, res) => {
    habitacion.obtenerHabitaciones(req, res);
  });
      
  app.post("/crearPromocion", (req, res) => {
    promocion.crearPromocion(req, res);
  });
          
  app.post("/actualizarPromocion", (req, res) => {
    promocion.actualizarPromocion(req, res);
  });
          
  app.post("/actualizarEstadoPromocion", (req, res) => {
    promocion.actualizarEstadoPromocion(req, res);
  });
      
  app.post("/obtenerPromocionesPorHabitacion", (req, res) => {
    promocion.obtenerPromocionesPorHabitacion(req, res);
  });
      
  app.get("/obtenerPromociones", (req, res) => {
    promocion.obtenerPromociones(req, res);
  });

  app.post("/crearPrecioDia", (req, res) => {
    precioDia.crearPrecioDia(req, res);
  });

  app.post("/actualizarPrecioDia", (req, res) => {
    precioDia.actualizarPrecioDia(req, res);
  });
  
  app.post("/obtenerPrecioDiaPorFecha", (req, res) => {
    precioDia.obtenerPrecioDiaPorFecha(req, res);
  });

  app.post("/obtenerPrecioDiaPorFechaYHabitacionId", (req, res) => {
    precioDia.obtenerPrecioDiaPorFechaYHabitacionId(req, res);
  });

  app.post("/crearReserva", (req, res) => {
    reserva.crearReserva(req, res);
  });
          
  app.post("/actualizarReserva", (req, res) => {
    reserva.actualizarReserva(req, res);
  });
          
  app.post("/actualizarEstadoReserva", (req, res) => {
    reserva.actualizarEstadoReserva(req, res);
  });
  
  app.get("/obtenerReservas", (req, res) => {
    reserva.obtenerReservas(req, res);
  });

  
  app.post("/crearServicio", (req, res) => {
    servicio.crearServicio(req, res);
  });
          
  app.post("/actualizarServicio", (req, res) => {
    servicio.actualizarServicio(req, res);
  });
          
  app.post("/actualizarEstadoServicio", (req, res) => {
    servicio.actualizarEstadoServicio(req, res);
  });
  
  app.get("/obtenerServicios", (req, res) => {
    servicio.obtenerServicios(req, res);
  });

  app.post("/obtenerServiciosPorHotel", (req, res) => {
    servicio.obtenerServiciosPorHotel(req, res);
  });
}