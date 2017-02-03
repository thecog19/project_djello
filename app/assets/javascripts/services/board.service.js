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

    var find = function(id) {
      return Restangular.one('boards', id).get()
        .then(function(board) {
          return board;
        })
    }

    var create = function(title) {
      return Restangular.all('boards').post({board: { title: title}})
        .then(function(board) {
          _boards.unshift(board);
          return board
        })
    }

    return {
      all: all,
      find: find,
      create: create
    }
  }])