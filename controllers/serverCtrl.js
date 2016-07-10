var mongoose = require('mongoose');
Schema = mongoose.Schema;
var schema = new Schema({
  userId: {
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
var Product = mongoose.model('product', schema);
module.exports = {
  getProducts : function(req, res){
    if(!req.params.id){
      return res.status(400).send("id required to search the database")
    }
    Product.find({"userId":req.params.id}, function(err, response){
      console.log(err);
      return err ? res.status(500).json(err) : res.json(response);
    })
  },

  createProduct : function(req, res){
    Product.create(req.body, function(err, response){
      console.log(err);
      return err ? res.status(500).json(err) : res.json(response);
  })
},

  findIndividual : function(req, res){
    if(!req.params.id){
      return res.status(400).send("id required to search the database")
    }
    Product.findById(req.params.id, function(err, response){
      console.log(err);
      return err ? res.status(500).json(err) : res.json(response);
    })
  },

  updateProduct : function(req, res){
    if(!req.params.id){
      return res.status(400).send("id required to update database")
    }
    Product.findByIdAndUpdate(req.params.id, req.body, function(err,response){
      console.log(err);
      return err ? res.status(500).json(err) : res.json(response);
    })
  },

  removeProduct : function(req, res){
    if(!req.params.id){
      return res.status(400).send("id required to delete an item")
    }
    Product.findByIdAndRemove(req.params.id, function(err, response){
      console.log(err);
      return err ? res.status(500).json(err) : res.json(response);
  })
},
}
