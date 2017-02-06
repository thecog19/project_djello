Jello.factory('listService', ['Restangular', 
  function(Restangular) {
    
    var _lists;

    var find = function(id) {
      return Restangular.one('lists', id).get()
        .then(function(list) {
          return list;
        })
    }

    var create = function(title) {
      return Restangular.all('lists').post({board: { title: title}})
        .then(function(board) {
          _lists.unshift(list);
          return list
        })
    }

    var destroy = function(id){
      return Restangular.one('lists', id).remove()
        .then(function(list) {
          return list;
        })
    }

    return {
      find: find,
      create: create,
      destroy: destroy
    }
  }])