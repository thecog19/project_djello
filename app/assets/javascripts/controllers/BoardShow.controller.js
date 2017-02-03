
Jello.controller('BoardShowCtrl', ['$scope', '$stateParams', '$state', 'boards', "board",
  function($scope, $stateParams, $state, boards, board) {
    $scope.boards = boards
    $scope.currentBoard = board
  }])