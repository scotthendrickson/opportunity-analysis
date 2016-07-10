angular.module('routerApp').service('mainService', function($http, $q){

  this.getData =  function(id){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: "http://localhost:3000/api/products/" + id
    }).then(function(response){
      deferred.resolve(response.data);
    })
    return deferred.promise
  }
  this.findIndividual = function(id){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: "http://localhost:3000/api/products/" + id
    }).then(function(response){
      deferred.resolve(response.data);
    })
    return deferred.promise
  }
  this.destroy = function(id){
    var deferred = $q.defer();
    $http({
      method: 'DELETE',
      url: "http://localhost:3000/api/products/" + id
    }).then(function(response){
      deferred.resolve(response);
    })
    return deferred.promise
  }
  this.create = function(body){
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: "http://localhost:3000/api/products",
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
      url: "http://localhost:3000/api/products/" + id,
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
      url: "http://localhost:3000/api/mostLikely/" + id
    }).then(function(response){
      deferred.resolve(response.data);
    })
    return deferred.promise
  }
  this.findIndividualMostLikely = function(id){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: "http://localhost:3000/api/mostLikely/" + id
    }).then(function(response){
      deferred.resolve(response.data);
    })
    return deferred.promise
  }
  this.destroyMostLikely = function(id){
    var deferred = $q.defer();
    $http({
      method: 'DELETE',
      url: "http://localhost:3000/api/mostLikely/" + id
    }).then(function(response){
      deferred.resolve(response);
    })
    return deferred.promise
  }
  this.createMostLikely = function(body){
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: "http://localhost:3000/api/mostLikely",
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
      url: "http://localhost:3000/api/mostLikely/" + id,
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
      url: "http://localhost:3000/api/worst/" + id
    }).then(function(response){
      deferred.resolve(response.data);
    })
    return deferred.promise
  }
  this.findIndividualWorst = function(id){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: "http://localhost:3000/api/worst/" + id
    }).then(function(response){
      deferred.resolve(response.data);
    })
    return deferred.promise
  }
  this.destroyWorst = function(id){
    var deferred = $q.defer();
    $http({
      method: 'DELETE',
      url: "http://localhost:3000/api/worst/" + id
    }).then(function(response){
      deferred.resolve(response);
    })
    return deferred.promise
  }
  this.createWorst = function(body){
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: "http://localhost:3000/api/worst",
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
      url: "http://localhost:3000/api/worst/" + id,
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
      url: "http://localhost:3000/api/blended/" + id
    }).then(function(response){
      deferred.resolve(response.data);
    })
    return deferred.promise
  }
  this.findIndividualBlended = function(id){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: "http://localhost:3000/api/blended/" + id
    }).then(function(response){
      deferred.resolve(response.data);
    })
    return deferred.promise
  }
  this.destroyBlended = function(id){
    var deferred = $q.defer();
    $http({
      method: 'DELETE',
      url: "http://localhost:3000/api/blended/" + id
    }).then(function(response){
      deferred.resolve(response);
    })
    return deferred.promise
  }
  this.createBlended = function(body){
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: "http://localhost:3000/api/blended",
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
      url: "http://localhost:3000/api/blended/" + id,
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
    url: "http://localhost:3000/api/users/" + id
  }).then(function(response){
    deferred.resolve(response.data);
  })
  return deferred.promise
}

this.destroyUser = function(id){
  var deferred = $q.defer();
  $http({
    method: 'DELETE',
    url: "http://localhost:3000/api/users/" + id
  }).then(function(response){
    deferred.resolve(response);
  })
  return deferred.promise
}

this.createUser = function(body){
  var deferred = $q.defer();
  $http({
    method: 'POST',
    url: "http://localhost:3000/api/users",
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
    url: "http://localhost:3000/api/users/" + id,
    data: body
  }).then(function(response){
    deferred.resolve(response.data);
  })
  return deferred.promise
}

})
