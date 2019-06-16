using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net;
using System.Web;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Desktop.Data
{
    public class Usuario
    {
        private string _url;
        public int Rut { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Telefono { get; set; }
        public string Direccion { get; set; }
        public string Correo { get; set; }
        public int Tipo { get; set; }
        public int Estado { get; set; }
        public string NombreUsuario { get; set; }
        public string Contrasena { get; set; }
        public int? EmpresaID { get; set; }
        public Empresa Empresa { get; set; }

        public Usuario()
        {
            _url = "http://127.0.0.1:3000/";
        }


        public bool CrearUsuario(Usuario usuario)
        {
            Conexion.Url = _url;
            var url = new UriBuilder(_url);
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var queryParams = new Dictionary<string, string>
            {
                { "rut", usuario.Rut.ToString() },
                { "nombre", usuario.Nombre},
                { "apellido", usuario.Apellido },
                { "telefono", usuario.Telefono },
                { "direccion", usuario.Direccion },
                { "correo", usuario.Correo },
                { "nombreUsuario", usuario.NombreUsuario },
                { "contrasena", usuario.Contrasena },
                { "empresaid", EmpresaID.ToString() ?? "null" }
            };
            try
            {
                var content = new FormUrlEncodedContent(queryParams);
                var res = Conexion.Cliente.PostAsync(_url + "crearUsuario", content).Result
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

        public Usuario ObtenerUsuarioPorId(int rut)
        {
            Conexion.Url = _url;
            var url = new UriBuilder(_url);
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var queryParams = new Dictionary<string, string> { { "rut", rut.ToString() } };
            var content = new FormUrlEncodedContent(queryParams);
            var res = Conexion.Cliente.PostAsync(_url + "obtenerUsuarioPorId/?rut=", content).Result
                .Content.ReadAsStringAsync().Result;
            Usuario usuario = JsonConvert.DeserializeObject<List<Usuario>>(res)[0];
            return usuario;
        }

        public List<Usuario> ObtenerUsuarios()
        {
            Conexion.Url = _url;
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var res = Conexion.Cliente.GetStringAsync(_url + "obtenerUsuarios").Result;
            List<Usuario> usuarios = JsonConvert.DeserializeObject<List<Usuario>>(res);
            return usuarios;
        }

        public bool ActualizarUsuario(Usuario usr)
        {
            Conexion.Url = _url;
            var url = new UriBuilder(_url);
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var queryParams = new Dictionary<string, string>
            {
                { "rut", usr.Rut.ToString() },
                { "nombre", usr.Nombre},
                { "apellido", usr.Apellido },
                { "telefono", usr.Telefono },
                { "direccion", usr.Direccion },
                { "correo", usr.Correo },
                { "nombreUsuario", usr.NombreUsuario },
                { "contrasena", usr.Contrasena },
                { "empresaid", usr.EmpresaID.ToString() }
            };
            try
            {
                var content = new FormUrlEncodedContent(queryParams);
                var res = Conexion.Cliente.PostAsync(_url + "actualizarUsuario", content).Result
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

        public bool ActualizarEstadoUsuario(int rut, bool estado)
        {
            Conexion.Url = _url;
            var url = new UriBuilder(_url);
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var queryParams = new Dictionary<string, string>
            {
                { "rut", rut.ToString() },
                { "estado", estado ? "1" : "0" }
            };
            try
            {
                var content = new FormUrlEncodedContent(queryParams);
                var res = Conexion.Cliente.PostAsync(_url + "actualizarEstadoUsuario", content).Result
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

        public bool Login(string nombreUsuario, string contrasena)
        {
            Conexion.Url = _url;
            var url = new UriBuilder(_url);
            Conexion.Cliente.BaseAddress = new Uri(_url);
            var queryParams = new Dictionary<string, string>
            {
                { "nombreUsuario", nombreUsuario },
                { "contrasena", contrasena }
            };
            try
            {
                var content = new FormUrlEncodedContent(queryParams);
                var res = Conexion.Cliente.PostAsync(_url + "login", content).Result
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

        public Usuario ObtenterUsuarioPorLogin(string nombreUsuario, string contrasena)
        {
            var usrs =  ObtenerUsuarios();
            return usrs.FirstOrDefault(u => u.NombreUsuario == nombreUsuario && u.Contrasena == contrasena);
            //foreach(var usr in usrs)
            //{
            //    if (usr.NombreUsuario == nombreUsuario && usr.Contrasena == contrasena)
            //    {
            //        return usr;
            //    }
            //}
            //return null;
        }
    }
}
