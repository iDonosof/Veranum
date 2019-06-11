using System;
using System.Collections.Generic;
using Desktop.Data;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Desktop.Test
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            var url = "http://127.0.0.1:3000/";
            GetHelper<Empresa>.Url = url;
            Empresa empresa = new Empresa
            {
                Rut = 123,
                Nombre = "wea",
                Direccion = "por ahi 123",
                Telefono = "+1345681"
            };
            //Bug en db, devuelve 2 siempre
            //empresa.ActualizarEmpresa(empresa);
            //empresa.ActualizarEstadoEmpresa(123, true);
            //var empresas = empresa.ObtenerEmpresas();
            //var emp = empresa.ObtenerEmpresa(123);
            Habitacion habitacion = new Habitacion
            {
                Numero = 69,
                Capacidad = 2,
                Camas = 1, 
                Banos = 1,
                HotelId = 1
            };
            bool res = false;
            res = habitacion.CrearHabitacion(habitacion);
            habitacion.Camas = 2;
            res = habitacion.ActualizarHabitacion(habitacion);
            res = habitacion.ActualizarEstadoHabitacion(1, false);
            var habs = habitacion.ObtenerHabitaciones();
            var hab = habitacion.ObtenerHabitacionPorId(3);
        }
    }
}
