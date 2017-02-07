
Jello.controller('BoardShowCtrl', ['$scope', '$stateParams', '$state', 'boards', "board", "cardService", "$rootScope", "listService",
  function($scope, $stateParams, $state, boards, board, cardService, $rootScope, listService) {
    $scope.boards = boards
    $scope.currentBoard = board
    $scope.boardId = board.id
    $scope.$on("updateList", function(){
        $state.go("boards", {id:  $scope.boardId}, {reload: true})
    })
    $scope.body
    $scope.title

    $scope.changeBoard = function(){
      $state.go("boards", {id: $scope.boardId}, {reload: true})
    }

    $scope.destroyCard = function(id){ cardService.destroy(id)
        .then(function() {
          $rootScope.$broadcast("updateList")
        })}

    $scope.destroyList = function(id){ listService.destroy(id)
        .then(function() {
          $rootScope.$broadcast("updateList")
        })}

    $scope.createList = function() {
    listService.create("New List", $scope.boardId)
        .then(function() {
          $rootScope.$broadcast("updateList")
        })
    }

    $scope.createCard = function(list_id) {
    cardService.create("New Card", list_id)
        .then(function() {
          $rootScope.$broadcast("updateList")
        })
    }

    $scope.updateList = function(){
      listService.update($scope.title, $scope.body)
        .then(function() {
          $rootScope.$broadcast("updateList")
        })
    }
    $scope.hoverIn = function(id){
        if(id === undefined){
          this.hovering = true;
      }else{
        this.hoveringId = id
      }
    };

    $scope.hoveringCard = function(id){
      if(this.hoveringId === id){
        return true
      }else{
        return false
      }
    }

    $scope.hoverOut = function(id){
      if(id === undefined){
          this.hovering = false;
      }else{
        this.hoveringId = undefined
      }
    };

    $scope.triggerModal = function(id){
      $("#myModal" + id).modal("show")
    }

    $scope.clear = function(id){
      $("#myModal" + id).modal("hide")
      $(".modal-backdrop").remove()
    }

    $scope.activateEdit = function(id, title, body){
      console.log("id is:" + id)
      $("#myModalLabel" + id).hide()
      $("#myModalBody" + id).hide()
      $("#edit" + id).hide()
      $scope.title = title
      $scope.body = body

      $(".modal-header").html("<label>Title:</label><input type='text' ng-model='title' value='"+title+"'>")
      $(".modal-body").html("<label>Body:</label><input type='text' ng-model='body' value='"+body+"'>")
      $("#saveEdit" + id).removeClass("hidden")
    }

    $scope.saveEdit = function(id){
      //need to also update it to hide the fill in fields 
      cardService.update(id, $scope.title, $scope.body).then(function(object){
        var id = object.id
        $("#myModalLabel" + id).show().text($scope.title)
        $("#myModalBody" + id).show().text($scope.body)
        $("#edit" + id).show()
      })
    }
  }])