using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EmployeeRegistrationusing_angular_and_mvc.Startup))]
namespace EmployeeRegistrationusing_angular_and_mvc
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
