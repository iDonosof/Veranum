using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Desktop.Data
{
    public static class GetHelper<T>
    {
        public static string Url { get; set; }
        
        public static T Get(Dictionary<string, string> queryParams, string metodo)
        {
            Conexion.Cliente.BaseAddress = new Uri(Url);
            var content = new FormUrlEncodedContent(queryParams);
            var res = Conexion.Cliente.PostAsync(Url + metodo, content).Result
                .Content.ReadAsStringAsync().Result;
           return JsonConvert.DeserializeObject<List<T>>(res)[0];
        }

        public static List<T> GetList(string metodo)
        {
            Conexion.Cliente.BaseAddress = new Uri(Url);
            var res = Conexion.Cliente.GetStringAsync(Url + metodo).Result;
            return JsonConvert.DeserializeObject<List<T>>(res);
        }

        public static List<T> GetListPorId(Dictionary<string, string> queryParams, string metodo)
        {
            Conexion.Cliente.BaseAddress = new Uri(Url);
            var content = new FormUrlEncodedContent(queryParams);
            var res = Conexion.Cliente.PostAsync(Url + metodo, content).Result
                .Content.ReadAsStringAsync().Result;
            return JsonConvert.DeserializeObject<List<T>>(res);
        }

        

    }
}
