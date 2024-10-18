const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  modelUrl: String,
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
