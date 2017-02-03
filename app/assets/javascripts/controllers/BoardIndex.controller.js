Jello.controller('BoardIndexCtrl', ['$scope', 'boards', 'board',
  function($scope, boards, board) {
    console.log('index', boards)
    $scope.currentBoard = board
  }]);