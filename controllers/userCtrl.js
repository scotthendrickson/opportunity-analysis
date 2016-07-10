var mongoose = require('mongoose');
Schema = mongoose.Schema;
var schema = new Schema({
  firstName: {
    type: String,
    required: true,
    index: true,
  },
  lastName: {
    type: String,
    required: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    index: true,
  },
  login: {
    type: String,
    required: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
    index: true,
  },
  confirmedPassword: {
    type: String,
    required: true,
    index: true,
  }
});
var User = mongoose.model('users', schema);
module.exports = {
  getUsers : function(req, res){
    User.find().exec(function(err, response) {
      return err ? res.status(500).json(err) : res.json(response);
    });
  },
  createUser : function(req, res){
    console.log("Creating user: ", req.body.login)
    User.create(req.body, function(err, response){
      return err ? res.status(500).json(err) : res.json(response);
    })
  },

  findIndividual : function(req, res){
    if(!req.params.id){
      return res.status(400).send("id required to search the database")
    }
    User.find({"login":req.params.id}, function(err, response){
      return err ? res.status(500).json(err) : res.json(response);
    })
  },

  updateUser : function(req, res){
    if(!req.params.id){
      return res.status(400).send("id required to update database")
    }
    User.findByIdAndUpdate(req.params.id, req.body, function(err,response){
      return err ? res.status(500).json(err) : res.json(response);
    })
  },

  removeUser : function(req, res){
    if(!req.params.id){
      return res.status(400).send("id required to delete an item")
    }
    User.findByIdAndRemove(req.params.id, function(err, response){
      return err ? res.status(500).json(err) : res.json(response);
  })
},
}
