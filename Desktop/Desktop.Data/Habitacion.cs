using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Desktop.Data
{
    public class Habitacion
    {
        private string _url;
        public int Id { get; set; }
        public int Numero { get; set; }
        public int Camas { get; set; }
        public int Capacidad { get; set; }
        public int Banos { get; set; }
        public bool Estado { get; set; }
        public int HotelId { get; set; }
        public Hotel Hotel { get; set; }

        public Habitacion()
        {
            _url = "http://127.0.0.1:3000/";
            GetHelper<Habitacion>.Url = _url;
            Conexion.Cliente.BaseAddress = new Uri(_url);
        }
        public bool CrearHabitacion(Habitacion habitacion)
        {
            Conexion.Url = _url;
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var queryParams = new Dictionary<string, string>
            {
                { "numero", habitacion.Numero.ToString() },
                { "capacidad", habitacion.Capacidad.ToString() },
                { "camas", habitacion.Camas.ToString() },
                { "banos", habitacion.Banos.ToString() },
                { "hotelId", habitacion.HotelId.ToString() },
            };
            return Conexion.Post(queryParams, "crearHabitacion");
        }

        public bool ActualizarHabitacion(Habitacion habitacion)
        {
            Conexion.Url = _url;
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var queryParams = new Dictionary<string, string>
            {
                { "id", habitacion.Id.ToString() },
                { "numero", habitacion.Numero.ToString() },
                { "capacidad", habitacion.Capacidad.ToString() },
                { "camas", habitacion.Camas.ToString() },
                { "banos", habitacion.Banos.ToString() },
                { "hotelId", habitacion.HotelId.ToString() },
            };
            return Conexion.Post(queryParams, "actualizarHabitacion");
        }

        public bool ActualizarEstadoHabitacion(int id, bool estado)
        {
            Conexion.Url = _url;
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var queryParams = new Dictionary<string, string>
            {
                { "id", id.ToString() },
                { "estado", estado ? "1" : "0" },
            };
            return Conexion.Post(queryParams, "actualizarEstadoHabitacion");
        }

        public List<Habitacion> ObtenerHabitaciones()
        {
            Conexion.Url = _url;
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var res = Conexion.Cliente.GetStringAsync(_url + "obtenerHabitaciones").Result;
            List<Habitacion> habitaciones = JsonConvert.DeserializeObject<List<Habitacion>>(res);
            return habitaciones;
        }

        public List<Habitacion> ObtenerHabitacionPorId(int id)
        {

            return ObtenerHabitaciones().Where(h => h.HotelId == id).ToList();
        }

    }
}
