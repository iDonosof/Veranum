using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Desktop.Data
{
    public class Servicio
    {
        private string _url;
        public int ID { get; set; }
        public string Nombre { get; set; }
        public string  Descripcion { get; set; }
        public bool Estado { get; set; }
        public int HotelID { get; set; }
        public Hotel Hotel { get; set; }
        public Servicio()
        {
            _url = "http://127.0.0.1:3000/";
            GetHelper<Servicio>.Url = _url;
            Conexion.Cliente.BaseAddress = new Uri(_url);
        }

        public bool CrearServicio(Servicio servicio)
        {
            Conexion.Url = _url;
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var queryParams = new Dictionary<string, string>
            {
                { "nombre", servicio.Nombre },
                { "descripcion", servicio.Descripcion },
                { "hotelId", servicio.HotelID.ToString() },
                { "estado", servicio.Estado ? "1" : "0" },
            };
            return Conexion.Post(queryParams, "crearServicio");
        }

        public bool ActualizarServicio(Servicio servicio)
        {
            Conexion.Url = _url;
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var queryParams = new Dictionary<string, string>
            {
                { "id", servicio.ID.ToString() },
                { "nombre", servicio.Nombre },
                { "descripcion", servicio.Descripcion },
                { "hotelId", servicio.HotelID.ToString() },

            };
            return Conexion.Post(queryParams, "actualizarServicio");
        }

        public bool ActualizarEstadoServicio(int id, bool estado)
        {
            Conexion.Url = _url;
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var queryParams = new Dictionary<string, string>
            {
                { "id", id.ToString() },
                { "estado", estado ? "1" : "0" },
            };
            return Conexion.Post(queryParams, "actualizarEstadoServicio");
        }

        public List<Servicio> ObtenerServiciosPorHotel(int hotelId)
        {
            GetHelper<PrecioDia>.Url = _url;
            var queryParams = new Dictionary<string, string>
            {
                { "hotelId", hotelId.ToString() },
            };
            return GetHelper<Servicio>.GetListPorId(queryParams, "obtenerServiciosPorHotel");
        }

        public List<Servicio> ObtenerServicios()
        {
            GetHelper<PrecioDia>.Url = _url;
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var res = Conexion.Cliente.GetStringAsync(_url + "obtenerServicios").Result;
            List<Servicio> servicios = JsonConvert.DeserializeObject<List<Servicio>>(res);
            return servicios;
        }
    }
}
