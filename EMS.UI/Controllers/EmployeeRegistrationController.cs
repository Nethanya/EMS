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

        public ActionResult Index()
        {
            return View();
        }

        //
        // GET: /EmployeeRegistration/
        public ActionResult EmployeeRegistration()
        {
            return View();
        }
        public string Adduser(EmployeeMaster EmployeeDetails)//here the  EmployeeMaster(table name) is the name inside dbset and EmployeeDetails is the parameter passed from angular js page.
        {
            EmpCntxt.Employee.Add(EmployeeDetails);//it is the name of given to the dbset
            EmpCntxt.SaveChanges();
            return "Employee Registered Successfully";
        }
	}
}