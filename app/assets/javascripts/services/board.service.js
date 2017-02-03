Jello.factory('boardService', ['Restangular', 
  function(Restangular) {
    
    var _boards;

    var all = function() {
      return Restangular.all('boards').getList()
        .then(function(boards) {
          _boards = boards;
          return _boards;
        });
    }

    return {
      all: all
    }
  }])