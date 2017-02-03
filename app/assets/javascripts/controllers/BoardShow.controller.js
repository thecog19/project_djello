Jello.controller('BoardShowCtrl', ['$scope', '$stateParams', '$state', 'board',
  function($scope, $stateParams, $state, board) {
    $scope.currentBoard = board;
    console.log('hello?')
    console.log($scope.currentBoard)
  }])