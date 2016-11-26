
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
        testcontext Testcxt = new testcontext();
        //
        // GET: /Test/
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult Adddetails(TestModel Datas)
        {
            //testcontext Testcxt = new testcontext();
            Testcxt.Detail.Add(Datas);
            Testcxt.SaveChanges();
            return new JsonResult();
        }
        [HttpGet]
        public JsonResult GetData()
        {
            //List<TestModel> tst = new List<TestModel>();
           // tst = Testcxt.Detail.ToList();
            var data = Testcxt.Detail.ToList();//------->This method is also correct

            return Json(data, JsonRequestBehavior.AllowGet);
            //return new JsonResult();
        }
    }
}