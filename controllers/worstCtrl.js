var mongoose = require('mongoose');
Schema = mongoose.Schema;
var schema = new Schema({
  userId: {
    type: String,
    required: true,
    index: true,
  },
  bestId: {
    type: String,
    required: true,
    index: true,
  },
  name: {
    type: String,
    required: true,
    index: true,
    },
  description: {
    type: String,
    required: true
    },
  opportunity: {
    type: String,
    required: true
    },
  material: {
    type: Number,
    },
  production: {
    type: Number,
    },
  cogs: {
    type: Number,
    },
  markUp: {
    type: Number,
    },
  price: {
    type: Number,
    },
  profit: {
    type: Number,
    },
  research: {
    type: Number,
    },
  development: {
    type: Number,
    },
  marketing: {
    type: Number,
    },
  other: {
    type: Number,
    },
  investmentCost : {
    type: Number,
    },
  unitsYear: {
    type: Number,
    },
  unitsMonth: {
    type: Number,
    },
  unitsTotal: {
    type: Number,
    },
  firstYear: {
    type: {},   },
  resultsFirstYear: {
    type: {},
    },
  roiFirstYear: {
    type: {},
    },
  startingPercentage: {
    type: Number,
    },
  incrementPercentage: {
    type: Number,
    },
  breakEvenQty: {
    type: Number,
    },
  twentyProfitQty: {
    type: Number,
    },
  goalPrice: {
    type: Number,
    },
  goalProfitPerUnit: {
    type: Number,
    },
});
var Worst = mongoose.model('worst', schema);

module.exports = {

  getProductsWorst : function(req, res){
    if(!req.params.id){
      return res.status(400).send("id required to search the database")
    }
    Worst.find({"userId":req.params.id}, function(err, response){
      return err ? res.status(500).json(err) : res.json(response);
    })
  },

  createProductWorst : function(req, res){
    Worst.create(req.body, function(err, response){
      return err ? res.status(500).json(err) : res.json(response);
  })
},

  findIndividualWorst : function(req, res){
    if(!req.params.id){
      return res.status(400).send("id required to search the database")
    }
    Worst.findById(req.params.id, function(err, response){
      return err ? res.status(500).json(err) : res.json(response);
    })
  },

  updateProductWorst : function(req, res){
    if(!req.params.id){
      return res.status(400).send("id required to update database")
    }
    Worst.findByIdAndUpdate(req.params.id, req.body, function(err,response){
      return err ? res.status(500).json(err) : res.json(response);
    })
  },

  removeProductWorst : function(req, res){
    if(!req.params.id){
      return res.status(400).send("id required to delete an item")
    }
    Worst.findByIdAndRemove(req.params.id, function(err, response){
      return err ? res.status(500).json(err) : res.json(response);
  })
},
}
