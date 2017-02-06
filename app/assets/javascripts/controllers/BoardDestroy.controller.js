Jello.controller('BoardDestroyCtrl', ['$scope', "boardService", "$stateParams", '$state',
  function($scope, boardService, $stateParams, $state) {
    boardService.destroy($stateParams.id)
        .then(function() {
          console.log("here")
          boardService.all().then(
            function(board){
              var redir = board[0]
              console.log(board)
              $state.go("boards", {id: redir.boardId}, {reload: true})
            }
          )
        })
  
  }]);