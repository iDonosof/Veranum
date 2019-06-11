using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Desktop.Data
{
    public class PrecioDia
    {
        private string _url;
        public int ID { get; set; }
        public DateTime Fecha { get; set; }
        public int Precio { get; set; }
        public int HabitacionID { get; set; }
        public Habitacion Habitacion { get; set; }

        public PrecioDia()
        {
            _url = "http://127.0.0.1:3000/";
            GetHelper<PrecioDia>.Url = _url;
            Conexion.Cliente.BaseAddress = new Uri(_url);
        }

        public bool CrearPrecioDia(PrecioDia precioDia)
        {
            Conexion.Url = _url;
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var queryParams = new Dictionary<string, string>
            {
                { "fecha", precioDia.Fecha.ToString() },
                { "precio", precioDia.Precio.ToString() },
                { "habitacionId", precioDia.HabitacionID.ToString() },
            };
            return Conexion.Post(queryParams, "crearPrecioDia");
        }

        public bool ActualizarPrecioDia(PrecioDia precioDia)
        {
            Conexion.Url = _url;
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var queryParams = new Dictionary<string, string>
            {
                { "id", precioDia.ID.ToString() },
                { "fecha", precioDia.Fecha.ToString() },
                { "precio", precioDia.Precio.ToString() },
                { "habitacionId", precioDia.HabitacionID.ToString() },
            };
            return Conexion.Post(queryParams, "actualizarPrecioDia");
        }

        public List<PrecioDia> ObtenerPrecioDiaPorFecha(DateTime fecha)
        {
            GetHelper<PrecioDia>.Url = _url;
            var queryParams = new Dictionary<string, string>
            {
                { "fecha", fecha.ToString() },
            };
            return GetHelper<PrecioDia>.GetListPorId(queryParams, "obtenerPrecioDiaPorFecha");
        }
        public List<PrecioDia> ObtenerPrecioDiaPorFechaYHabitacionId(DateTime fecha, int habitacionId)
        {
            GetHelper<PrecioDia>.Url = _url;
            var queryParams = new Dictionary<string, string>
            {
                { "fecha", fecha.ToString() },
                { "habitacionId", habitacionId.ToString() },
            };
            return GetHelper<PrecioDia>.GetListPorId(queryParams, "obtenerPrecioDiaPorFechaYHabitacionId");
        }
    }
}
