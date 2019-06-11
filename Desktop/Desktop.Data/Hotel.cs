using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Desktop.Data
{
    public class Hotel
    {
        private string _url;
        public int ID { get; set; }
        public string Direccion { get; set; }
        public string Region { get; set; }
        public long Telefono { get; set; }
        public bool Estado { get; set; }
        public string Administrador { get; set; }

        public Hotel()
        {
            _url = "http://127.0.0.1:3000/";
        }
        public bool CrearHotel(Hotel hotel)
        {
            Conexion.Url = _url;
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var queryParams = new Dictionary<string, string>
            {
                { "direccion", hotel.Direccion },
                { "region", hotel.Region },
                { "telefono", hotel.Telefono.ToString() },
                { "administrador", hotel.Administrador },
            };
            return Conexion.Post(queryParams, "crearHotel"); ;
        }

        public bool ActualizarHotel(Hotel hotel)
        {
            Conexion.Url = _url;
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var queryParams = new Dictionary<string, string>
            {
                { "id", hotel.ID.ToString() },
                { "direccion", hotel.Direccion },
                { "region", hotel.Region },
                { "telefono", hotel.Telefono.ToString() },
                { "administrador", hotel.Administrador },
            };
            return Conexion.Post(queryParams, "actualizarHotel"); ;
        }

        public bool ActualizarEstadoHotel(int id, bool estado)
        {
            Conexion.Url = _url;
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var queryParams = new Dictionary<string, string>
            {
                { "id", id.ToString() },
                { "estado", estado ? "1" : "0" },
            };
            return Conexion.Post(queryParams, "actualizarEstadoHotel"); ;
        }

        public Hotel ObtenerHotelPorId(int id)
        {
            Conexion.Url = _url;
            var url = new UriBuilder(_url);
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var queryParams = new Dictionary<string, string> { { "id", id.ToString() } };
            var content = new FormUrlEncodedContent(queryParams);
            var res = Conexion.Cliente.PostAsync(_url + "obtenerHotelPorId", content).Result
                .Content.ReadAsStringAsync().Result;
            Hotel hotel = JsonConvert.DeserializeObject<List<Hotel>>(res)[0];
            return hotel;
        }

        public List<Hotel> ObtenerHoteles()
        {
            Conexion.Url = _url;
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var res = Conexion.Cliente.GetStringAsync(_url + "obtenerHoteles").Result;
            List<Hotel> empresas = JsonConvert.DeserializeObject<List<Hotel>>(res);
            return empresas;
        }
    }
}
