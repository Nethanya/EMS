app.controller('EmployeeRegController', function ($scope, EmployeeService) {

    $scope.AddEmployee = function () {
        var Employee = {

            EmployeeName: $scope.EmpName,
            EmployeeId: $scope.EmpId,
            Age: $scope.EmpAge,
            DOB: $scope.Dob,
            StreetAddress: $scope.Address,
            PermanentAddress: $scope.PAddress,
            Gender: $scope.EmpGender,
            PhoneNumber: $scope.phNO,
            EmailId: $scope.Email,
            PostalCode: $scope.Postalcode,
            // UserName
            PassPortNumber: $scope.Passnumber,
            PassportExpiryDate: $scope.Passexpdate,
            EmiratesId: $scope.EmirNo,
            LicenceNumber: $scope.LicenceNo,
            EmiratesExpiryDate: $scope.EmirExp,
            Bloodgroup: $scope.Blood,
            Nationality: $scope.Nationality,
            DOJ: $scope.DOJ,
            Qualification: $scope.Qualification,
            //YearCompleted
            Role: $scope.Rol,
            Department: $scope.Department,
            Salary: $scope.Sal,
            EmployeeType: $scope.emptyp,
            //SupplierCompanyName
            ContactName: $scope.ContactName,
            ContactPhone: $scope.ContactNo,
            Relation: $scope.Relation,
        }
        var ff = EmployeeService.SaveUser(Employee);
    }



});