
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
     if (gblVal != "") {
         $scope.EditDetails();
    
 }
     else {
         $scope.ids = "";
         $scope.Name = "";
         $scope.Email = "";
         $scope.Subject = "";
         $scope.Comment = "";

 }
};

 $scope.SaveData = function () {
     debugger;
 var data = new Object();
  data.IDVm = $scope.ids;
  data.NameVm = $scope.Name;
  data.EmailVm = $scope.Email;
  data.SubjectVm = $scope.Subject;
  data.CommentVm = $scope.Comment;

 $http.post("../Test/Adddetails", data)
   .success(function (data) {
       alert("Saved Sucessfully");
     
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
  gblVal = testdata.IDVm;
    };

 $scope.DeleteData = function (testdata) {
     
   gblVal = testdata.IDVm;
 };

 $scope.AddNewItem = function () {
  
     $scope.ButtonText = "Save";
     gblVal = "";
     $scope.Reset();

 }

 $scope.ConfirmDelete = function () {

  var obj = new Object();
  obj.IDVm = gblVal;
  $http.post("../Test/Deletedetails", obj)
    .success(function (data) {
        alert("Record Deleted");
        $scope.GetDetails();
    });

 
 };

 $scope.Close = function () {
     debugger;
     gblVal = "";
     $scope.GetDetails();

 };

}]);
