using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Desktop.Data
{
    public class Reserva
    {
        private string _url;
        public int ID { get; set; }
        public DateTime FechaInicio { get; set; }
        public DateTime FechaFin { get; set; }
        public int Total { get; set; }
        public int MedioPago { get; set; }
        public int Estado { get; set; }
        public int HabitacionID { get; set; }
        public Habitacion Habitacion { get; set; }
        public int UsuarioID { get; set; }
        public Usuario Usuario { get; set; }

        public Reserva()
        {
            _url = "http://127.0.0.1:3000/";
            GetHelper<Reserva>.Url = _url;
            Conexion.Cliente.BaseAddress = new Uri(_url);
        }

        public bool CrearReserva(Reserva reserva)
        {
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var queryParams = new Dictionary<string, string>
            {
                { "", "" },
            };
            return Conexion.Post(queryParams, "crearReserva");
        }

        public bool ActualizarReserva(Reserva reserva)
        {
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var queryParams = new Dictionary<string, string>
            {
                { "", "" },
            };
            return Conexion.Post(queryParams, "actualizarReserva");
        }

        public bool ActualizarEstadoReserva(int id, bool estado)
        {
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var queryParams = new Dictionary<string, string>
            {
                { "id", id.ToString() },
                { "estado", estado ? "1" : "0" },
            };
            return Conexion.Post(queryParams, "actualizarEstadoReserva");
        }

        public List<Reserva> ObtenerPromociones()
        {
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var res = Conexion.Cliente.GetStringAsync(_url + "obtenerPromociones").Result;
            List<Reserva> reservas = JsonConvert.DeserializeObject<List<Reserva>>(res);
            return reservas;
        }
    }
}
