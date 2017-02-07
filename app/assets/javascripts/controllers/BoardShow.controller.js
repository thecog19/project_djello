
Jello.controller('BoardShowCtrl', ['$scope', '$stateParams', '$state', 'boards', "board", "cardService", "$rootScope", "listService", "boardService",
  function($scope, $stateParams, $state, boards, board, cardService, $rootScope, listService, boardService) {
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

      $("#myModalLabel" + id).hide()
      $("#myModalBody" + id).hide()
      $("#edit" + id).hide()
      $scope.title = title
      $scope.body = body



      $("#mHeader" + id).removeClass("hidden")
      $("#mFooter" + id).removeClass("hidden")
      $("#saveEdit" + id).removeClass("hidden")
    }

    $scope.saveEdit = function(id, title, body){
      console.log($scope.title)
      cardService.update(id, title, body).then(function(object){
        var id = object.id
        $("#myModalLabel" + id).show().text(title)
        $("#myModalBody" + id).show().text(body)
        $("#edit" + id).show()
        $("#mFooter" + id).addClass("hidden")
        $("#mHeader" + id).addClass("hidden")
        $("#saveEdit" + id).addClass("hidden")
      })
    }

    $scope.listEdit = function(id){
      $("#listForm" + id).removeClass("hidden")
      $("#listInfo" + id).addClass("hidden")
    }

    $scope.listChange = function(id, title, body){
       listService.update(id, title, body)
      $("#listForm" + id).addClass("hidden")
      $("#listInfo" + id).removeClass("hidden")
    }

    $scope.boardEdit = function(){
      $("#boardForm").removeClass("hidden")
      $("#boardInfo").addClass("hidden")
    }

    $scope.boardChange = function(id, title, body){
       boardService.update(id, title, body)
      $("#boardForm").addClass("hidden")
      $("#boardInfo").removeClass("hidden")
    }
  }])