app.service("EmployeeService", function ($http) {

    this.SaveUser = function (EmployeeDetails) {            //EmployeeDetails is the object passed from angular js.
        var request = $http({
            method: "post",
            url: "EmployeeRegistration/Adduser",          //Controller/method name is used
            data: JSON.stringify(EmployeeDetails),      //JSON.stringify turns a Javascript object into JSON text and stores that JSON text in a string.
            datatype: "JSON"
        });

        return request;
    }

});