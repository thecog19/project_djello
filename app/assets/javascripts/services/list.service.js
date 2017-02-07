Jello.factory('listService', ['Restangular', 
  function(Restangular) {
    
    var _lists = [];

    var find = function(id) {
      return Restangular.one('lists', id).get()
        .then(function(list) {
          return list;
        })
    }

    var create = function(title, board_id) {
      return Restangular.all('lists').post({list: { title: title, board_id: board_id}})
        .then(function(list) {
          if(_lists){
          _lists.push(list);
          return list 
          }

        })
    }

    var destroy = function(id){
      return Restangular.one('lists', id).remove()
        .then(function(list) {
          return list;
        })
    }

    var update = function(title, body){
      return Restangular.all('lists').put({list: { title: title, body: body}})
        .then(function(list) {
          if(_lists){
          _lists.push(list);
          return list 
          }

        })
    }

    return {
      find: find,
      create: create,
      destroy: destroy,
      update: update
    }
  }])