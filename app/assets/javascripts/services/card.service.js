Jello.factory('cardService', ['Restangular', 
  function(Restangular) {
    
    var _cards = [];

    var find = function(id) {
      return Restangular.one('cards', id).get()
        .then(function(card) {
          return card;
        })
    }

    var create = function(title, list_id) {
      return Restangular.all('cards').post({card: { title: title, list_id: list_id}})
        .then(function(card) {
          _cards.push(card);
          return card
        })
    }

    var destroy = function(id){
      return Restangular.one('cards', id).remove()
        .then(function(card) {
          return card;
        })
    }

    var update = function(id, title, body){
      return Restangular.one('cards', id).patch({card: { title: title, body: body}})
        .then(function(card) {
          return card 
          })
    }

    return {
      find: find,
      create: create,
      destroy: destroy,
      update: update
    }
  }])