
var gblVal = '';

emsApp.controller('mycntlr', ['$scope', '$http', function ($scope, $http) {
    $scope.testdata = [];
    $scope.ButtonText = "Save";

  
$scope.GetDetails = function () {
   $http.get("../Test/GetData")
     .success(function (data) {
      $scope.testdata = data;
      });
};
 $scope.GetDetails();

$scope.Reset = function () {
  $scope.ids = "";
  $scope.Name = "";
  $scope.Email = "";
  $scope.Subject = "";
  $scope.Comment = "";
};

 $scope.SaveData = function () {
 var data = new Object();
  data.IDVm = $scope.ids;
  data.NameVm = $scope.Name;
  data.EmailVm = $scope.Email;
  data.SubjectVm = $scope.Subject;
  data.CommentVm = $scope.Comment;

 $http.post("../Test/Adddetails", data)
   .success(function (data) {
   alert("Saved Sucessfully")
   });
     $scope.Reset();
     };

 
 $scope.EditDetails = function (testdata) {
  $scope.ids = testdata.IDVm;
  $scope.Name = testdata.NameVm;
  $scope.Email = testdata.EmailVm;
  $scope.Subject = testdata.SubjectVm;
  $scope.Comment = testdata.CommentVm;
  $scope.ButtonText = "Update";
    };

 $scope.DeleteData = function (testdata) {
       //debugger;
   gblVal = testdata.IDVm;
    };

 $scope.ConfirmDelete = function () {
 debugger;
  var obj = new Object();
  obj.IDVm = gblVal;
  $http.post("../Test/Deletedetails", obj)
    .success(function (data) {
     alert("Record Deleted" )
      });
    };

}]);
