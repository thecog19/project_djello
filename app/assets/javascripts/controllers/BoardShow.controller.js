Jello.controller('BoardShowCtrl', ['$scope', '$stateParams', '$state', 'boards',
  function($scope, $stateParams, $state, boards) {
    $scope.boards = boards
    console.log($stateParams.id)
    if (!$stateParams.id) {
      $stateParams.id = $scope.boards[0]
    }
  }])