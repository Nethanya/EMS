
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

            if (Datas != null)
            {
                string nam = Datas.NameVm;
                TestModel tabtest = Testcxt.Detail.Where(x => x.NameVm == nam).FirstOrDefault();
                if (tabtest != null)
                {
                    tabtest.NameVm = Datas.NameVm;
                    tabtest.EmailVm = Datas.EmailVm;
                    tabtest.SubjectVm = Datas.SubjectVm;
                    tabtest.CommentVm = Datas.CommentVm;
                    Testcxt.SaveChanges();

                }
                else
                {
                    Testcxt.Detail.Add(Datas);

                    Testcxt.SaveChanges();
                }

            }
           
            return new JsonResult();
        }
        [HttpGet]
        public JsonResult GetData()
        {
            //List<TestModel> tst = new List<TestModel>();
           // tst = Testcxt.Detail.ToList();
            var data = Testcxt.Detail.ToList();

            return Json(data, JsonRequestBehavior.AllowGet);
            
        }

        [HttpPost]
        public JsonResult Deletedetails(TestModel Nam)
        {
            if (Nam.NameVm != null)
            {
                TestModel obj = Testcxt.Detail.Where(x => x.NameVm == Nam.NameVm).FirstOrDefault();
                Testcxt.Detail.Remove(obj);
                Testcxt.SaveChanges();
                            
            }
            return new JsonResult();
        }

    }
}