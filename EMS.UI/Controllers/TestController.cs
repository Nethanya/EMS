
using EmployeeRegistrationusing_angular_and_mvc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
//using System.Data.Entity;
namespace EmployeeRegistrationusing_angular_and_mvc.Controllers
{
    public class TestController : Controller
    {
        //
        // GET: /Test/
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult Adddetails(TestModel Datas)
        {
            testcontext Testcxt = new testcontext();
            Testcxt.Detail.Add(Datas);
            return new JsonResult();
        }

	}
}