using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

using Desktop.Data;

namespace Desktop.Presentation
{
    /// <summary>
    /// Lógica de interacción para MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private int hotelId = 0;
        private Usuario _usuario;
        private List<Habitacion> HabitacionesDelHotel = new List<Habitacion>();
        private List<Hotel> Hoteles = new List<Hotel>();
        public ObservableCollection<Empresa> Empresas { get; set; }
        public ObservableCollection<Producto> Productos { get; set; }
        public ObservableCollection<Habitacion> Habitaciones { get; set; }
        public ObservableCollection<Servicio> Servicios { get; set; }
        public ObservableCollection<PrecioDia> Precios { get; set; }
        public ObservableCollection<Promocion> Promociones { get; set; }

        public MainWindow(Usuario usr)
        {
            _usuario = usr;
            Empresas = new ObservableCollection<Empresa>();
            Productos = new ObservableCollection<Producto>();
            Habitaciones = new ObservableCollection<Habitacion>();
            Servicios = new ObservableCollection<Servicio>();
            Precios = new ObservableCollection<PrecioDia>();
            Promociones = new ObservableCollection<Promocion>();
            InitializeComponent();
            CargarHoteles();
            ValidarExistenciaDeHotel();
            CargarEmpresas();
        }

        void CargarHoteles()
        {
            var hotel = new Hotel();
            Hoteles = hotel.ObetenerHotelPorAdmin(_usuario.Rut);
            foreach (var h in Hoteles)
            {
                cbHotel.Items.Add(new ComboBoxItem { Content = h.Direccion, Tag = h.ID });
            }
            cbHotel.Items.Refresh();
            dtgHotel.ItemsSource = Hoteles;
        }

        private void CargarEmpresas()
        {
            Empresa empresa = new Empresa();
            Empresas.Clear();
            foreach (Empresa emp in empresa.ObtenerEmpresas())
            {
                Empresas.Add(emp);
            }
            dtgEmpresas.ItemsSource = Empresas;
        }

        private void CargarProductos()
        {
            Producto producto = new Producto();
            Productos.Clear();
            foreach (Producto pro in producto.ObtenerProductosPorHotel(hotelId))
            {
                Productos.Add(pro);
            }
            dtgProductos.ItemsSource = Productos;
        }

        private void CargarHabitaciones()
        {
            Habitacion habitacion = new Habitacion();
            Habitaciones.Clear();
            cbHabPrecio.Items.Clear();
            foreach (Habitacion hab in habitacion.ObtenerHabitacionPorId(hotelId))
            {
                Habitaciones.Add(hab);
            }
            dtgHabitacion.ItemsSource = Habitaciones;
            foreach (var h in Habitaciones)
            {
                cbHabPrecio.Items.Add(new ComboBoxItem { Content = h.Numero, Tag = h.Id });
            }
        }

        private void CargarServicios()
        {
            Servicio servicio = new Servicio();
            Servicios.Clear();
            foreach (Servicio ser in servicio.ObtenerServiciosPorHotel(hotelId))
            {
                Servicios.Add(ser);
            }
            dtgServicio.ItemsSource = Servicios;
        }

        void CargarPrecios()
        {
            int habId = int.Parse(((ComboBoxItem)cbHabPrecio.SelectedItem).Tag.ToString());
            PrecioDia precio = new PrecioDia();
            Precios.Clear();
            foreach (PrecioDia pre in precio.ObtenerPrecioDiaPorFechaYHabitacionId(DateTime.Now, habId))
            {
                Precios.Add(pre);
            }
            dtgPrecioDia.ItemsSource = Precios;
        }

        void CargarPromociones()
        {
            var habId = int.Parse(((ComboBoxItem)cbHabPromo.SelectedItem).Tag.ToString()); ;
            Promocion promocion = new Promocion();
            Promociones.Clear();
            foreach (Promocion promo in promocion.ObtenerHabitacionPorId(habId))
            {
                Promociones.Add(promo);
            }
            dtgPromocion.ItemsSource = Promociones;
        }

        void LimpiarCamposHotel()
        {
            txtDirecHotel.Text = "";
            txtHotelTelefono.Text = "";
            txtRegionHotel.Text = "";
        }

