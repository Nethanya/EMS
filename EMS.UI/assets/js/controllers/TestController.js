
var gblVal = '';


emsApp.controller('mycntlr', ['$scope', '$http', function ($scope, $http) {


    $scope.testdata = [];
    $scope.CurrentPageVm = 0; //PageIndex
    $scope.NoRowsVM = 3;   //PageSize
    $scope.SearchVM = "";
    $scope.pfilterByFieldsVM = "";
    $scope.pOrderByVM = "IDVm";    //SortBy
    $scope.pOrderByReverseVM = false;  //SortDirection = 0
  
    $scope.ButtonText = "Save";
   
 

    $scope.onServerSideItemsRequested = function (currentPage, pageItems, filterBy, filterByFields, orderBy, orderByReverse) {
      
        var datobj = new Object();
        datobj.CurrentPageVm = currentPage;
        datobj.NoRowsVM = pageItems;
        datobj.SearchVM = filterBy;
        datobj.pOrderByVM = orderBy;
        datobj.pOrderByReverseVM = orderByReverse;
        $http.post("../Test/GetData", datobj)
        .success(function (success) {
            $scope.testdata = success.List;
            $scope.TotalRowCount = success.TotalRows;
            
        });
       
    };
   

  
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
   //  debugger;
 var data = new Object();
  data.IDVm = $scope.ids;
  data.NameVm = $scope.Name;
  data.EmailVm = $scope.Email;
  data.SubjectVm = $scope.Subject;
  data.CommentVm = $scope.Comment;

 $http.post("../Test/Adddetails", data)
   .success(function (data) {
       toastr.success("Record Saved Successfully");
     
   });
     $scope.Reset();
     };

 
 $scope.EditDetails = function (testdata) {
     debugger;
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
        toastr.success("Record Deleted Succesfully");
        //$scope.GetDetails();
    });

 
 };

 $scope.Close = function () {
    
     gblVal = "";
    

 };



}]);
