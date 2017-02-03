Jello.('BoardShowCtrl', ['$scope', '$stateParams', '$state', 'boardService',
  function($scope, $stateParams, $state) {
    if (!$stateParams.id) {
      $scope.board = boards
      $stateParams.id = $scope.boards[0]
    }
  }])