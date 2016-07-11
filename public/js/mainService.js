angular.module('routerApp').service('mainService', function($http, $q){

  this.getData =  function(id){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: "/api/products/" + id
    }).then(function(response){
      deferred.resolve(response.data);
    })
    return deferred.promise
  }
  this.findIndividual = function(id){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: "/api/products/" + id
    }).then(function(response){
      deferred.resolve(response.data);
    })
    return deferred.promise
  }
  this.destroy = function(id){
    var deferred = $q.defer();
    $http({
      method: 'DELETE',
      url: "/api/products/" + id
    }).then(function(response){
      deferred.resolve(response);
    })
    return deferred.promise
  }
  this.create = function(body){
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: "/api/products",
      data: body
    }).then(function(response){
      deferred.resolve(response.data);
    })
    return deferred.promise
  }
  this.update = function(id, body){
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: "/api/products/" + id,
      data: body
    }).then(function(response){
      deferred.resolve(response.data);
    })
    return deferred.promise
  }

  //These are your mostLikely requests
  this.getDataMostLikely =  function(id){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: "/api/mostLikely/" + id
    }).then(function(response){
      deferred.resolve(response.data);
    })
    return deferred.promise
  }
  this.findIndividualMostLikely = function(id){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: "/api/mostLikely/" + id
    }).then(function(response){
      deferred.resolve(response.data);
    })
    return deferred.promise
  }
  this.destroyMostLikely = function(id){
    var deferred = $q.defer();
    $http({
      method: 'DELETE',
      url: "/api/mostLikely/" + id
    }).then(function(response){
      deferred.resolve(response);
    })
    return deferred.promise
  }
  this.createMostLikely = function(body){
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: "/api/mostLikely",
      data: body
    }).then(function(response){
      deferred.resolve(response.data);
    })
    return deferred.promise
  }
  this.updateMostLikely = function(id, body){
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: "/api/mostLikely/" + id,
      data: body
    }).then(function(response){
      deferred.resolve(response.data);
    })
    return deferred.promise
  }

  //These are your worst requests
  this.getDataWorst =  function(id){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: "/api/worst/" + id
    }).then(function(response){
      deferred.resolve(response.data);
    })
    return deferred.promise
  }
  this.findIndividualWorst = function(id){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: "/api/worst/" + id
    }).then(function(response){
      deferred.resolve(response.data);
    })
    return deferred.promise
  }
  this.destroyWorst = function(id){
    var deferred = $q.defer();
    $http({
      method: 'DELETE',
      url: "/api/worst/" + id
    }).then(function(response){
      deferred.resolve(response);
    })
    return deferred.promise
  }
  this.createWorst = function(body){
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: "/api/worst",
      data: body
    }).then(function(response){
      deferred.resolve(response.data);
    })
    return deferred.promise
  }
  this.updateWorst = function(id, body){
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: "/api/worst/" + id,
      data: body
    }).then(function(response){
      deferred.resolve(response.data);
    })
    return deferred.promise
  }
  //These are your blended requests
  this.getDataBlended =  function(id){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: "/api/blended/" + id
    }).then(function(response){
      deferred.resolve(response.data);
    })
    return deferred.promise
  }
  this.findIndividualBlended = function(id){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: "/api/blended/" + id
    }).then(function(response){
      deferred.resolve(response.data);
    })
    return deferred.promise
  }
  this.destroyBlended = function(id){
    var deferred = $q.defer();
    $http({
      method: 'DELETE',
      url: "/api/blended/" + id
    }).then(function(response){
      deferred.resolve(response);
    })
    return deferred.promise
  }
  this.createBlended = function(body){
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: "/api/blended",
      data: body
    }).then(function(response){
      deferred.resolve(response.data);
    })
    return deferred.promise
  }
  this.updateBlended = function(id, body){
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: "/api/blended/" + id,
      data: body
    }).then(function(response){
      deferred.resolve(response.data);
    })
    return deferred.promise
  }



//These are your user requests
this.findUser = function(id){
  var deferred = $q.defer();
  $http({
    method: 'GET',
    url: "/api/users/" + id
  }).then(function(response){
    deferred.resolve(response.data);
  })
  return deferred.promise
}

this.destroyUser = function(id){
  var deferred = $q.defer();
  $http({
    method: 'DELETE',
    url: "/api/users/" + id
  }).then(function(response){
    deferred.resolve(response);
  })
  return deferred.promise
}

this.createUser = function(body){
  var deferred = $q.defer();
  $http({
    method: 'POST',
    url: "/api/users",
    data: body
  }).then(function(response){
    deferred.resolve(response.data);
  })
  return deferred.promise
}
this.updateUser = function(id, body){
  var deferred = $q.defer();
  $http({
    method: 'PUT',
    url: "/api/users/" + id,
    data: body
  }).then(function(response){
    deferred.resolve(response.data);
  })
  return deferred.promise
}

})
