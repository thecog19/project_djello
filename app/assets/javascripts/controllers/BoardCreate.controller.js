Jello.controller('BoardCreateCtrl', ['$scope', "boardService", "$stateParams", '$state',
  function($scope, boardService, $stateParams, $state) {
    console.log('submitting')
    $scope.createBoard = function(){
      boardService.create($scope.title)
        .then(function(board) {
          console.log('before redirect', board)
          $state.go('boards', { id: board.id })
        })
    }

    $scope.lastId = $stateParams.lastId
  }]);