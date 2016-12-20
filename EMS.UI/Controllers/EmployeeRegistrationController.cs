using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
using EmployeeRegistrationusing_angular_and_mvc.Models;
namespace EmployeeRegistrationusing_angular_and_mvc.Controllers
{
    public class EmployeeRegistrationController : Controller
    {
        EmployeeMasterContext EmpCntxt = new EmployeeMasterContext();

        public ActionResult EmployeeRegistration()
        {
            return View();
        }

      
    
	}
}