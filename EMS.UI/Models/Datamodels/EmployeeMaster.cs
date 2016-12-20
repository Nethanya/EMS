using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using EmployeeRegistrationusing_angular_and_mvc.Models.Datamodels;

namespace EmployeeRegistrationusing_angular_and_mvc
{
    public class EmployeeMaster
    {
        public TrngData TrngData { get; set; }


        [Key]
        public String EmployeId { get; set; }
        [Required]
        public string EmployeeName { get; set; }
     
        [Required]
        public int Age { get; set; }
        [Required]
        public DateTime DOB { get; set; }
        [Required]
        public string Gender { get; set; }
        public string EmailId { get; set; }
        [Required]
        public string PassPortNumber { get; set; }
        [Required]
        public DateTime PassportExpiryDate { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
         
       
       
       
        [Required]
        public string EmiratesId { get; set; }
        [Required]
        public DateTime EmiratesExpiryDate { get; set; }
        [Required]
        public string Nationality { get; set; }
        [Required]
        public DateTime DOJ { get; set; }
        [Required]
        public string Qualification { get; set; }
      
        public string Designation { get; set; }
        [Required]
        public Double Salary { get; set; }
        [Required]
        public int EmployeeType { get; set; }
        public string YearCompleted { get; set; }
        
        [Required]
        public string PermanentAddress { get; set; }


        public string IsActive { get; set; }
    
    }
}