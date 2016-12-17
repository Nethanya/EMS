using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using EmployeeRegistrationusing_angular_and_mvc.Models.Datamodels;

namespace EmployeeRegistrationusing_angular_and_mvc
{
    public class TestModel
    {
        [Key]
        public int IDVm { get; set; }
        public string NameVm { get; set; }
        public string EmailVm { get; set; }
        public string SubjectVm { get; set; }
        public string CommentVm { get; set; }
      ////  public TrngData TrngData { get; set;}

    }
}