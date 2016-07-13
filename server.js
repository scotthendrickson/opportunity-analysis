var express = require('express'),
    bodyParser = require('body-parser'),
    serverCtrl = require('./controllers/serverCtrl'),
    userCtrl = require('./controllers/userCtrl'),
    mostLikelyCtrl = require('./controllers/mostLikelyCtrl'),
    worstCtrl = require('./controllers/worstCtrl'),
    blendedCtrl = require('./controllers/blendedCtrl'),
    mongoose = require('mongoose');

var MONGO_URI = process.env.MONGO_URI;


mongoose.connect(MONGO_URI,  function (err, res) {
      if (err) {
        console.log ('ERROR connecting to products. '  + err);
      } else {
        console.log ('Successfully connected to products.');
      }
    });



var app = express();
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));

//Product Best DB
app.post('/api/products', serverCtrl.createProduct);
app.get('/api/products/:id', serverCtrl.getProducts)
app.put('/api/products/:id', serverCtrl.updateProduct)
app.delete('/api/products/:id', serverCtrl.removeProduct)

//Product Most Likely DB
app.post('/api/mostLikely', mostLikelyCtrl.createProductMostLikely);
app.get('/api/mostLikely/:id', mostLikelyCtrl.getProductsMostLikely)
app.put('/api/mostLikely/:id', mostLikelyCtrl.updateProductMostLikely)
app.delete('/api/mostLikely/:id', mostLikelyCtrl.removeProductMostLikely)

//Product Worst DB
app.post('/api/worst', worstCtrl.createProductWorst);
app.get('/api/worst/:id', worstCtrl.getProductsWorst)
app.put('/api/worst/:id', worstCtrl.updateProductWorst)
app.delete('/api/worst/:id', worstCtrl.removeProductWorst)

//Product Blended DB
app.post('/api/blended', blendedCtrl.createProductBlended);
app.get('/api/blended/:id', blendedCtrl.getProductsBlended)
app.put('/api/blended/:id', blendedCtrl.updateProductBlended)
app.delete('/api/blended/:id', blendedCtrl.removeProductBlended)

//User DB
app.get('/api/users', userCtrl.getUsers)
app.post('/api/users', userCtrl.createUser);
app.get('/api/users/:id', userCtrl.findIndividual)
app.put('/api/users/:id', userCtrl.updateUser)
app.delete('/api/users/:id', userCtrl.removeUser)

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("Listening on port", port)
})
