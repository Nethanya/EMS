using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
//using EmployeeRegistrationusing_angular_and_mvc.Models;



namespace EmployeeRegistrationusing_angular_and_mvc.Models
{
    public class EmployeeMasterContext:DbContext
    {
        public DbSet<EmployeeMaster> Employee { get; set; }
    }
}