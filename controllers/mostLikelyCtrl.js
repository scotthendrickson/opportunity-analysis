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
var MostLikely = mongoose.model('mostLikely', schema);

module.exports = {

  getProductsMostLikely : function(req, res){
    if(!req.params.id){
      return res.status(400).send("id required to search the database")
    }
    MostLikely.find({"userId":req.params.id}, function(err, response){
      console.log(err);
      return err ? res.status(500).json(err) : res.json(response);
    })
  },

  createProductMostLikely : function(req, res){
    MostLikely.create(req.body, function(err, response){
      console.log(err);
      return err ? res.status(500).json(err) : res.json(response);
  })
},

  findIndividualMostLikely : function(req, res){
    if(!req.params.id){
      return res.status(400).send("id required to search the database")
    }
    MostLikely.findById(req.params.id, function(err, response){
      console.log(err);
      return err ? res.status(500).json(err) : res.json(response);
    })
  },

  updateProductMostLikely : function(req, res){
    if(!req.params.id){
      return res.status(400).send("id required to update database")
    }
    MostLikely.findByIdAndUpdate(req.params.id, req.body, function(err,response){
      console.log(err);
      return err ? res.status(500).json(err) : res.json(response);
    })
  },

  removeProductMostLikely : function(req, res){
    if(!req.params.id){
      return res.status(400).send("id required to delete an item")
    }
    MostLikely.findByIdAndRemove(req.params.id, function(err, response){
      console.log(err);
      return err ? res.status(500).json(err) : res.json(response);
  })
},
}
