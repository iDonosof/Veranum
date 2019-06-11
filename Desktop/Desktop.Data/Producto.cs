using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Desktop.Data
{
    public class Producto
    {
        private string _url;
        public int ID { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public int StockTotal { get; set; }
        public int StockDisponible { get; set; }
        public string Ubicacion { get; set; }
        public bool Estado { get; set; }
        public int HotelID { get; set; }
        public Hotel Hotel { get; set; }

        public Producto()
        {
            _url = "http://127.0.0.1:3000/";
            GetHelper<Producto>.Url = _url;
            Conexion.Cliente.BaseAddress = new Uri(_url);
        }

        public bool CrearProducto(Producto producto)
        {
            Conexion.Url = _url;
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var queryParams = new Dictionary<string, string>
            {
                { "nombre", producto.Nombre },
                { "descripcion", producto.Descripcion },
                { "stockTotal", producto.StockTotal.ToString() },
                { "stockDisponible", producto.StockDisponible.ToString() },            
                { "ubicacion", producto.Ubicacion },
                { "hotelId", producto.HotelID.ToString() },
            };
            return Conexion.Post(queryParams, "crearProducto"); 
        }

        public bool ActualizarProducto(Producto producto)
        {
            Conexion.Url = _url;
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var queryParams = new Dictionary<string, string>
            {
                { "id", producto.ID.ToString() },
                { "nombre", producto.Nombre },
                { "descripcion", producto.Descripcion },
                { "stockTotal", producto.StockTotal.ToString() },
                { "stockDisponible", producto.StockDisponible.ToString() },
                { "ubicacion", producto.Ubicacion },
                { "hotelId", producto.HotelID.ToString() },
            };
            return Conexion.Post(queryParams, "actualizarProducto"); ;
        }

        public bool ActualizarEstadoProducto(int id, bool estado)
        {
            Conexion.Url = _url;
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var queryParams = new Dictionary<string, string>
            {
                { "id", id.ToString() },
                { "estado", estado ? "1" : "0" },
            };
            return Conexion.Post(queryParams, "actualizarEstadoProducto"); ;
        }

        public List<Producto> ObtenerProductosPorHotel(int hotelId)
        {
            GetHelper<PrecioDia>.Url = _url;
            var queryParams = new Dictionary<string, string>
            {
                { "hotelId", hotelId.ToString() },
            };
            return GetHelper<Producto>.GetListPorId(queryParams, "obtenerProductosPorHotel");
        }

        public Producto ObtenerProductoPorId(int id)
        {
            GetHelper<PrecioDia>.Url = _url;
            var queryParams = new Dictionary<string, string>
            {
                { "id", id.ToString() },
            };
            return GetHelper<Producto>.Get(queryParams, "obtenerProductoPorId");
        }

        public List<Producto> ObtenerProductos()
        {
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var res = Conexion.Cliente.GetStringAsync(_url + "obtenerProductos").Result;
            List<Producto> productos = JsonConvert.DeserializeObject<List<Producto>>(res);
            return productos;
        }
    }
}
