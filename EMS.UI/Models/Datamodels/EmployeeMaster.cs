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
        public String Id { get; set; }
        [Required]
        public string EmployeeName { get; set; }
     
        [Required]
        public int Age { get; set; }
        [Required]
        public DateTime DOB { get; set; }
        public string StreetAddress { get; set; }
        [Required]
        public string PermanentAddress { get; set; }
        [Required]
        public string Gender { get;set; }
        [Required]
        public string PhoneNumber{get;set;}
        public string EmailId { get; set; }
       
        [Required]
        public string PassPortNumber { get; set; }
        [Required]
        public DateTime PassportExpiryDate { get; set; }
        [Required]
        public string EmiratesId { get; set; }
        public string LicenceNumber { get; set; }
        [Required]
        public DateTime EmiratesExpiryDate { get; set; }
        [Required]
        public string Nationality { get; set; }
        [Required]
        public DateTime DOJ { get; set; }
        [Required]
        public string Qualification { get; set; }
        [Required]
        public string Role { get; set; }

        public string Designation { get; set; }
        [Required]
        public Double Salary { get; set; }
        [Required]
        public int EmployeeType { get; set; }
        //public string SupplierCompanyName { get; set; }
        [Required]
        public string ContactName { get;set; }
        [Required]
        public string ContactPhone { get; set; }
      
        
        public string IsActive { get; set; }
    
    }
}