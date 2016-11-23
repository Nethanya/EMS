using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace EmployeeRegistrationusing_angular_and_mvc.Models
{
    public class testcontext:DbContext
    {
        public DbSet<TestModel> Detail { get; set; }

    }
}