using System;
using System.Collections.Generic;
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
using System.Windows.Shapes;
using Desktop.Data;

namespace Desktop.Presentation
{
    /// <summary>
    /// Interaction logic for Window1.xaml
    /// </summary>
    public partial class Window1 : Window
    {
        public Window1()
        {
            InitializeComponent();
        }
        void Login()
        {
            Usuario usr = new Usuario();
            if(usr.Login(txtUsuario.Text, txtPass.Password))
            {
                var datosUsr = usr.ObtenterUsuarioPorLogin(txtUsuario.Text, txtPass.Password);
                var win = new MainWindow(datosUsr);
                this.Hide();
                win.ShowDialog();
            }
            else
            {
                MessageBox.Show("Nombre de usuario o contraseña incorrectos", "Advertencia", MessageBoxButton.OK, MessageBoxImage.Exclamation);
            }
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            Login();
        }
    }
}
