(function () {
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', function($scope) {
    $scope.list = "";
    $scope.message = "";
    $scope.displayMessage = function () {
      $scope.message = calculateResult($scope.list);
    }

    function calculateResult(string) {
      var listArr = string.split(',');
      listArr = cleanArray(listArr);
      var message = "";
      if(listArr.length == 0)
        return "Please enter data first";
      else if (listArr.length <= 3) {
        message = "Enjoy!";
      }
      else {
        message = "Too much!";
      }
      return message;
    }

    function cleanArray(arr) {
      var newArray = [];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].trim()) {
          newArray.push(arr[i]);
        }
      }
      return newArray;
    }
  });
})();