        void LimpiarCamposEmpresa()
        {
            txtRut.Text = "";
            txtNombre.Text = "";
            txtDireccion.Text = "";
            txtTelefono.Text = "";
            chkEstado.IsChecked = false;
        }

        void LimpiarCamposProductos()
        {
            txtProdDesc.Text = "";
            txtProdNombre.Text = "";
            txtStockDispo.Text = "";
            txtStockTotal.Text = "";
            txtUbiacion.Text = "";
            chkProdEstado.IsChecked = false;
        }

        void LimpiarCamposHabitacion()
        {
            txtHabNum.Text = "";
            txtCamas.Text = "";
            txtCapacidad.Text = "";
            txtBanos.Text = "";
            chkHabEstado.IsChecked = false;
        }

        void LimpiarCamposServicio()
        {
            txtNombreSer.Text = "";
            txtDescSer.Text = "";
            chkSerEstado.IsChecked = false;
        }

        void LimpiarCamposPrecioDia()
        {
            dtPrecioDia.Text = "";
            txtPrecio.Text = "";
            chkPrecioEstado.IsChecked = false;
        }

        void LimpiarCamposPromocion()
        {
            dtPromo.Text = "";
            txtPrecioPromo.Text = "";
            chkEstadoPromo.IsChecked = false;
        }

        void AgregarHotel()
        {
            var hotel = new Hotel
            {
                Direccion = txtDirecHotel.Text,
                Region = txtRegionHotel.Text,
                Telefono = int.Parse(txtHotelTelefono.Text),
                Administrador = _usuario.Rut
            };
            if(!hotel.CrearHotel(hotel))
            {
                MessageBox.Show("No se pudo agregar hotel");
            }
            ValidarExistenciaDeHotel();
        }

        void AgregarEmpresa()
        {
            Empresa empresa = new Empresa
            {
                Rut = int.Parse(txtRut.Text),
                Nombre = txtNombre.Text,
                Direccion = txtDireccion.Text,
                Telefono = txtTelefono.Text,
                Estado = chkEstado.IsChecked.Value ? true : false
            };
            if(empresa.CrearEmpresa(empresa))
            {
                MessageBox.Show("No se pudo agregar empresa");
            }
        }

        void AgregarProducto()
        {
            int stockDisponible = 0;
            int stockTotal = 0;
            if(!int.TryParse(txtStockDispo.Text, out stockDisponible) ||
                !int.TryParse(txtStockTotal.Text, out stockTotal))
            {
                MessageBox.Show("campo stock disponible o stock total, solo deben ser numeros");
                return;
            }
            var prod = new Producto
            {
                Descripcion = txtProdDesc.Text,
                HotelID = hotelId,
                Nombre = txtProdNombre.Text,
                StockDisponible = int.Parse(txtStockDispo.Text),
                StockTotal = int.Parse(txtStockTotal.Text),
                Ubicacion = txtUbiacion.Text,
                Estado = chkProdEstado.IsChecked.Value ? true : false
            };
            if(!prod.CrearProducto(prod))
            {
                MessageBox.Show("No se pudo agregar producto");
            }
        }

        void AgregarHabitacion()
        {
            int banos = 0, camas = 0, capacidad = 0;
            if(!int.TryParse(txtBanos.Text, out banos) || !int.TryParse(txtCamas.Text, out camas) ||
                !int.TryParse(txtCapacidad.Text, out capacidad))
            {
                MessageBox.Show("los campos deben ser numericos");
                return;
            }
            var hab = new Habitacion
            {
                Banos = int.Parse(txtBanos.Text),
                Camas = int.Parse(txtCamas.Text),
                Capacidad = int.Parse(txtCapacidad.Text),
                Numero = int.Parse(txtHabNum.Text),
                HotelId = hotelId,
                Estado = chkHabEstado.IsChecked.Value ? true : false
            };
            if(!hab.CrearHabitacion(hab))
            {
                MessageBox.Show("No se pudo agregar habitacion");
            }
        }

