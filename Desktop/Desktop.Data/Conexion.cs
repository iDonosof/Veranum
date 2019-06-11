using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Http;
using System.Net.Http.Headers;

namespace Desktop.Data
{
    public static class Conexion
    {
        private static HttpClient _cliente;
        public static string Url { get; set; }
        public static HttpClient Cliente
        {
            get
            {
                _cliente = new HttpClient();
                return _cliente;
            }
            set { _cliente = value; }
        }

        public static bool Post (Dictionary<string, string> param, string metodo)
        {
            try
            {
                _cliente.BaseAddress = new Uri(Url);
                var content = new FormUrlEncodedContent(param);
                var res = Cliente.PostAsync(Url + metodo, content).Result
                .Content.ReadAsStringAsync().Result;
                if (res == "1")
                    return true;
                else
                    return false;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}
