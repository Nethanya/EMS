
using EmployeeRegistrationusing_angular_and_mvc.Models;
using EmployeeRegistrationusing_angular_and_mvc.Models.Datamodels;
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
        // GET: /Test/
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult TrNgGridExample()
        {
            return View();
        }

        [HttpPost]
        public JsonResult Adddetails(TestModel Datas)
        {

            if (Datas != null)
            {
                int id = Datas.IDVm;
                TestModel tabtest = null;

                if (Testcxt.Detail.Count() > 0)
                {
                    tabtest = Testcxt.Detail.Where(x => x.IDVm == id).FirstOrDefault();
                }

                if (tabtest != null)
                {
                    tabtest.IDVm = Datas.IDVm;
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


        [HttpPost]
        public JsonResult GetData(TrngData dat)
        {
            var data = Testcxt.Detail;// by fdefault it is queryable 
            int totolRows = data.Count();

            var paging = data.OrderBy(x => x.IDVm).Skip(dat.NoRowsVM * dat.CurrentPageVm).Take(dat.NoRowsVM);


            return Json(new ResultClass { List= paging.ToList(), TotalRows = totolRows }, JsonRequestBehavior.AllowGet);
            //return Json( dat.List = paging.ToList(), dat.TotalRows = totolRows, JsonRequestBehavior.AllowGet);

        }

        [HttpPost]
        public JsonResult Deletedetails(TestModel dat)
        {
            TestModel obj = Testcxt.Detail.Where(x => x.IDVm == dat.IDVm).FirstOrDefault();
            Testcxt.Detail.Remove(obj);
            Testcxt.SaveChanges();    

            return new JsonResult();
        }

    }

    public class ResultClass
    {
        public IEnumerable<TestModel> List { get; set; }
        public int TotalRows { get; set; }

    }
}