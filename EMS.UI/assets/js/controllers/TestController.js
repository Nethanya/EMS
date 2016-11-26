
emsApp.controller('mycntlr', ['$scope', '$http', function ($scope, $http) {
    $scope.testdata=[];

    $scope.SaveData = function () {
        alert('click');

        // use $.param jQuery function to serialize data from JSON or othe wise we write json.stringyfy (data) at time of passing data
        var data = new Object();
        data.NameVm = $scope.Name;
        data.EmailVm = $scope.Email;
        data.SubjectVm = $scope.Subject;
        data.CommentVm = $scope.Comment;

        $http.post("../Test/Adddetails", data)
            .success(function (data) {
                alert('success');
            });
       
    };

    $scope.GetDetails = function () {

      
        $http.get("../Test/GetData")
            .success(function (data) {
                debugger;
                $scope.testdata = data;
                alert("fdfgdfgdfgd");

            });


    };
}]);