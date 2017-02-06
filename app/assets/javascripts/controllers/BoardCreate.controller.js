Jello.controller('BoardCreateCtrl', ['$scope', "boardService", "$stateParams", '$state',
  function($scope, boardService, $stateParams, $state) {
    $scope.createBoard = function(){
      boardService.create($scope.title)
        .then(function(board) {
          $state.go('boards', { id: board.id })
        })
    }
    $scope.lastId = $stateParams.lastId
  }]);