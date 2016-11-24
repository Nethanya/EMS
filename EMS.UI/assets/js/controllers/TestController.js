
emsApp.controller('mycntlr', ['$scope', '$http', function ($scope, $http) {




    $scope.SaveData = function () {
        alert('click');

        // use $.param jQuery function to serialize data from JSON or othe wise we write json.stringyfy (data) at time of passing data
        var data = new Object();
        data.NameVm = $scope.Name;
        data.EmailVm = $scope.Email;
        data.SubjectVm = $scope.Subject;
        data.CommentVm = $scope.Comment;

        //CAlling the service

        //this.$http({
        //    method: 'POST',
        //    url: '../Test/Adddetails',
        //    data: Datas

        //});

        $http.post("../Test/Adddetails", data)
            .success(function (data) {
                alert('success');
            });

        //var req = {
        //    method: 'POST',
        //    url: '../Test/Adddetails',
        //    data: Datas
        //}
        //$http(req).then(function (responce) {
        //    // success function
        //}, function (responce) {
        //    // Failure Function
        //});




    };
}]);