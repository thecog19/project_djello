Jello.factory('boardService', ['Restangular', 
  function(Restangular) {
    
    var _boards = Restangular.all('boards').getList().$object;

    var all = function() {
      return _boards;
    }

    return {
      all: all
    }
  }])