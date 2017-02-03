Jello.controller('ListIndexCtrl', ['$scope', "boardService",
  function($scope, boardService) {
    $scope.createBoard = function(){
      boardService.create($scope.title)
    }
  }]);