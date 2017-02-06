ello.factory('cardService', ['Restangular', 
  function(Restangular) {
    
    var _cards;

    var find = function(id) {
      return Restangular.one('cards', id).get()
        .then(function(card) {
          return card;
        })
    }

    var create = function(title) {
      return Restangular.all('cards').post({board: { title: title}})
        .then(function(board) {
          _cards.unshift(card);
          return card
        })
    }

    var destroy = function(id){
      return Restangular.one('cards', id).remove()
        .then(function(card) {
          return card;
        })
    }

    return {
      find: find,
      create: create,
      destroy: destroy
    }
  }])