        void AgregarServicio()
        {
            var ser = new Servicio
            {
                Descripcion = txtDescSer.Text,
                HotelID = hotelId,
                Nombre = txtNombreSer.Text,
                Estado = chkSerEstado.IsChecked.Value ? true : false
            };
            if(!ser.CrearServicio(ser))
            {
                MessageBox.Show("No se pudo agregar servicio");
            }
        }

        void AgregarPrecioDia()
        {
            int pre = 0;
            if(!int.TryParse(txtPrecio.Text, out pre))
            {
                MessageBox.Show("El precio debe ser numerico y solo numeros enteros");
                return;
            }
            var precio = new PrecioDia
            {
                Fecha = DateTime.Parse(dtPrecioDia.Text),
                Precio = int.Parse(txtPrecio.Text),
                HabitacionID = int.Parse(((ComboBoxItem)cbHabPrecio.SelectedItem).Tag.ToString()),
               
            };
            if(!precio.CrearPrecioDia(precio))
            {
                MessageBox.Show("No se pudo agregar precio");
            }
        }

        void AgregarPromocion()
        {
            int pre = 0;
            if (!int.TryParse(txtPrecioPromo.Text, out pre))
            {
                MessageBox.Show("El precio debe ser numerico y solo numeros enteros");
                return;
            }
            var promo = new Promocion
            {
                Fecha = DateTime.Parse(dtPrecioDia.Text),
                Precio = int.Parse(txtPrecio.Text),
                HabitacionID = int.Parse(((ComboBoxItem)cbHabPrecio.SelectedItem).Tag.ToString()),
                Estado = true,
            };
            if(promo.CrearPromocion(promo))
            {
                MessageBox.Show("No se pudo agregar promocion");

            }
        }
        
        void ValidarExistenciaDeHotel()
        {
            var hotel = new Hotel();
            if (hotel.ObetenerHotelPorAdmin(_usuario.Rut).Count == 0)
            {
                tbEmpresas.IsEnabled = false;
                tbHabitacion.IsEnabled = false;
                tbPrecioDia.IsEnabled = false;
                tbPromocion.IsEnabled = false;
                tbServicio.IsEnabled = false;
                tbProducto.IsEnabled = false;
            }
            else
            {
                tbEmpresas.IsEnabled = true;
                tbHabitacion.IsEnabled = true;
                tbPrecioDia.IsEnabled = true;
                tbPromocion.IsEnabled = true;
                tbProducto.IsEnabled = true;
                tbServicio.IsEnabled = true;
            }
        }

        private void CbHotel_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            var tag = ((ComboBoxItem)cbHotel.SelectedItem).Tag.ToString();
            hotelId = int.Parse(tag);
            CargarHabitaciones();
            CargarProductos();
            CargarServicios();
        }

        private void btnGuardarHotel_Click(object sender, RoutedEventArgs e)
        {
            AgregarHotel();
            CargarHoteles();
            LimpiarCamposHotel();
        }

        private void btnGuardarEmpresa_Click(object sender, RoutedEventArgs e)
        {
            AgregarEmpresa();
            CargarEmpresas();
            LimpiarCamposEmpresa();
        }

        private void btnGuardarProd_Click(object sender, RoutedEventArgs e)
        {
            
            AgregarProducto();
            CargarProductos();
            LimpiarCamposProductos();
        }

        private void btnGuardarHab_Click(object sender, RoutedEventArgs e)
        {
            AgregarHabitacion();
            CargarHabitaciones();
            LimpiarCamposHabitacion();
        }

        private void btnGuardarSer_Click(object sender, RoutedEventArgs e)
        {
            AgregarServicio();
            CargarServicios();
            LimpiarCamposServicio();
        }

        private void btnGuardarPrecio_Click(object sender, RoutedEventArgs e)
        {
            AgregarPrecioDia();
            CargarPrecios();
            LimpiarCamposPrecioDia();
        }

        private void btnGuardarPromo_Click(object sender, RoutedEventArgs e)
        {
            AgregarPromocion();
            CargarPromociones();
            LimpiarCamposPromocion();
        }

        private void CbHabPrecio_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            CargarPrecios();
        }

        private void CbHabPromo_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            CargarPromociones();
        }
    }
}
