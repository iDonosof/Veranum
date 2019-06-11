using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Desktop.Data
{
    public class Promocion
    {
        private string _url;
        public int ID { get; set; }
        public DateTime Fecha { get; set; }
        public int Precio { get; set; }
        public bool Estado { get; set; }
        public int HabitacionID { get; set; }
        public Habitacion Habitacion { get; set; }
        public Promocion()
        {
            _url = "http://127.0.0.1:3000/";
            GetHelper<Promocion>.Url = _url;
            Conexion.Cliente.BaseAddress = new Uri(_url);
        }

        public bool CrearPromocion(Promocion promocion)
        {
            Conexion.Url = _url;
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var queryParams = new Dictionary<string, string>
            {
                { "fecha", promocion.Fecha.ToString() },
                { "precio", promocion.Precio.ToString() },
                { "habitacionId", promocion.HabitacionID.ToString() },

            };
            return Conexion.Post(queryParams, "crearPromocion");
        }

        public bool ActualizarPromocion(Promocion promocion)
        {
            Conexion.Url = _url;
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var queryParams = new Dictionary<string, string>
            {
                { "id", promocion.ID.ToString() },
                { "fecha", promocion.Fecha.ToString() },
                { "precio", promocion.Precio.ToString() },
                { "habitacionId", promocion.HabitacionID.ToString() },
            };
            return Conexion.Post(queryParams, "actualizarPromocion");
        }

        public bool ActualizarEstadoPromocion(int id, bool estado)
        {
            Conexion.Url = _url;
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var queryParams = new Dictionary<string, string>
            {
                { "id", id.ToString() },
                { "estado", estado ? "1" : "0" },
            };
            return Conexion.Post(queryParams, "actualizarEstadoPromocion");
        }

        public List<Promocion> ObtenerPromociones()
        {
            Conexion.Url = _url;
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var res = Conexion.Cliente.GetStringAsync(_url + "obtenerPromociones").Result;
            List<Promocion> promociones = JsonConvert.DeserializeObject<List<Promocion>>(res);
            return promociones;
        }

        public List<Promocion> ObtenerHabitacionPorId(int id)
        {
            GetHelper<PrecioDia>.Url = _url;
            var queryParams = new Dictionary<string, string>
            {
                { "habitacionId", id.ToString() },
            };
            return GetHelper<Promocion>.GetListPorId(queryParams, "obtenerPromocionesPorHabitacion");
        }
    }
}
