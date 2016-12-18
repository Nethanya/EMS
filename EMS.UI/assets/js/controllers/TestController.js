
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


 $scope.Search = function () {
     alert('search');
     if (($('#SearchTxt').val() != "") || $scope.SearchVM != undefined) {
         //$scope.SearchVM = $scope.Search;
         $scope.LoadDetail(0, 3, $scope.SearchVM, "", "", false);
     }
 };


 $scope.onServerSideItemsRequested = function (currentPage, pageItems, filterBy, filterByFields, orderBy, orderByReverse) {
     $scope.LoadDetail(currentPage, pageItems, filterBy, filterByFields, orderBy, orderByReverse);
       
 };

 $scope.LoadDetail = function (currentPage, pageItems, filterBy, filterByFields, orderBy, orderByReverse) {
var datobj = new Object();
datobj.CurrentPageVm = currentPage;
datobj.NoRowsVM = pageItems;
datobj.SearchVM = filterBy;
datobj.pOrderByVM = orderBy;
datobj.pOrderByReverseVM = orderByReverse;
$http.post("../Test/GetData", datobj)
.success(function (success) {
     $scope.testdata = success.List;
     //$scope.tes=testdata.IDVm;
     $scope.TotalRowCount = success.TotalRows;

     });
 };
 $scope.ResetGrid = function () {
     $scope.SearchVM = ""
     $('#SearchTxt').val('');
     $scope.LoadDetail(0, 3, "", "", "", false);
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

 $scope.EditDetails = function (dat) {
  $scope.ids = dat.IDVm;
  $scope.Name =dat.NameVm;
  $scope.Email = dat.EmailVm;
  $scope.Subject = dat.SubjectVm;
  $scope.Comment = dat.CommentVm;
  $scope.ButtonText = "Update";
  gblVal =dat.IDVm;
    };

 $scope.DeleteData = function (dats) {
     debugger;
   gblVal = dats.IDVm;
 };

 $scope.AddNewItem = function () {
  
     $scope.ButtonText = "Save";
     gblVal = "";
     $scope.Reset();

 }

 $scope.ConfirmDelete = function (dat) {
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
