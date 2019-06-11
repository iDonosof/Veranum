using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Desktop.Data
{
    public class Empresa
    {
        private string _url;
        public int Rut { get; set; }
        public string Nombre { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }
        public bool Estado { get; set; }

        public Empresa()
        {
            _url = "http://127.0.0.1:3000/";
        }

        public bool CrearEmpresa(Empresa empresa)
        {
            Conexion.Cliente.BaseAddress = new Uri(_url);
            Conexion.Url = _url;
            var queryParams = new Dictionary<string, string>
            {
                { "rut", empresa.Rut.ToString() },
                { "nombre", empresa.Nombre },
                { "direccion", empresa.Direccion },
                { "telefono", empresa.Telefono.ToString() },
            };
            return Conexion.Post(queryParams, "crearEmpresa"); ;
        }

        public bool ActualizarEmpresa(Empresa empresa)
        {
            Conexion.Url = _url;
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var queryParams = new Dictionary<string, string>
            {
                { "rut", empresa.Rut.ToString() },
                { "nombre", empresa.Nombre },
                { "direccion", empresa.Direccion },
                { "telefono", empresa.Telefono.ToString() },
            };
            return Conexion.Post(queryParams, "actualizarEmpresa");
        }

        public bool ActualizarEstadoEmpresa(int rut, bool estado)
        {
            Conexion.Url = _url;

            Conexion.Cliente.BaseAddress = new Uri(_url);
            var queryParams = new Dictionary<string, string>
            {
                { "rut", rut.ToString() },
                { "estado", estado ? "1" : "0" },
            };
            return Conexion.Post(queryParams, "actualizarEstadoEmpresa");
        }

        public List<Empresa> ObtenerEmpresas()
        {
            Conexion.Url = _url;

            Conexion.Cliente.BaseAddress = new Uri(_url);
            var res = Conexion.Cliente.GetStringAsync(_url + "obtenerEmpresas").Result;
            List<Empresa> empresas = JsonConvert.DeserializeObject<List<Empresa>>(res);
            return empresas;
        }

        public Empresa ObtenerEmpresa(int rut)
        {
            Conexion.Url = _url;

            var url = new UriBuilder(_url);
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var queryParams = new Dictionary<string, string> { { "rut", rut.ToString() } };
            var content = new FormUrlEncodedContent(queryParams);
            var res = Conexion.Cliente.PostAsync(_url + "obtenerEmpresaPorId/?rut=", content).Result
                .Content.ReadAsStringAsync().Result;
            Empresa empresa = JsonConvert.DeserializeObject<List<Empresa>>(res)[0];
            return empresa;
        }
    }
}
