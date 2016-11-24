using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;


namespace EmployeeRegistrationusing_angular_and_mvc
{
    public class TestModel
    {
        [Key]
        public string NameVm { get; set; }
        public string EmailVm { get; set; }
        public string SubjectVm { get; set; }
        public string CommentVm { get; set; }

    }
}