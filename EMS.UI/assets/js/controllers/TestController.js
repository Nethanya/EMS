
emsApp.controller('mycntlr', ['$scope', '$http', function ($scope, $http) {
    $scope.testdata = [];
    $scope.ButtonText = "Save";


    $scope.SaveData = function () {
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
                $scope.testdata = data;
            });
    };

    $scope.GetDetails();

    $scope.EditDetails = function (testdata) {
        debugger;
        $scope.Name = testdata.NameVm;
        $scope.Email = testdata.EmailVm;
        $scope.Subject = testdata.SubjectVm;
        $scope.Comment = testdata.CommentVm;
        $scope.ButtonText = "Update";
    };
}]);
