Jello.controller('CardDestroyCtrl', ['$scope', "boardService", "$stateParams", '$state',
  function($scope, boardService, $stateParams, $state) {
    boardService.destroy($stateParams.id)
        .then(function() {
          //propagate the fact that it's been destroyed here
          //then update the list as a result
        })
  
  }]);